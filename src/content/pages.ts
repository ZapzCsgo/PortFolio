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
    skillsTitle: "Compétences",
    skillsCols: { domain: "Domaine", prod: "Utilisé en prod", learning: "En apprentissage" },
    none: "Pas encore",
    casesTitle: "Études de cas",
    moreTitle: "Aussi",
    contactTitle: "Contact",
    contactText: "Le plus simple, c'est un e-mail. Je réponds vite.",
  },
  en: {
    seoTitle: "Matteo Murru, DevOps / Cloud / SRE work-study in Nice",
    description:
      "42 Nice student looking for a DevOps / Cloud / SRE work-study contract in Nice. I ship, automate, monitor and fix an app with real users.",
    pitch:
      "I run an app in production with real users. I automate it, I monitor it, and I have already fixed it after a database incident.",
    photoAlt: "Photo of Matteo Murru",
    skillsTitle: "Skills",
    skillsCols: { domain: "Area", prod: "Used in production", learning: "Learning" },
    none: "Not yet",
    casesTitle: "Case studies",
    moreTitle: "Also",
    contactTitle: "Contact",
    contactText: "Email is the easiest way. I reply quickly.",
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
      problem: "Faire tourner des agents et des tâches la nuit sans tout exposer ni payer.",
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
      problem: "Run agents and jobs at night without exposing everything or paying.",
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
      "Ce qui me plaît dans l'infra, c'est qu'on voit tout de suite si ça marche. Un déploiement passe ou il casse, une alerte sonne ou elle se tait. J'aime construire les garde-fous qui évitent de casser deux fois la même chose.",
    ],
    japanTitle: "Japon",
    japan: [
      "J'ai vécu au Japon de mars à octobre 2026 : un échange à 42 Tokyo, puis un PVT. De juin à octobre 2026, j'ai travaillé chez Keywords Studios à Tokyo comme testeur de localisation (LQA). J'y ai utilisé le japonais au quotidien, et je veux travailler au Japon à moyen terme.",
    ],
    beforeTitle: "Avant 42",
    before: "Bac pro Commercialisation et services en restauration, puis des emplois en restauration rapide.",
    timelineTitle: "Parcours",
    timeline: [
      { date: "Janvier 2025", text: "Entrée à 42 Nice." },
      { date: "2025", text: "Tronc commun validé." },
      { date: "Juin 2025", text: "Certification C de CodinGame." },
      { date: "Mars 2026", text: "Échange à 42 Tokyo, puis PVT au Japon." },
      { date: "Juin à octobre 2026", text: "Testeur de localisation (LQA) chez Keywords Studios, à Tokyo." },
      { date: "Octobre 2026", text: "Retour à Nice." },
      { date: "En cours", text: "Cloud-1 à 42 et préparation de la certification AWS Cloud Practitioner." },
    ],
    certTitle: "Certifications",
    certs: [
      { name: "CodinGame : C", detail: "Obtenue en juin 2025", href: CODINGAME_URL, hrefLabel: "Voir la certification" },
      { name: "AWS Certified Cloud Practitioner", detail: "En cours" },
    ],
    langTitle: "Langues",
    langs: ["Français", "Anglais", "Japonais, pratiqué au quotidien au Japon en 2026"],
  },
  en: {
    title: "About",
    seoTitle: "About Matteo Murru",
    description: "Matteo Murru, 42 Nice student, Unix and low-level branch. Lived in Japan in 2026. Looking for a DevOps / Cloud / SRE work-study contract in Nice.",
    photoAlt: "Photo of Matteo Murru",
    paragraphs: [
      "My name is Matteo Murru and I live in Nice. I study at 42 Nice: I finished the common core, I follow the Unix and low-level branch and I am working towards 42's RNCP level 7 degree (master's level).",
      "What I like about infrastructure is that you see right away whether it works. A deployment passes or it breaks, an alert fires or it stays quiet. I like building the guardrails that stop the same thing from breaking twice.",
    ],
    japanTitle: "Japan",
    japan: [
      "I lived in Japan from March to October 2026: an exchange at 42 Tokyo, then a working holiday visa. From June to October 2026, I worked at Keywords Studios in Tokyo as a localization QA tester (LQA). I used Japanese every day there, and I want to work in Japan in the medium term.",
    ],
    beforeTitle: "Before 42",
    before: "A vocational high school diploma in restaurant service, then jobs in fast food.",
    timelineTitle: "Path",
    timeline: [
      { date: "January 2025", text: "Joined 42 Nice." },
      { date: "2025", text: "Common core completed." },
      { date: "June 2025", text: "CodinGame C certification." },
      { date: "March 2026", text: "Exchange at 42 Tokyo, then working holiday in Japan." },
      { date: "June to October 2026", text: "Localization QA tester (LQA) at Keywords Studios, Tokyo." },
      { date: "October 2026", text: "Back in Nice." },
      { date: "In progress", text: "Cloud-1 at 42 and preparing the AWS Cloud Practitioner certification." },
    ],
    certTitle: "Certifications",
    certs: [
      { name: "CodinGame: C", detail: "Earned in June 2025", href: CODINGAME_URL, hrefLabel: "See the certification" },
      { name: "AWS Certified Cloud Practitioner", detail: "In progress" },
    ],
    langTitle: "Languages",
    langs: ["French", "English", "Japanese, used every day in Japan in 2026"],
  },
};

