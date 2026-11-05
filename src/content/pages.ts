// Textes de l'accueil, de la page À propos et de la page de déploiement.
import type { Lang } from "./site";

export const CODINGAME_URL = "https://www.codingame.com/certification/0TQ0d16-UFHPrM7xRGxGDw";

export const HOME = {
  fr: {
    seoTitle: "Matteo Murru, alternance DevOps / Cloud / SRE à Nice",
    description:
      "Étudiant à 42 Nice, je cherche une alternance DevOps / Cloud / SRE à Nice. Je mets en production, j'automatise, je surveille et je répare une app avec des utilisateurs réels.",
    pitch:
      "Je fais tourner une app en production avec des utilisateurs réels. Je l'automatise, je la surveille, et je l'ai déjà réparée après un incident de base de données.",
    photoAlt: "Photo de Matteo Murru",
    kicker: "Matteo Murru, étudiant à 42 Nice",
    headline: "Je cherche une alternance DevOps\u00a0/ Cloud\u00a0/ SRE d'1\u00a0an.",
    facts: [
      { k: "Où", v: "Nice, Sophia Antipolis ou Monaco" },
      { k: "École", v: "42 Nice, vers le titre RNCP niveau 7" },
      { k: "Langues", v: "anglais professionnel, japonais JLPT\u00a0N5" },
    ],
    proof:
      "Je fais tourner seul une app en ligne avec de vrais utilisateurs : je la mets en production, je la surveille, et je l'ai remise en état le jour où sa base de données a été vidée par erreur.",
    proofLink: "Lire le postmortem",
    cardTitle: "À vérifier en un clic",
    card: [
      { k: "GaijinToSensei", v: "l'app en ligne, utilisateurs réels", href: "https://gajintosensei.com" },
      { k: "Incident du 29 octobre 2026", v: "base restaurée, ce qui a changé ensuite", route: "incident" },
      { k: "Ce site", v: "vérifié et mis en ligne automatiquement", route: "deploy" },
    ],
    ctaProjects: "Voir mes projets",
    statusTitle: "zapz.work en ligne",
    pipeline: [
      { k: "git push", v: "branche main" },
      { k: "CI", v: "lint, build, tests, Lighthouse" },
      { k: "Production", v: "Vercel relance les tests" },
      { k: "Supervision", v: "toutes les 15 min" },
    ],
    pipelineLabel: "Chemin d'un commit jusqu'à la prod",
    timelineLabel: "Chronologie de l'incident, heures UTC",
    timeline: [
      { t: "03:54", v: "base de prod vidée", s: "bad" },
      { t: "03:55", v: "agent arrêté, chaîne en pause", s: "" },
      { t: "Ensuite", v: "restauration PITR", s: "ok" },
      { t: "05:13", v: "correctif des pages", s: "" },
      { t: "11:10", v: "fonctionnalité remise en ligne", s: "ok" },
    ],
    gtsShotAlt: "Page d'accueil de gajintosensei.com",
    infraSteps: [
      { k: "VPS", v: "systemd, cron" },
      { k: "Tunnel", v: "aucun port ouvert" },
      { k: "5 sites", v: "publiés seuls" },
    ],
    skillsTitle: "Compétences",
    skillsCols: { domain: "Domaine", prod: "Utilisé en prod", learning: "En apprentissage" },
    none: "Pas encore en prod",
    casesTitle: "Ce que j'ai mis en production",
    moreTitle: "Aussi",
    contactTitle: "Contact",
    contactTitle2: "Vous recrutez un alternant DevOps, Cloud ou SRE ?",
    contactText: "Écrivez-moi, pour un entretien comme pour une question sur l'alternance. Le CV tient sur une page.",
  },
  en: {
    seoTitle: "Matteo Murru, DevOps / Cloud / SRE work-study in Nice",
    description:
      "42 Nice student looking for a DevOps / Cloud / SRE work-study contract in Nice. I ship, automate, monitor and fix an app with real users.",
    pitch:
      "I run an app in production with real users. I automate it, I monitor it, and I have already fixed it after a database incident.",
    photoAlt: "Photo of Matteo Murru",
    kicker: "Matteo Murru, student at 42 Nice",
    headline: "I am looking for a 1-year DevOps\u00a0/ Cloud\u00a0/ SRE work\u2011study contract.",
    facts: [
      { k: "Where", v: "Nice, Sophia Antipolis or Monaco" },
      { k: "School", v: "42 Nice, towards an RNCP level 7 degree" },
      { k: "Languages", v: "professional English, Japanese JLPT\u00a0N5" },
    ],
    proof:
      "I run an app with real users on my own: I release it to production, I monitor it, and I brought it back the day its database was wiped by mistake.",
    proofLink: "Read the postmortem",
    cardTitle: "Check it in one click",
    card: [
      { k: "GaijinToSensei", v: "the live app, real users", href: "https://gajintosensei.com" },
      { k: "Incident on 29 October 2026", v: "database restored, what changed next", route: "incident" },
      { k: "This site", v: "checked and released automatically", route: "deploy" },
    ],
    ctaProjects: "See my projects",
    statusTitle: "zapz.work is live",
    pipeline: [
      { k: "git push", v: "main branch" },
      { k: "CI", v: "lint, build, tests, Lighthouse" },
      { k: "Production", v: "Vercel runs the tests again" },
      { k: "Monitoring", v: "every 15 min" },
    ],
    pipelineLabel: "Path from a commit to production",
    timelineLabel: "Incident timeline, UTC times",
    timeline: [
      { t: "03:54", v: "production database wiped", s: "bad" },
      { t: "03:55", v: "agent stopped, pipeline paused", s: "" },
      { t: "Then", v: "PITR restore", s: "ok" },
      { t: "05:13", v: "app page fix", s: "" },
      { t: "11:10", v: "feature released again", s: "ok" },
    ],
    gtsShotAlt: "Home page of gajintosensei.com",
    infraSteps: [
      { k: "VPS", v: "systemd, cron" },
      { k: "Tunnel", v: "no open port" },
      { k: "5 sites", v: "publish themselves" },
    ],
    skillsTitle: "Skills",
    skillsCols: { domain: "Area", prod: "Used in production", learning: "Learning" },
    none: "Not in production yet",
    casesTitle: "What I run in production",
    moreTitle: "Also",
    contactTitle: "Contact",
    contactTitle2: "Hiring a DevOps, Cloud or SRE work-study student?",
    contactText: "Email me, for an interview or a question about the contract. The resume fits on one page.",
  },
} as const;

