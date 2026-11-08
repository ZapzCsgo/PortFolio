// Faits centraux du site. Phrase d'alternance reprise partout (première recherche d'alternance, sans date de début).

export type Lang = "fr" | "en";

export const SITE_URL = "https://zapz.work";
export const NAME = "Matteo Murru";
export const EMAIL = "contact@zapz.work";
export const GITHUB = "https://github.com/ZapzCsgo";
export const LINKEDIN = "https://www.linkedin.com/in/matteo-murru-775720274/";
export const REPO = "https://github.com/ZapzCsgo/PortFolio";

// Passer à true quand le dépôt est public : le badge GitHub Actions s'affiche alors sur la page de déploiement.
export const REPO_PUBLIC = true;
export const CI_BADGE = `${REPO}/actions/workflows/ci.yml/badge.svg?branch=main`;
export const CI_URL = `${REPO}/actions/workflows/ci.yml`;

// Projet vitrine IA agentique. Passer à true quand le dépôt est public : le lien s'affiche alors sur la page Agents IA.
export const SRA_REPO = "https://github.com/ZapzCsgo/steam-roblox-agents";
export const SRA_PUBLIC = false;

export const ALTERNANCE: Record<Lang, string> = {
  fr: "Étudiant à 42 Nice, je cherche une alternance d'1 an en DevOps / Cloud / SRE à Nice, Sophia Antipolis ou Monaco.",
  en: "I study at 42 Nice and I am looking for a 1-year work-study contract (alternance) in DevOps / Cloud / SRE in Nice, Sophia Antipolis or Monaco.",
};

export const ROLE: Record<Lang, string> = {
  fr: "Alternance DevOps / Cloud / SRE",
  en: "DevOps / Cloud / SRE work-study",
};

// Correspondance des pages fr <-> en (hreflang et bouton de langue).
export const ROUTES = {
  home: { fr: "/", en: "/en/" },
  gts: { fr: "/projets/gaijintosensei/", en: "/en/projects/gaijintosensei/" },
  incident: { fr: "/projets/incident-base-de-donnees/", en: "/en/projects/database-incident/" },
  agents: { fr: "/projets/agents-ia/", en: "/en/projects/ai-agents/" },
  infra: { fr: "/projets/infra-perso/", en: "/en/projects/personal-infra/" },
  systeme: { fr: "/projets/systeme/", en: "/en/projects/systems/" },
  deploy: { fr: "/comment-ce-site-est-deploye/", en: "/en/how-this-site-is-deployed/" },
  about: { fr: "/a-propos/", en: "/en/about/" },
  cv: { fr: "/cv/", en: "/en/cv/" },
  legal: { fr: "/mentions-legales/", en: "/en/legal-notice/" },
  privacy: { fr: "/confidentialite/", en: "/en/privacy/" },
} as const;

export type RouteKey = keyof typeof ROUTES;

// Photo de l'accueil : null tant qu'il n'y a pas de vraie photo nette (au moins 384 px de large).
// Exemple : { src: "/img/matteo-192.webp", src2x: "/img/matteo-384.webp" }
export const PHOTO: { src: string; src2x: string } | null = null;

export const CV_PDF: Record<Lang, string> = { fr: "/cv.pdf", en: "/cv-en.pdf" };

export const UI = {
  fr: {
    skip: "Aller au contenu",
    nav: { projects: "Projets", deploy: "Déploiement", about: "À propos", cv: "CV" },
    navLabel: "Navigation principale",
    langSwitch: "English",
    langSwitchLabel: "Read this page in English",
    cvPdf: "CV (PDF)",
    email: "E-mail",
    back: "Retour à l'accueil",
    version: "Version",
    builtOn: "construite le",
    footerDeploy: "Comment ce site est déployé",
    footerLegal: "Mentions légales",
    footerPrivacy: "Confidentialité",
    caseSections: {
      context: "Contexte",
      problem: "Problème",
      done: "Ce que j'ai fait",
      result: "Résultat",
      learned: "Ce que j'ai appris",
    },
    readCase: "Lire l'étude de cas",
    stack: "Outils",
  },
  en: {
    skip: "Skip to content",
    nav: { projects: "Projects", deploy: "Deployment", about: "About", cv: "Resume" },
    navLabel: "Main navigation",
    langSwitch: "Français",
    langSwitchLabel: "Lire cette page en français",
    cvPdf: "Resume (PDF)",
    email: "Email",
    back: "Back to home",
    version: "Version",
    builtOn: "built on",
    footerDeploy: "How this site is deployed",
    footerLegal: "Legal notice",
    footerPrivacy: "Privacy",
    caseSections: {
      context: "Context",
      problem: "Problem",
      done: "What I did",
      result: "Result",
      learned: "What I learned",
    },
    readCase: "Read the case study",
    stack: "Tools",
  },
} as const;
