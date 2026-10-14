import fs from "node:fs/promises";
import { chromium } from "playwright-core";
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
try {
  const page = await browser.newPage({
    viewport: { width: Number(process.env.WIDTH || 1440), height: 1000 },
    deviceScaleFactor: 1,
  });
  const errors = [],
    external = [],
    missing = [],
    consoleErrors = [];
  page.on("pageerror", (e) =>
    errors.push({ message: e.message, name: e.name, stack: e.stack }),
  );
  page.on("console", (m) => {
    if (m.type() === "error") consoleErrors.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400) missing.push({ url: r.url(), status: r.status() });
  });
  await page.route("**/*", (route) => {
    const u = new URL(route.request().url());
    if (/^https?:/.test(u.protocol) && u.hostname !== "127.0.0.1") {
      external.push(u.href);
      return route.abort();
    }
    return route.continue();
  });
  await page.goto(process.env.LOCAL_URL || "http://127.0.0.1:3002", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForFunction(() => window.suiReady || window.suiError, {
    timeout: 30000,
  });
  await page.waitForTimeout(5500);
  await page.screenshot({ path: "evidence/local-desktop.png" });
  const state = await page.evaluate(() => ({
    ready: window.suiReady,
    error: window.suiError,
    height: document.documentElement.scrollHeight,
    heading: document.querySelector("h1")?.textContent,
    canvases: [...document.querySelectorAll("canvas")].map((c) => ({
      class: c.className,
      width: c.width,
      height: c.height,
    })),
    videos: [...document.querySelectorAll("video")].map((v) => ({
      src: v.currentSrc,
      ready: v.readyState,
    })),
  }));
  console.log(
    JSON.stringify(
      { state, errors, external, missing, consoleErrors },
      null,
      2,
    ),
  );
  await fs.writeFile(
    "evidence/local-probe.json",
    JSON.stringify(
      { state, errors, external, missing, consoleErrors },
      null,
      2,
    ),
  );
  if (errors.length || external.length || missing.length || !state.ready)
    process.exitCode = 1;
} finally {
  await browser.close();
}
