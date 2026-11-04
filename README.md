# zapz.work

[![CI](https://github.com/ZapzCsgo/PortFolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ZapzCsgo/PortFolio/actions/workflows/ci.yml)

Portfolio de Matteo Murru : alternance DevOps / Cloud / SRE à Nice. Astro statique, Tailwind CSS, français et anglais.

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

Le texte qui change souvent (phrase d'alternance, liens, e-mail) est dans `src/content/site.ts`.

## Déploiement

- **Vercel** : relié au dépôt, déploie chaque push (`vercel.json`). Le build lance aussi les tests de `dist/`.
- **CI** (`.github/workflows/ci.yml`) : lint, build, tests, Lighthouse CI (`lighthouserc.json`), puis image Docker publiée sur GHCR (`ghcr.io/zapzcsgo/portfolio`) sur `main`.
- **Supervision** (`.github/workflows/uptime.yml`) : contrôle complet de https://zapz.work lancé à la main ; la surveillance continue (toutes les 15 minutes) tourne depuis un serveur personnel.

## Docker

```sh
docker build -t zapz-portfolio .
docker run --rm -p 8080:8080 zapz-portfolio
```
