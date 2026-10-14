import fs from "node:fs/promises";
import { load } from "cheerio";
import postcss from "postcss";
import { format } from "prettier";

const $ = load(await fs.readFile("evidence/original.html", "utf8"));
const { assets } = JSON.parse(
  await fs.readFile("evidence/asset-manifest.json", "utf8"),
);
const mapping = new Map(assets.map((a) => [a.url, a.destination]));
const replacements = [...mapping].sort((a, b) => b[0].length - a[0].length);
function localize(text) {
  for (const [url, local] of replacements) text = text.replaceAll(url, local);
  return text.replaceAll(
    "https://res.cloudinary.com/dp6m7thfm/image/upload/sequences/homepage-scroll",
    "/sequence",
  );
}
const inline = $("script")
  .map((_, e) => $(e).html())
  .get();
const css = await fs.readFile(
  "public" + mapping.get($("link[rel=stylesheet]").attr("href")),
  "utf8",
);
const fonts = assets.find((a) => a.url.includes("fonts.googleapis.com/css?"));
await fs.writeFile(
  "src/app/globals.css",
  (
    css +
    "\n" +
    (fonts ? await fs.readFile("public" + fonts.destination, "utf8") : "") +
    "\n" +
    [
      ...new Set(
        $("style")
          .map((_, e) => localize($(e).html()))
          .get(),
      ),
    ].join("\n")
  )
    .replaceAll("\u00a0", " ")
    .replace(/(?:width|height)="100%";/g, ""),
);
await fs.appendFile(
  "src/app/globals.css",
  "\n/* Contain offscreen animation layers without changing vertical scrolling. */\nhtml { overflow-x: clip; }\n",
);
const vendorURLs = $("script[src]")
  .map((_, e) => $(e).attr("src"))
  .get()
  .filter((url) => /jquery|sui-v2|\/gsap\/|lenis@/.test(url));
