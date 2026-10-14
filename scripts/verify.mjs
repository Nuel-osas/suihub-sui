import fs from "node:fs/promises";
import { chromium } from "playwright-core";

const localURL = process.env.LOCAL_URL || "http://127.0.0.1:3002";
const compare = process.argv.includes("--compare");
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
await fs.mkdir("evidence/verification", { recursive: true });
const reports = [];
try {
  for (const viewport of [
    { width: 1440, height: 1000 },
    { width: 390, height: 844 },
  ]) {
    for (const source of compare ? ["original", "local"] : ["local"]) {
      const context = await browser.newContext({
        viewport,
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const report = {
        source,
        viewport,
        errors: [],
        consoleErrors: [],
        missing: [],
        external: [],
        screenshots: [],
        interactions: [],
      };
      page.on("pageerror", (e) =>
        report.errors.push({ message: e.message, stack: e.stack }),
      );
      page.on("console", (m) => {
        if (m.type() === "error" && !report.consoleErrors.includes(m.text()))
          report.consoleErrors.push(m.text());
      });
      page.on("response", (r) => {
        if (r.status() >= 400)
          report.missing.push({ url: r.url(), status: r.status() });
      });
      if (source === "local")
        await page.route("**/*", (route) => {
          const url = new URL(route.request().url());
          if (
            /^https?:/.test(url.protocol) &&
            url.origin !== new URL(localURL).origin
          ) {
            report.external.push(url.href);
            return route.abort();
          }
          return route.continue();
        });
      await page.goto(source === "local" ? localURL : "https://www.sui.io/", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      await page.evaluate(() => document.fonts.ready);
      if (source === "local")
        await page.waitForFunction(
          () => window.suiReady || window.suiError,
          null,
          { timeout: 30000 },
        );
      await page.waitForTimeout(6500);
      await page.evaluate(async () => {
        for (const v of document.querySelectorAll("video")) {
          v.pause();
          if (v.readyState >= 2) v.currentTime = 2;
        }
      });
      await page.waitForTimeout(350);
      const screenshot = async (label) => {
        const file = `evidence/verification/${source}-${viewport.width}-${label}.png`;
        await page.screenshot({ path: file });
        report.screenshots.push(file);
      };
      await screenshot("hero");
      report.initial = await page.evaluate(() => ({
        ready: window.suiReady,
        error: window.suiError,
        height: document.documentElement.scrollHeight,
        overflow: document.documentElement.scrollWidth > innerWidth,
        sequenceWidth: document.querySelector(".canvas_sequence")?.width,
        h1: document.querySelector("h1")?.textContent,
      }));
      if (viewport.width > 767) {
        const toggle = page
          .locator(".navbar-dd_toggle")
          .filter({ hasText: "Stack" })
          .first();
        await toggle.click();
        await page.waitForTimeout(700);
        await screenshot("menu");
        report.interactions.push({
          name: "desktop menu opens",
          passed: await page
            .getByText("Intro to Sui Stack", { exact: false })
            .first()
            .isVisible(),
        });
        await toggle.click();
        await page.mouse.move(30, 500);
        await page.waitForTimeout(650);
      } else {
        await page.locator(".hamburger-menu").click();
        await page.waitForTimeout(700);
        await screenshot("menu");
        report.interactions.push({
          name: "mobile menu opens",
          passed: await page
            .locator(".hamburger-menu_component .hm_link")
            .filter({ hasText: "Stack" })
            .isVisible(),
        });
        await page.locator(".hamburger-menu").click();
        await page.waitForTimeout(400);
      }
      for (const [label, selector] of [
        ["basecamp", ".new_bc_section"],
        ["economy", ".stickyblink"],
        ["stack", "[scrollto-lenis]"],
        ["benefits", ".home-benefits"],
        ["industries", ".home-industry"],
        ["news", ".home-loop"],
        ["footer", ".scroll_footer"],
      ]) {
        await page.evaluate((selector) => {
          const el = document.querySelector(selector);
          const top = el.getBoundingClientRect().top + scrollY;
          window.scrollTo(0, top);
          window.ScrollTrigger?.update();
        }, selector);
        await page.waitForTimeout(label === "stack" ? 2200 : 1100);
        await screenshot(label);
      }
      report.media = await page.evaluate(() => ({
        videos: [...document.querySelectorAll("video")].map((v) => ({
          src: v.currentSrc,
          ready: v.readyState,
          width: v.clientWidth,
          height: v.clientHeight,
        })),
        brokenImages: [...document.images]
          .filter(
            (i) => i.clientWidth > 0 && i.complete && i.naturalWidth === 0,
          )
          .map((i) => i.src),
        links: [...document.querySelectorAll("a[href]")].map((a) =>
          a.getAttribute("href"),
        ),
        sequenceWidth: document.querySelector(".canvas_sequence")?.width,
      }));
      if (source === "local")
        report.sequence = await page.evaluate(async () => {
          return Promise.all(
            Array.from({ length: 76 }, async (_, i) => {
              const image = new Image();
              image.src =
                "/sequence/frame_" + String(i).padStart(4, "0") + ".webp";
              try {
                await image.decode();
                return { frame: i, passed: image.naturalWidth === 1440 };
              } catch {
                return { frame: i, passed: false };
              }
            }),
          );
        });
      report.passed =
        source === "local" &&
        report.initial.ready &&
        !report.initial.error &&
        !report.errors.length &&
        !report.missing.length &&
        !report.external.length &&
        !report.media.brokenImages.length &&
        report.interactions.every((i) => i.passed) &&
        report.sequence.every((i) => i.passed);
      reports.push(report);
      console.log(
        JSON.stringify({
          source,
          width: viewport.width,
          passed: report.passed,
          errors: report.errors,
          missing: report.missing,
          external: report.external,
          consoleErrors: report.consoleErrors,
          initial: report.initial,
          interactions: report.interactions,
        }),
      );
      await context.close();
    }
  }
} finally {
  await browser.close();
  await fs.writeFile(
    "evidence/verification/report.json",
    JSON.stringify({ reports }, null, 2),
  );
}
if (reports.some((r) => r.source === "local" && !r.passed))
  process.exitCode = 1;
