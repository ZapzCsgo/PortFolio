# zapz.work

[![CI](https://github.com/ZapzCsgo/PortFolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ZapzCsgo/PortFolio/actions/workflows/ci.yml)

Portfolio de Matteo Murru : développeur IA, web et DevOps, stage de 6 mois à Nice / Côte d'Azur ou en télétravail. Astro statique, Tailwind CSS, français et anglais.

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm ci` | installe les dépendances |
| `npm run dev` | serveur de développement |
| `npm run lint` | `astro check` + relecture des textes (`scripts/lint-texte.mjs`) |
| `npm run build` | build statique dans `dist/` puis tests du site construit |
| `npm test` | liens internes, HTML valide, recherche de secrets, d'IP et de chemins privés |
| `node scripts/check-secrets.mjs --repo` | même recherche sur les fichiers du dépôt |
| `npm run og` | régénère les images Open Graph (`CHROME_PATH` requis) |
| `npm run cv:pdf` | régénère `public/cv.pdf` et `public/cv-en.pdf` depuis `/cv/` (`CHROME_PATH` requis, après un build) |

Le texte qui change souvent (phrase de recherche de stage, liens, e-mail) est dans `src/content/site.ts`.

## Déploiement

Hébergement : **Cloudflare Workers** (Worker `zapz-portfolio`, assets statiques de `dist/`), depuis le 5 novembre 2026
(avant : Vercel, quitté quand le compte gratuit a dépassé son quota d'usage ; zone DNS recopiée avant la bascule, e-mail compris).

- `wrangler.jsonc` : Worker + assets, domaines `zapz.work` et `www.zapz.work` (domaines personnalisés du Worker).
- `cloudflare/worker.js` : reprend l'ancien `vercel.json` et le middleware : `www` -> apex (301), http -> https,
  redirections (`/about`, `/certifications` -> `/a-propos/`, `/ctf-blog/*` -> `/`, 308), slash final (308),
  en-têtes de sécurité, `Vary: Accept` sur les pages, cache immuable de `/_astro/`, page 404,
  pages en Markdown sur `Accept: text/markdown` (`lib/agent-md.js`).
- Mise en ligne : un script du serveur personnel part de l'export exact du commit (`git archive`), lance `npm ci`,
  `npm run build` (build + tests), `wrangler deploy`, puis vérifie en ligne (200, redirections, 404, Markdown).
  À la main : `npm run build && npx wrangler deploy` (jeton Cloudflare dans `CLOUDFLARE_API_TOKEN`).
  Test avant les domaines : https://zapz-portfolio.zapzonionzcsgo.workers.dev
- CI : le job `deploy` met en ligne chaque push sur `main` dès que les secrets GitHub `CLOUDFLARE_API_TOKEN`
  (droit « Workers Scripts : Edit ») et `CLOUDFLARE_ACCOUNT_ID` sont posés ; sans eux il est sauté.
- Retour arrière : `npx wrangler rollback` (version précédente du Worker).
- DNS : zone Cloudflare (serveurs de noms Cloudflare, domaine toujours enregistré chez Vercel). E-mail
  `contact@zapz.work` par ImprovMX (MX + SPF recopiés), `studio.` et `hermes.` sur Cloudflare Pages.
- `vercel.json` et `middleware.js` sont gardés pour un éventuel retour sur Vercel ; ils ne servent plus en production.
- **CI** (`.github/workflows/ci.yml`) : lint, build, tests, Lighthouse CI (`lighthouserc.json`), puis image Docker publiée sur GHCR (`ghcr.io/zapzcsgo/portfolio`) sur `main`.
- **Supervision** (`.github/workflows/uptime.yml`) : contrôle complet de https://zapz.work lancé à la main ; la surveillance continue (toutes les 15 minutes) tourne depuis un serveur personnel.

## Docker

```sh
docker build -t zapz-portfolio .
docker run --rm -p 8080:8080 zapz-portfolio
```