export interface Skill {
  domain: string;
  prod: string[];
  learning: string[];
}

export const SKILLS: Record<Lang, Skill[]> = {
  fr: [
    {
      domain: "Linux et système",
      prod: ["VPS Linux", "systemd", "cron", "utilisateurs et droits", "verrous de fichiers"],
      learning: ["appels système", "format ELF", "assembleur x86-64"],
    },
    {
      domain: "Conteneurs",
      prod: [],
      learning: ["Docker", "Docker compose", "HashiCorp Vault", "image de ce site sur GHCR"],
    },
    {
      domain: "CI/CD",
      prod: ["déploiement contrôlé avec retour arrière", "Vercel CLI", "Cloudflare Pages", "Git"],
      learning: ["GitHub Actions", "Lighthouse CI"],
    },
    {
      domain: "Cloud",
      prod: ["Vercel (dont edge)", "Cloudflare (Pages, Tunnel)", "Neon", "Upstash"],
      learning: ["AWS (Cloud Practitioner en cours)", "Ansible"],
    },
    {
      domain: "Bases de données",
      prod: ["PostgreSQL", "Prisma", "migrations additives", "restauration PITR", "Redis"],
      learning: [],
    },
    {
      domain: "Supervision",
      prod: ["route de santé", "erreurs serveur en base", "garde de prod planifiée", "alertes"],
      learning: ["contrôle de disponibilité de ce site"],
    },
    {
      domain: "Scripts et langages",
      prod: ["Bash", "TypeScript / Node.js", "Python"],
      learning: ["C (certification CodinGame)", "C++", "NASM"],
    },
  ],
  en: [
    {
      domain: "Linux and systems",
      prod: ["Linux VPS", "systemd", "cron", "users and permissions", "file locks"],
      learning: ["system calls", "ELF format", "x86-64 assembly"],
    },
    {
      domain: "Containers",
      prod: [],
      learning: ["Docker", "Docker compose", "HashiCorp Vault", "this site's image on GHCR"],
    },
    {
      domain: "CI/CD",
      prod: ["checked deploys with rollback", "Vercel CLI", "Cloudflare Pages", "Git"],
      learning: ["GitHub Actions", "Lighthouse CI"],
    },
    {
      domain: "Cloud",
      prod: ["Vercel (including edge)", "Cloudflare (Pages, Tunnel)", "Neon", "Upstash"],
      learning: ["AWS (Cloud Practitioner in progress)", "Ansible"],
    },
    {
      domain: "Databases",
      prod: ["PostgreSQL", "Prisma", "additive migrations", "PITR restore", "Redis"],
      learning: [],
    },
    {
      domain: "Monitoring",
      prod: ["health route", "server errors stored in the database", "scheduled production guard", "alerts"],
      learning: ["uptime check for this site"],
    },
    {
      domain: "Scripts and languages",
      prod: ["Bash", "TypeScript / Node.js", "Python"],
      learning: ["C (CodinGame certification)", "C++", "NASM"],
    },
  ],
};