const ordered = [
  ...vendorURLs.filter((url) => /jquery/.test(url)),
  ...vendorURLs.filter((url) => /\/gsap\//.test(url)),
  ...vendorURLs.filter((url) => /sui-v2/.test(url)),
  ...vendorURLs.filter((url) => /lenis@/.test(url)),
  ...assets.filter((a) => /lottie.min.js/.test(a.url)).map((a) => a.url),
];
await fs.writeFile(
  "src/lib/vendor-scripts.json",
  JSON.stringify(
    ordered.map((url) => mapping.get(url)),
    null,
    2,
  ),
);

// Rive builds this URL from its package name at runtime, so a whole-URL map alone
// cannot capture it. Keep the version-matched WASM engine on this origin.
const wasm = mapping.get("https://unpkg.com/@rive-app/webgl2@2.35.0/rive.wasm");
for (const a of assets.filter((a) => /sui-v2.*\.js/.test(a.url))) {
  let code = await fs.readFile(a.raw, "utf8");
  code = localize(code).replace(
    /"https:\/\/unpkg\.com\/"\.concat\(c\.name,"@"\)\.concat\(c\.version,"\/rive\.wasm"\)/g,
    JSON.stringify(wasm),
  );
  code = code.replace(
    /"https:\/\/cdn\.jsdelivr\.net\/npm\/"\.concat\(c\.name,"@"\)\.concat\(c\.version,"\/rive_fallback\.wasm"\)/g,
    JSON.stringify(wasm),
  );
  await fs.writeFile("public" + a.destination, code);
}

$("script,style,noscript").remove();
$(".global-styles").remove();
$("a[href]").each((_, e) => {
  const href = $(e).attr("href");
  if (href.startsWith("/") && !href.startsWith("//") && href !== "/")
    $(e).attr("href", new URL(href, "https://www.sui.io/").href);
  if (href === "https://www.sui.io" || href === "https://www.sui.io/")
    $(e).attr("href", "/");
});
$('a[target="_blank"]').attr("rel", "noopener noreferrer");
// Forms are handled locally by SiteRuntime; no original marketing endpoint.
$("form").removeAttr(
  "action method data-wf-hs-form data-wf-page-id data-wf-element-id",
);
$("form input[type=hidden]").remove();

const names = {
  enctype: "encType",
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  srcset: "srcSet",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  maxlength: "maxLength",
  readonly: "readOnly",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "vector-effect": "vectorEffect",
  preserveaspectratio: "preserveAspectRatio",
  viewbox: "viewBox",
  value: "defaultValue",
  checked: "defaultChecked",
};
const boolean = new Set([
  "autoplay",
  "muted",
  "loop",
  "playsinline",
  "controls",
  "disabled",
  "checked",
  "multiple",
  "required",
  "readonly",
  "hidden",
]);
const numeric = new Set(["tabindex", "maxlength", "colspan", "rowspan"]);
const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
const components = [];
function jsx(node) {
  if (node.type === "text")
    return node.data ? "{" + JSON.stringify(node.data) + "}" : "";
  if (!node.tagName) return "";
  if (node.tagName === "component-slot") return `<${node.attribs.name} />`;
  const props = {},
    tag = node.tagName;
  let style;
  for (let [key, value] of Object.entries(node.attribs || {})) {
    if (key.startsWith("on") || ["integrity", "crossorigin"].includes(key))
      continue;
    value = localize(value);
    if (key === "style") {
      style = {};
      postcss.parse("a{" + value + "}").first.walkDecls((d) => {
        const prop = d.prop.startsWith("--")
          ? d.prop
          : d.prop
              .replace(/^-ms-/, "ms-")
              .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        style[prop] = d.value;
      });
    } else
      props[names[key] || key] = boolean.has(key)
        ? true
        : numeric.has(key)
          ? Number(value)
          : value;
  }
  const attributes = Object.keys(props).length
    ? ` {...${JSON.stringify(props)}}`
    : "";
  return `<${tag}${attributes}${style ? ` style={${JSON.stringify(style)} as CSSProperties}` : ""}${voidTags.has(tag) ? " />" : ">" + node.children.map(jsx).join("") + `</${tag}>`}`;
}
async function tsx(file, code) {
  await fs.writeFile(file, await format(code, { parser: "typescript" }));
}
async function component(name, selector) {
  const nodes = $(selector).get();
  if (!nodes.length) throw new Error("Missing " + selector);
  await tsx(
    `src/components/sections/${name}.tsx`,
    `import type { CSSProperties } from 'react'; export default function ${name}() { return <>${nodes.map(jsx).join("")}</>; }`,
  );
  $(nodes[0]).replaceWith(`<component-slot name="${name}"></component-slot>`);
  for (const node of nodes.slice(1)) $(node).remove();
  components.push(name);
}
await component("Navigation", ".navbar");
await component("BasecampPopup", ".bc-popup, .bacecamp_popup_button");
await component("Hero", ".gradient_background");
await component("Basecamp", ".new_bc_section");
await component("Partners", ".home-carousel");
await component("Economy", ".home-selection");
await component("Stack", "[scrollto-lenis]");
await component("StackCaption", ".sticky_overlap.home-page");
await component("Benefits", ".home-benefits");
await component("Industries", ".home-industry");
await component("News", ".home-loop");
await component("Footer", ".scroll_footer");
await tsx(
  "src/app/page.tsx",
  `import type { CSSProperties } from 'react'; import SiteRuntime from '@/components/SiteRuntime'; ${components.map((name) => `import ${name} from '@/components/sections/${name}';`).join("\n")} export default function Home() { return <>${$("body").contents().get().map(jsx).join("")}<SiteRuntime /></>; }`,
);
await tsx(
  "src/app/layout.tsx",
  `import type { Metadata } from 'next'; import './globals.css'; export const metadata: Metadata = { title: 'Sui | The Infrastructure for Trusted Autonomous Execution', description: 'Sui is the infrastructure for trusted autonomous execution.', icons: {icon: ${JSON.stringify(mapping.get($('link[rel="shortcut icon"]').attr("href")))}}}; export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" className="w-mod-js" data-wf-page="69179b5ae96cc07d4b72e4d1" data-wf-site="68e8e0120513ba12c5cd12e0" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>; }`,
);

let globalCode = localize(
  await fs.readFile("evidence/slater-global.js", "utf8"),
);
globalCode = globalCode.replace(
  "export function initMainScrumble",
  "function initMainScrumble",
);
globalCode += "\nwindow.suiScramble = initMainScrumble;";
// Source bug: desktop homepage has no ecosystem navbar. Check before dereference.
globalCode = globalCode.replace(
  'i = o.querySelectorAll("[eco-nav-hidder]");',
  'i = o?.querySelectorAll("[eco-nav-hidder]");',
);
let homeCode = localize(await fs.readFile("evidence/slater-home.js", "utf8"));
homeCode = "const initMainScrumble = window.suiScramble;\n" + homeCode;
homeCode = homeCode.replace(
  "t.complete &&",
  "t.complete && t.naturalWidth > 0 &&",
);
// Keep the captured counter value. Live financial data is not a local backend.
homeCode = homeCode.replace(
  'await fetch("https://api.llama.fi/v2/chains")',
  'await fetch("/data/network-snapshot.json")',
);
homeCode = homeCode.replace(
  "gsap.ticker.add((e) => lenis.raf(1e3 * e))",
  "gsap.ticker.add(suiTick)",
);
homeCode = "const suiTick = (e) => lenis?.raf(1e3 * e);\n" + homeCode;
homeCode +=
  "\nwindow.suiLenis = lenis; return () => { gsap.ticker.remove(suiTick); player?.stop(); lenis?.destroy(); };";
await fs.mkdir("public/data", { recursive: true });
await fs.writeFile(
  "public/data/network-snapshot.json",
  JSON.stringify([{ name: "Sui", tvl: 380000000 }]),
);
const adapter = await fs.readFile("scripts/runtime-adapter.txt", "utf8");
const definitions = [
  ["global", globalCode],
  ["home", homeCode],
  ["carousel", localize(inline[29])],
  ["dotted", localize(inline[30])],
];
await fs.writeFile(
  "public/sui-interactions.js",
  adapter +
    "\n" +
    definitions
      .map(
        ([name, code]) =>
          `window.suiModules[${JSON.stringify(name)}] = function(window,document,setTimeout,clearTimeout,requestAnimationFrame,cancelAnimationFrame,ResizeObserver) {\n${code}\n};`,
      )
      .join("\n"),
);
console.log(
  JSON.stringify({
    components: components.length,
    assets: assets.length,
    vendorScripts: ordered.length,
  }),
);
