// Captures « recruteur » : premier écran (6 s) et page entière, desktop 1440 et mobile 390, thème clair.
// Usage : CHROME_PATH=... node scripts/captures-recruteur.mjs <dossier de sortie>
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { serve } from "./serve.mjs";

const OUT = process.argv[2] || "captures";
const PORT = 4397;
const PAGES = {
  accueil: "/",
  "en-accueil": "/en/",
  gts: "/projets/gaijintosensei/",
  agents: "/projets/agents-ia/",
  systeme: "/projets/systeme/",
  apropos: "/a-propos/",
  cv: "/cv/",
};
await mkdir(OUT, { recursive: true });
const server = await serve(PORT);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
for (const [name, path] of Object.entries(PAGES)) {
  for (const [dev, vp] of [
    ["desktop", { width: 1440, height: 900 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, isMobile: dev === "mobile", hasTouch: dev === "mobile", colorScheme: "light" });
    const page = await ctx.newPage();
    const res = await page.goto(`http://127.0.0.1:${PORT}${path}`, { waitUntil: "networkidle" });
    if (!res || res.status() !== 200) { await ctx.close(); continue; }
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `${OUT}/${name}-${dev}-ecran1.png` });
    await page.screenshot({ path: `${OUT}/${name}-${dev}-page.png`, fullPage: true });
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log(name, dev, h);
    await ctx.close();
  }
}
await browser.close();
server.close();