// Cartes des 3 études de cas sur l'accueil.
export const CASES = {
  fr: [
    {
      key: "gts" as const,
      title: "GaijinToSensei en production",
      problem: "Plusieurs agents livrent en parallèle, avec un quota de déploiements par jour.",
      result: "Mise en prod contrôlée, retour arrière automatique, garde de prod toutes les 10 minutes.",
    },
    {
      key: "incident" as const,
      title: "Postmortem : base de prod vidée",
      problem: "Une commande de migration a vidé la base de production le 29 octobre 2026.",
      result: "Base restaurée par point-in-time restore, commandes destructives interdites sur la prod.",
    },
    {
      key: "infra" as const,
      title: "Mon infra perso",
      problem: "Faire tourner des agents et des tâches la nuit sans exposer ma machine.",
      result: "VPS en systemd et cron, hub derrière un tunnel sans port ouvert, 5 sites publiés seuls.",
    },
  ],
  en: [
    {
      key: "gts" as const,
      title: "GaijinToSensei in production",
      problem: "Several agents ship in parallel, under a daily deployment quota.",
      result: "Checked releases, automatic rollback, a production guard every 10 minutes.",
    },
    {
      key: "incident" as const,
      title: "Postmortem: production database wiped",
      problem: "A migration command wiped the production database on 29 October 2026.",
      result: "Database restored with point-in-time restore, destructive commands banned on production.",
    },
    {
      key: "infra" as const,
      title: "My personal infrastructure",
      problem: "Run agents and jobs at night without exposing my machine.",
      result: "VPS with systemd and cron, a hub behind a tunnel with no open port, 5 sites that publish themselves.",
    },
  ],
};

export const MORE = {
  fr: [
    { key: "systeme" as const, title: "Système et projets 42", text: "Cloud-1, ft_strace, libasm, Docker et Vault, et deux apps Overwolf." },
    { key: "deploy" as const, title: "Comment ce site est déployé", text: "Push, CI, image Docker, déploiement et supervision." },
  ],
  en: [
    { key: "systeme" as const, title: "Systems and 42 projects", text: "Cloud-1, ft_strace, libasm, Docker and Vault, and two Overwolf apps." },
    { key: "deploy" as const, title: "How this site is deployed", text: "Push, CI, Docker image, deployment and monitoring." },
  ],
};

