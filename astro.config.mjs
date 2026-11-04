// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { ROUTES, SITE_URL } from "./src/content/site.ts";

// hreflang dans le sitemap : les slugs diffèrent entre fr et en, on part de la table ROUTES.
const ALT = new Map();
for (const r of Object.values(ROUTES)) {
  const links = [
    { lang: "fr", url: SITE_URL + r.fr },
    { lang: "en", url: SITE_URL + r.en },
    { lang: "x-default", url: SITE_URL + r.fr },
  ];
  ALT.set(SITE_URL + r.fr, links);
  ALT.set(SITE_URL + r.en, links);
}

export default defineConfig({
  site: "https://zapz.work",
  output: "static",
  outDir: "./dist",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "always" },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      serialize(item) {
        const links = ALT.get(item.url);
        return links ? { ...item, links } : item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
