// Captures desktop (1440) et mobile (390) des pages clés, en clair et en sombre.
// Usage : CHROME_PATH=... node scripts/captures.mjs <dossier de sortie> [page...]
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { serve } from "./serve.mjs";

const OUT = process.argv[2] || "captures";
const PORT = 4398;
const PAGES = {
  accueil: "/",
  postmortem: "/projets/incident-base-de-donnees/",
  deploiement: "/comment-ce-site-est-deploye/",
  gts: "/projets/gaijintosensei/",
  infra: "/projets/infra-perso/",
  systeme: "/projets/systeme/",
  apropos: "/a-propos/",
  cv: "/cv/",
  "en-accueil": "/en/",
};
const only = process.argv.slice(3);
await mkdir(OUT, { recursive: true });
const server = await serve(PORT);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, args: ["--no-sandbox"] });
for (const [name, path] of Object.entries(PAGES)) {
  if (only.length && !only.includes(name)) continue;
  for (const [dev, vp] of [
    ["desktop", { width: 1440, height: 900 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    for (const theme of ["dark", "light"]) {
      const ctx = await browser.newContext({
        viewport: vp,
        deviceScaleFactor: dev === "mobile" ? 2 : 1,
        isMobile: dev === "mobile",
        hasTouch: dev === "mobile",
        colorScheme: theme,
      });
      const page = await ctx.newPage();
      await page.goto(`http://127.0.0.1:${PORT}${path}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const file = `${OUT}/${name}-${dev}-${theme === "dark" ? "sombre" : "clair"}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log(file);
      await ctx.close();
    }
  }
}
await browser.close();
server.close();