export const DEPLOY = {
  fr: {
    title: "Comment ce site est déployé",
    seoTitle: "Comment ce site est déployé : CI, Docker, Vercel et supervision",
    description:
      "Le chemin d'un commit jusqu'à zapz.work : CI GitHub Actions (lint, build, tests, Lighthouse), image Docker sur GHCR, déploiement Vercel et contrôle de disponibilité planifié.",
    lead: "Chaque push sur le dépôt est vérifié, construit, mis en ligne puis surveillé. Voici le chemin d'un commit jusqu'à zapz.work.",
    diagramTitle: "Schéma",
    diagramAlt:
      "Schéma : un push déclenche la CI GitHub Actions (lint, build, tests, Lighthouse) puis la publication d'une image Docker sur GHCR. Le même push déclenche le build Vercel, qui relance les tests et met le site en ligne. Un contrôle planifié surveille zapz.work toutes les heures.",
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
        text: "Un workflow planifié vérifie zapz.work toutes les heures : code 200, titre attendu, sitemap et robots. S'il échoue, GitHub m'envoie un e-mail.",
      },
    ],
    statusTitle: "Version en ligne",
    statusText: "Cette page a été construite à partir de ce commit :",
    badgeAlt: "Statut de la CI GitHub Actions",
    stackTitle: "Le site",
    stack: [
      "Astro en sortie statique et Tailwind CSS. Le seul JavaScript sert au bouton de thème clair ou sombre.",
      "Le même contenu en français et en anglais, avec hreflang, sitemap, robots et une image Open Graph par langue.",
      "Le CV PDF est généré depuis la page CV du site, pour qu'il ne contredise jamais le site.",
    ],
  },
  en: {
    title: "How this site is deployed",
    seoTitle: "How this site is deployed: CI, Docker, Vercel and monitoring",
    description:
      "The path from a commit to zapz.work: GitHub Actions CI (lint, build, tests, Lighthouse), a Docker image on GHCR, Vercel deployment and a scheduled uptime check.",
    lead: "Every push to the repository is checked, built, released and then monitored. Here is the path from a commit to zapz.work.",
    diagramTitle: "Diagram",
    diagramAlt:
      "Diagram: a push triggers the GitHub Actions CI (lint, build, tests, Lighthouse) and then publishes a Docker image to GHCR. The same push triggers the Vercel build, which runs the tests again and releases the site. A scheduled check monitors zapz.work every hour.",
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
        text: "A scheduled workflow checks zapz.work every hour: status 200, expected title, sitemap and robots. If it fails, GitHub sends me an email.",
      },
    ],
    statusTitle: "Live version",
    statusText: "This page was built from this commit:",
    badgeAlt: "GitHub Actions CI status",
    stackTitle: "The site",
    stack: [
      "Astro with static output and Tailwind CSS. The only JavaScript runs the light or dark theme button.",
      "The same content in French and English, with hreflang, sitemap, robots and one Open Graph image per language.",
      "The PDF resume is generated from the site's resume page, so it never contradicts the site.",
    ],
  },
};