export const ABOUT = {
  fr: {
    title: "À propos",
    seoTitle: "À propos de Matteo Murru",
    description: "Matteo Murru, étudiant à 42 Nice, branche Unix et bas niveau. A vécu au Japon en 2026. Cherche une alternance DevOps / Cloud / SRE à Nice.",
    photoAlt: "Photo de Matteo Murru",
    paragraphs: [
      "Je m'appelle Matteo Murru et j'habite à Nice. J'étudie à 42 Nice : j'ai fini le tronc commun, je suis la branche Unix et bas niveau et je vise le titre RNCP niveau 7 de 42.",
      "J'ai appris l'exploitation en faisant tourner mes propres projets : une app en production, un VPS qui travaille la nuit, des sites publiés automatiquement. Je veux maintenant le faire au sein d'une équipe.",
    ],
    japanTitle: "Japon",
    japan: [
      "J'ai vécu au Japon de mars à octobre 2026 : un échange à 42 Tokyo, puis un PVT. De juin à octobre 2026, j'ai travaillé chez Keywords Studios à Tokyo comme testeur de localisation (LQA) sur des jeux du studio Konami : vérifier le français en jeu, reproduire les bugs techniques et les décrire avec précision pour les équipes de développement. Je veux travailler au Japon à moyen terme.",
    ],
    beforeTitle: "Avant 42",
    before: "Bac pro Commercialisation et services en restauration, puis des emplois en restauration rapide.",
    timelineTitle: "Parcours",
    timeline: [
      { date: "Janvier 2025", text: "Entrée à 42 Nice." },
      { date: "2025", text: "Tronc commun validé." },
      { date: "Juin 2025", text: "Certification C de CodinGame." },
      { date: "Mars 2026", text: "Échange à 42 Tokyo, puis PVT au Japon." },
      { date: "Juin à octobre 2026", text: "Testeur de localisation (LQA) chez Keywords Studios, à Tokyo, sur des jeux Konami." },
      { date: "Octobre 2026", text: "Retour à Nice." },
      { date: "En cours", text: "Cloud-1 à 42 et préparation de la certification AWS Cloud Practitioner." },
    ],
    certTitle: "Certifications",
    certs: [
      { name: "CodinGame : C", detail: "Obtenue en juin 2025", href: CODINGAME_URL, hrefLabel: "Voir la certification" },
      { name: "AWS Certified Cloud Practitioner", detail: "En cours" },
    ],
    langTitle: "Langues",
    langs: ["Français : langue maternelle", "Anglais : professionnel et conversationnel", "Japonais : JLPT N5"],
  },
  en: {
    title: "About",
    seoTitle: "About Matteo Murru",
    description: "Matteo Murru, 42 Nice student, Unix and low-level branch. Lived in Japan in 2026. Looking for a DevOps / Cloud / SRE work-study contract in Nice.",
    photoAlt: "Photo of Matteo Murru",
    paragraphs: [
      "My name is Matteo Murru and I live in Nice. I study at 42 Nice: I finished the common core, I follow the Unix and low-level branch and I am working towards 42's RNCP level 7 degree (master's level).",
      "I learned operations by running my own projects: an app in production, a VPS that works at night, sites that publish themselves. Now I want to do it as part of a team.",
    ],
    japanTitle: "Japan",
    japan: [
      "I lived in Japan from March to October 2026: an exchange at 42 Tokyo, then a working holiday visa. From June to October 2026, I worked at Keywords Studios in Tokyo as a localization QA tester (LQA) on games from the Konami studio: checking the French language in game, reproducing technical bugs and reporting them precisely to the development teams. I want to work in Japan in the medium term.",
    ],
    beforeTitle: "Before 42",
    before: "A vocational high school diploma in restaurant service, then jobs in fast food.",
    timelineTitle: "Path",
    timeline: [
      { date: "January 2025", text: "Joined 42 Nice." },
      { date: "2025", text: "Common core completed." },
      { date: "June 2025", text: "CodinGame C certification." },
      { date: "March 2026", text: "Exchange at 42 Tokyo, then working holiday in Japan." },
      { date: "June to October 2026", text: "Localization QA tester (LQA) at Keywords Studios, Tokyo, on Konami games." },
      { date: "October 2026", text: "Back in Nice." },
      { date: "In progress", text: "Cloud-1 at 42 and preparing the AWS Cloud Practitioner certification." },
    ],
    certTitle: "Certifications",
    certs: [
      { name: "CodinGame: C", detail: "Earned in June 2025", href: CODINGAME_URL, hrefLabel: "See the certification" },
      { name: "AWS Certified Cloud Practitioner", detail: "In progress" },
    ],
    langTitle: "Languages",
    langs: ["French: native", "English: professional and conversational", "Japanese: JLPT N5"],
  },
};

