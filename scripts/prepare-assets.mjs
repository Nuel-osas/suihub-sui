import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { load } from "cheerio";

const capture =
  process.env.SUI_CAPTURE || "../site-capture-tool/output/sui-home-20260913";
const report = JSON.parse(
  await fs.readFile(path.join(capture, "capture-report.json"), "utf8"),
);
const html = await fs.readFile("evidence/original.html", "utf8");
const $ = load(html);
const browser = JSON.parse(
  await fs.readFile("evidence/initial-browser.json", "utf8"),
);
const excluded =
  /weglot|hubspot|cdn-cgi|webfont\/|slater\.app\/17378\.js|assets\.slater\.app\/slater\/17378\.js/;
const assets = new Map();
function add(url, resource = {}) {
  if (
    !/^https?:/.test(url) ||
    excluded.test(url) ||
    url.includes("/_external/")
  )
    return;
  if (assets.has(url)) return;
  let name = decodeURIComponent(new URL(url).pathname)
    .split("/")
    .pop()
    .replace(/[^\w.-]/g, "_");
  if (/fonts.googleapis/.test(url)) name = "inter.css";
  const destination =
    "/assets/" +
    createHash("sha256").update(url).digest("hex").slice(0, 8) +
    "-" +
    name;
  assets.set(url, { ...resource, url, destination });
}
for (const resource of report.resources) {
  if (resource.status === "downloaded" && resource.kind !== "page")
    add(resource.url, resource);
}
for (const request of browser.requests) {
  if (
    /cdn.prod.website-files.com|fonts.gstatic.com|unpkg.com\/@rive-app|cdnjs.cloudflare.com/.test(
      request.url,
    )
  )
    add(request.url);
}
$('[global-src],[data-rive-url],link[rel="shortcut icon"]').each((_, e) => {
  add(
    $(e).attr("global-src") || $(e).attr("data-rive-url") || $(e).attr("href"),
  );
});
add("https://unpkg.com/@rive-app/webgl2@2.35.0/rive.wasm");
const sequence =
  "https://res.cloudinary.com/dp6m7thfm/image/upload/sequences/homepage-scroll";
for (let i = 0; i <= 75; i++)
  add(`${sequence}/frame_${String(i).padStart(4, "0")}.webp`);
await fs.mkdir("evidence/raw-assets", { recursive: true });
await fs.mkdir("public/sequence", { recursive: true });
let total = 0;
async function download(batch) {
  const queue = [...batch];
  await Promise.all(
    Array.from({ length: 12 }, async () => {
      while (queue.length) {
        const asset = queue.shift();
        const raw = "evidence/raw-assets/" + path.basename(asset.destination);
        let bytes;
        try {
          bytes = await fs.readFile(raw);
          if (!bytes.length) throw new Error("Empty cached asset");
        } catch {
          if (
            asset.file &&
            !/css|javascript|json|svg/.test(asset.contentType || "")
          ) {
            bytes = await fs.readFile(path.join(capture, asset.file));
          } else {
            const response = await fetch(asset.url, {
              signal: AbortSignal.timeout(30000),
            });
            if (!response.ok)
              throw new Error(`${response.status}: ${asset.url}`);
            asset.contentType = response.headers.get("content-type");
            bytes = Buffer.from(await response.arrayBuffer());
          }
          if (!bytes.length) throw new Error("Empty response: " + asset.url);
          await fs.writeFile(raw, bytes);
        }
        asset.raw = raw;
        asset.bytes = bytes.length;
        total += bytes.length;
        if (total > 220_000_000) throw new Error("Asset budget exceeded");
      }
    }),
  );
}
await download(assets.values());
// Google Fonts can advertise additional font variants in its stylesheet.
for (const asset of [...assets.values()].filter(
  (a) => /css/.test(a.contentType || "") || a.url.includes("fonts.googleapis"),
)) {
  const css = await fs.readFile(asset.raw, "utf8");
  for (const m of css.matchAll(/url\(["']?(https?:[^\s)'";]+)/g)) add(m[1]);
}
await download([...assets.values()].filter((a) => !a.raw));
const replacements = [...assets.values()]
  .flatMap((a) => [
    [a.url, a.destination],
    [a.url.replace(/^http:/, "https:"), a.destination],
  ])
  .sort((a, b) => b[0].length - a[0].length);
function localize(text) {
  for (const [url, destination] of replacements)
    text = text.replaceAll(url, destination);
  return text.replaceAll(sequence, "/sequence");
}
for (const asset of assets.values()) {
  let bytes = await fs.readFile(asset.raw);
  if (
    /css|javascript|json|svg/.test(asset.contentType || "") ||
    /\.(js|json|css)(\?|$)/.test(asset.url)
  )
    bytes = Buffer.from(localize(bytes.toString()));
  await fs.writeFile("public" + asset.destination, bytes);
  if (asset.url.startsWith(sequence))
    await fs.copyFile(
      asset.raw,
      "public/sequence/" + new URL(asset.url).pathname.split("/").pop(),
    );
}
await fs.writeFile(
  "evidence/asset-manifest.json",
  JSON.stringify(
    { source: "https://www.sui.io/", assets: [...assets.values()] },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({ assets: assets.size, bytes: total, sequenceFrames: 76 }),
);