export const DEPLOY = {
  fr: {
    title: "Comment ce site est déployé",
    seoTitle: "Comment ce site est déployé : CI, Docker, Vercel et supervision",
    description:
      "Le chemin d'un commit jusqu'à zapz.work : CI GitHub Actions (lint, build, tests, Lighthouse), image Docker sur GHCR, déploiement Vercel et contrôle de disponibilité.",
    lead: "Chaque push sur le dépôt est vérifié, construit, mis en ligne puis surveillé. Voici le chemin d'un commit jusqu'à zapz.work.",
    diagramTitle: "Schéma",
    diagramAlt:
      "Schéma : un push déclenche la CI GitHub Actions (lint, build, tests, Lighthouse) puis la publication d'une image Docker sur GHCR. Le même push déclenche le build Vercel, qui relance les tests et met le site en ligne. Un contrôle lancé depuis un serveur personnel surveille zapz.work toutes les 15 minutes.",
    stepsTitle: "Étape par étape",
    steps: [
      {
        title: "Push",
        text: "Je pousse sur la branche principale du dépôt GitHub. Une autre branche donne une préversion, pas la prod.",
      },
      {
        title: "CI GitHub Actions",
        text: "Lint (`astro check` et une relecture automatique des textes), build Astro statique, puis tests sur le site construit : liens internes, HTML valide, et recherche de secrets, d'adresses IP et de chemins privés. Lighthouse CI échoue si une page passe sous 90 en performance ou sous 95 en accessibilité, bonnes pratiques et SEO.",
      },
      {
        title: "Image Docker",
        text: "Un build multi-étapes : Node construit le site, nginx le sert. Sur la branche principale, l'image est publiée sur GitHub Container Registry avec le commit comme étiquette.",
      },
      {
        title: "Déploiement",
        text: "Vercel est relié au dépôt et met en ligne chaque push. Son build relance les mêmes tests que la CI : une version qui échoue n'est pas mise en ligne.",
      },
      {
        title: "Supervision",
        text: "Un serveur personnel vérifie zapz.work toutes les 15 minutes (pages fr et en, code 200) et m'alerte en cas d'échec. Un workflow GitHub Actions plus complet (titre, sitemap, robots, CV) se lance à la main : la supervision ne consomme aucune minute de CI.",
      },
    ],
    statusTitle: "Version en ligne",
    statusText: "Cette page a été construite à partir de ce commit :",
    badgeAlt: "Statut de la CI GitHub Actions",
    stackTitle: "Le site",
    stack: [
      "Astro en sortie statique et Tailwind CSS. Le seul JavaScript suit le thème clair ou sombre du système.",
      "Le même contenu en français et en anglais, avec hreflang, sitemap, robots et une image Open Graph par langue.",
      "Le CV PDF est généré depuis la page CV du site, pour qu'il ne contredise jamais le site.",
    ],
  },
  en: {
    title: "How this site is deployed",
    seoTitle: "How this site is deployed: CI, Docker, Vercel and monitoring",
    description:
      "The path from a commit to zapz.work: GitHub Actions CI (lint, build, tests, Lighthouse), a Docker image on GHCR, Vercel deployment and an uptime check.",
    lead: "Every push to the repository is checked, built, released and then monitored. Here is the path from a commit to zapz.work.",
    diagramTitle: "Diagram",
    diagramAlt:
      "Diagram: a push triggers the GitHub Actions CI (lint, build, tests, Lighthouse) and then publishes a Docker image to GHCR. The same push triggers the Vercel build, which runs the tests again and releases the site. A check run from a personal server monitors zapz.work every 15 minutes.",
    stepsTitle: "Step by step",
    steps: [
      {
        title: "Push",
        text: "I push to the main branch of the GitHub repository. Any other branch gives a preview, not production.",
      },
      {
        title: "GitHub Actions CI",
        text: "Lint (`astro check` and an automatic review of the texts), a static Astro build, then tests on the built site: internal links, valid HTML, and a search for secrets, IP addresses and private paths. Lighthouse CI fails if a page drops below 90 in performance or below 95 in accessibility, best practices and SEO.",
      },
      {
        title: "Docker image",
        text: "A multi-stage build: Node builds the site, nginx serves it. On the main branch, the image is published to GitHub Container Registry, tagged with the commit.",
      },
      {
        title: "Deployment",
        text: "Vercel is linked to the repository and releases every push. Its build runs the same tests as the CI: a version that fails is not released.",
      },
      {
        title: "Monitoring",
        text: "A personal server checks zapz.work every 15 minutes (French and English pages, status 200) and alerts me if it fails. A fuller GitHub Actions workflow (title, sitemap, robots, resume) runs on demand: monitoring uses no CI minutes.",
      },
    ],
    statusTitle: "Live version",
    statusText: "This page was built from this commit:",
    badgeAlt: "GitHub Actions CI status",
    stackTitle: "The site",
    stack: [
      "Astro with static output and Tailwind CSS. The only JavaScript follows the system light or dark theme.",
      "The same content in French and English, with hreflang, sitemap, robots and one Open Graph image per language.",
      "The PDF resume is generated from the site's resume page, so it never contradicts the site.",
    ],
  },
};
