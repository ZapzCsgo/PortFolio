// Textes de l'accueil, de la page À propos et de la page de déploiement.
// Positionnement (13/11/2026) : développeur IA, web et DevOps, stage de 6 mois, Nice / Côte d'Azur ou télétravail.
import type { Lang } from "./site";

export const CODINGAME_URL = "https://www.codingame.com/certification/0TQ0d16-UFHPrM7xRGxGDw";

export const HOME = {
  fr: {
    seoTitle: "Matteo Murru, développeur IA, web et DevOps : stage de 6 mois à Nice ou en télétravail",
    description:
      "Étudiant à 42 Nice, je cherche un stage de 6 mois en IA, web ou DevOps, à Nice / Côte d'Azur ou en télétravail, dès début décembre 2026. Je construis et fais tourner de vrais produits avec des agents IA.",
    photoAlt: "Photo de Matteo Murru",
    kicker: "Matteo Murru, étudiant à 42 Nice",
    headline: "Développeur IA, web et\u00a0DevOps.",
    seeking: "Je cherche un\u00a0stage de 6\u00a0mois.",
    facts: [
      { k: "Où", v: "Nice / Côte d'Azur ou télétravail" },
      { k: "Dispo", v: "début décembre 2026" },
      { k: "École", v: "42 Nice, titre RNCP niveau\u00a07 en cours" },
      { k: "Langues", v: "anglais professionnel, japonais JLPT\u00a0N5" },
    ],
    proof:
      "Je construis de vrais produits avec des agents IA, de l'idée à la prod. Mon app GaijinToSensei est en ligne avec des utilisateurs réels, en 3\u00a0langues : 3 agents Claude Code y ont écrit 479 des 724\u00a0commits.",
    proofLink: "Voir le projet",
    also: "Rien ne part en prod sans tests par branche, préversion contrôlée et retour arrière automatique.",
    alsoLink: "Mes garde-fous",
    ctaProjects: "Voir mes projets",
    statusTitle: "Comment je livre",
    pipeline: [
      { k: "Idée", v: "découpée en tâches" },
      { k: "Agents", v: "Claude Code, une branche chacun" },
      { k: "Tests", v: "Playwright avant chaque fusion" },
      { k: "Préversion", v: "contrôles avant le trafic" },
      { k: "Prod", v: "retour arrière automatique" },
    ],
    pipelineLabel: "Chemin d'une idée jusqu'à la prod",
    liveLabel: "en ligne",
    gtsShotAlt: "Page d'accueil de gajintosensei.com",
    metaaoeShotAlt: "Accueil de l'app MetaAOE : profil, Elo, dernières parties classées",
    featuredLead: "App web pour apprendre le japonais. En production avec des utilisateurs réels, en français, anglais et japonais.",
    facetsLabel: "Ce que montre le projet",
    skillsTitle: "Compétences",
    skillsCols: { domain: "Domaine", prod: "Pratiqué sur mes projets", learning: "En apprentissage" },
    none: "Pas encore en prod",
    casesTitle: "Ce que je construis",
    moreTitle: "Pour aller plus loin",
    liveSite: "Ouvrir le site",
    contactTitle2: "Vous cherchez un stagiaire en IA, web ou DevOps ?",
    contactText: "Stage de 6 mois, à Nice / Côte d'Azur ou en télétravail, dès début décembre 2026. Le CV tient sur une page.",
  },
  en: {
    seoTitle: "Matteo Murru, AI, web and DevOps developer: 6-month internship in Nice or remote",
    description:
      "42 Nice student looking for a 6-month internship in AI, web or DevOps, in Nice / the French Riviera or remote, from early December 2026. I build and run real products with AI agents.",
    photoAlt: "Photo of Matteo Murru",
    kicker: "Matteo Murru, student at 42 Nice",
    headline: "AI, web and DevOps\u00a0developer.",
    seeking: "Looking for a\u00a06\u2011month internship.",
    facts: [
      { k: "Where", v: "Nice / French Riviera or remote" },
      { k: "Available", v: "early December 2026" },
      { k: "School", v: "42 Nice, RNCP level\u00a07 degree in progress" },
      { k: "Languages", v: "professional English, Japanese JLPT\u00a0N5" },
    ],
    proof:
      "I build real products with AI agents, from the idea to production. My app GaijinToSensei is live with real users, in 3 languages: 3 Claude Code agents wrote 479 of its 724 commits.",
    proofLink: "See the project",
    also: "Nothing reaches production without per-branch tests, a checked preview and automatic rollback.",
    alsoLink: "My guardrails",
    ctaProjects: "See my projects",
    statusTitle: "How I ship",
    pipeline: [
      { k: "Idea", v: "split into tasks" },
      { k: "Agents", v: "Claude Code, one branch each" },
      { k: "Tests", v: "Playwright before every merge" },
      { k: "Preview", v: "checks before any traffic" },
      { k: "Production", v: "automatic rollback" },
    ],
    pipelineLabel: "Path from an idea to production",
    liveLabel: "live",
    gtsShotAlt: "Home page of gajintosensei.com",
    metaaoeShotAlt: "MetaAOE app home: profile, Elo, latest ranked games",
    featuredLead: "A web app to learn Japanese. In production with real users, in French, English and Japanese.",
    facetsLabel: "What the project shows",
    skillsTitle: "Skills",
    skillsCols: { domain: "Area", prod: "Used in my projects", learning: "Learning" },
    none: "Not in production yet",
    casesTitle: "What I build",
    moreTitle: "Go further",
    liveSite: "Open the site",
    contactTitle2: "Looking for an AI, web or DevOps intern?",
    contactText: "6-month internship, in Nice / the French Riviera or remote, from early December 2026. The resume fits on one page.",
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
      domain: "IA et agents",
      prod: ["Claude Code, 3 agents en parallèle", "skills d'agents", "MCP", "Codex, OpenCode, Gemini CLI", "Hermes Agent sur VPS", "modèles Claude et GPT"],
      learning: ["LangGraph", "Pydantic", "évaluation sur jeu de cas"],
    },
    {
      domain: "Web et produit",
      prod: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Redis", "comptes OIDC", "Astro", "sites en 3 langues", "SEO technique"],
      learning: ["roblox-ts", "Rojo"],
    },
    {
      domain: "DevOps et prod",
      prod: ["Linux (VPS, systemd, cron)", "Bash", "Git", "Cloudflare (Workers, Pages, Tunnel)", "Vercel", "déploiement avec retour arrière", "supervision et alertes", "restauration PITR"],
      learning: ["Docker", "Docker compose", "Ansible", "GitHub Actions", "AWS (Cloud Practitioner en cours)", "HashiCorp Vault"],
    },
    {
      domain: "Qualité",
      prod: ["Playwright avant fusion", "tests par branche", "préversion contrôlée", "migrations additives", "route de santé"],
      learning: ["pytest", "Lighthouse CI", "C, C++, assembleur x86-64 (42)"],
    },
  ],
  en: [
    {
      domain: "AI and agents",
      prod: ["Claude Code, 3 agents in parallel", "agent skills", "MCP", "Codex, OpenCode, Gemini CLI", "Hermes Agent on a VPS", "Claude and GPT models"],
      learning: ["LangGraph", "Pydantic", "evaluation on a test set"],
    },
    {
      domain: "Web and product",
      prod: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Redis", "OIDC accounts", "Astro", "sites in 3 languages", "technical SEO"],
      learning: ["roblox-ts", "Rojo"],
    },
    {
      domain: "DevOps and production",
      prod: ["Linux (VPS, systemd, cron)", "Bash", "Git", "Cloudflare (Workers, Pages, Tunnel)", "Vercel", "deploys with rollback", "monitoring and alerts", "PITR restore"],
      learning: ["Docker", "Docker compose", "Ansible", "GitHub Actions", "AWS (Cloud Practitioner in progress)", "HashiCorp Vault"],
    },
    {
      domain: "Quality",
      prod: ["Playwright before merge", "per-branch tests", "checked preview", "additive migrations", "health route"],
      learning: ["pytest", "Lighthouse CI", "C, C++, x86-64 assembly (42)"],
    },
  ],
};

// Projet vedette (GaijinToSensei) : trois facettes à égalité.
export const FEATURED = {
  fr: {
    title: "GaijinToSensei",
    facets: [
      { k: "IA", v: "3 agents Claude Code en parallèle, une branche chacun : 479 des 724 commits." },
      { k: "Web", v: "Next.js, TypeScript, PostgreSQL avec Prisma, Redis." },
      { k: "DevOps", v: "Cloudflare Workers, préversion contrôlée, retour arrière automatique, garde de prod toutes les 10 minutes." },
    ],
  },
  en: {
    title: "GaijinToSensei",
    facets: [
      { k: "AI", v: "3 Claude Code agents in parallel, one branch each: 479 of the 724 commits." },
      { k: "Web", v: "Next.js, TypeScript, PostgreSQL with Prisma, Redis." },
      { k: "DevOps", v: "Cloudflare Workers, checked preview, automatic rollback, a production guard every 10 minutes." },
    ],
  },
};

export interface ProjectCard {
  title: string;
  tags: string;
  text: string;
  result: string;
  href: string;
  external?: boolean;
  img?: "metaaoe";
  steps?: { k: string; v: string }[];
}

// Cartes de l'accueil, dans l'ordre d'affichage. Zapz Forge : code non public, pas de lien externe.
export const PROJECTS: Record<Lang, ProjectCard[]> = {
  fr: [
    {
      title: "Zapz Forge, mon atelier d'agents pour jeux Roblox",
      tags: "IA",
      text: "Claude Code, Codex, OpenCode et Gemini CLI travaillent sur un même jeu, reliés à Roblox Studio et Blender par MCP.",
      result: "24 skills écrits pour les agents, dont une barre de qualité qui les oblige à se noter sur 10 face à de vrais jeux.",
      href: "/projets/agents-ia/#zapz-forge",
      steps: [
        { k: "4 agents", v: "un même jeu" },
        { k: "MCP", v: "Studio, Blender" },
        { k: "24 skills", v: "barre de qualité" },
      ],
    },
    {
      title: "MetaAOE, app Overwolf et site pour Age of Empires",
      tags: "Web · IA",
      text: "Stats, build orders et overlay en jeu pour AoE IV et II, site avec comptes utilisateurs (OIDC) pour partager ses builds. Codée la nuit par des agents.",
      result: "En ligne. En cours de QA chez Overwolf pour leur store.",
      href: "https://metaaoe.app",
      external: true,
      img: "metaaoe",
    },
    {
      title: "Automatisations sur VPS",
      tags: "IA · DevOps",
      text: "Hermes Agent, que j'ai configuré et que j'exploite : une usine à vidéos courtes qui programme des posts YouTube, Instagram et TikTok, une boucle SEO, des réponses aux commentaires.",
      result: "25 tâches planifiées, garde de prod toutes les 10 minutes avec alertes Telegram.",
      href: "/projets/infra-perso/",
      steps: [
        { k: "25 tâches", v: "planifiées" },
        { k: "SEO", v: "1 amélioration / jour" },
        { k: "Alertes", v: "Telegram" },
      ],
    },
    {
      title: "steam-roblox-agents, système multi-agents",
      tags: "IA",
      text: "Un graphe LangGraph en Python dit si un jeu Steam en tendance mérite une adaptation Roblox. Un agent critique renvoie la note quand elle ne tient pas.",
      result: "61,9 % de verdicts exacts sur 21 cas, contre 33,3 % pour une règle naïve.",
      href: "/projets/agents-ia/#steam-roblox-agents",
      steps: [
        { k: "Collecte", v: "Steam, Roblox" },
        { k: "Critique", v: "renvoie la note" },
        { k: "21 cas", v: "évalués" },
      ],
    },
  ],
  en: [
    {
      title: "Zapz Forge, my agent workshop for Roblox games",
      tags: "AI",
      text: "Claude Code, Codex, OpenCode and Gemini CLI work on the same game, connected to Roblox Studio and Blender through MCP.",
      result: "24 skills written for the agents, including a quality bar that makes them score themselves out of 10 against real games.",
      href: "/en/projects/ai-agents/#zapz-forge",
      steps: [
        { k: "4 agents", v: "one game" },
        { k: "MCP", v: "Studio, Blender" },
        { k: "24 skills", v: "quality bar" },
      ],
    },
    {
      title: "MetaAOE, an Overwolf app and site for Age of Empires",
      tags: "Web · AI",
      text: "Stats, build orders and an in-game overlay for AoE IV and II, and a site with user accounts (OIDC) to share builds. Built at night by agents.",
      result: "Live. Going through Overwolf QA for their store.",
      href: "https://metaaoe.app",
      external: true,
      img: "metaaoe",
    },
    {
      title: "Automations on a VPS",
      tags: "AI · DevOps",
      text: "Hermes Agent, which I configured and run: a short video factory that schedules YouTube, Instagram and TikTok posts, an SEO loop, replies to comments.",
      result: "25 scheduled jobs, a production guard every 10 minutes with Telegram alerts.",
      href: "/en/projects/personal-infra/",
      steps: [
        { k: "25 jobs", v: "scheduled" },
        { k: "SEO", v: "1 change / day" },
        { k: "Alerts", v: "Telegram" },
      ],
    },
    {
      title: "steam-roblox-agents, a multi-agent system",
      tags: "AI",
      text: "A LangGraph graph in Python decides whether a trending Steam game is worth a Roblox adaptation. A critic agent sends back a score that does not hold up.",
      result: "61.9% exact verdicts on 21 cases, against 33.3% for a naive rule.",
      href: "/en/projects/ai-agents/#steam-roblox-agents",
      steps: [
        { k: "Collect", v: "Steam, Roblox" },
        { k: "Critic", v: "sends score back" },
        { k: "21 cases", v: "evaluated" },
      ],
    },
  ],
};

export const MORE = {
  fr: [
    { key: "agents" as const, title: "Agents IA et garde-fous", text: "Comment je fais livrer des agents sans leur confier la prod." },
    { key: "infra" as const, title: "Infra perso", text: "VPS en systemd et cron, hub sans port ouvert, 5 sites publiés seuls." },
    { key: "systeme" as const, title: "Système et projets 42", text: "Cloud-1, ft_transcendence, ft_strace, libasm." },
    { key: "deploy" as const, title: "Comment ce site est déployé", text: "Push, CI, image Docker, Cloudflare Workers, supervision." },
  ],
  en: [
    { key: "agents" as const, title: "AI agents and guardrails", text: "How I let agents ship without handing them production." },
    { key: "infra" as const, title: "Personal infrastructure", text: "VPS with systemd and cron, a hub with no open port, 5 sites that publish themselves." },
    { key: "systeme" as const, title: "Systems and 42 projects", text: "Cloud-1, ft_transcendence, ft_strace, libasm." },
    { key: "deploy" as const, title: "How this site is deployed", text: "Push, CI, Docker image, Cloudflare Workers, monitoring." },
  ],
};

export const ABOUT = {
  fr: {
    title: "À propos",
    seoTitle: "À propos de Matteo Murru",
    description: "Matteo Murru, étudiant à 42 Nice. Développeur IA, web et DevOps, cherche un stage de 6 mois à Nice / Côte d'Azur ou en télétravail, dès début décembre 2026.",
    photoAlt: "Photo de Matteo Murru",
    paragraphs: [
      "Je m'appelle Matteo Murru et j'habite à Nice. J'étudie à 42 Nice : j'ai validé le tronc commun et je prépare le titre RNCP niveau 7 de 42.",
      "Je construis des produits avec des agents IA. J'utilise Claude Code tous les jours : je découpe le besoin en tâches, je les confie à plusieurs agents en parallèle, puis je relis, je teste et je mets en ligne. J'ai appris le web et la prod sur mes propres projets, et je veux maintenant le faire au sein d'une équipe.",
    ],
    japanTitle: "Japon",
    japan: [
      "J'ai vécu au Japon de mars à octobre 2026, pour un échange à 42 Tokyo. De juin à octobre 2026, j'ai travaillé chez Keywords Studios à Tokyo comme testeur de localisation (LQA) sur des jeux du studio Konami : vérifier le français en jeu, reproduire les bugs techniques et les décrire avec précision pour les équipes de développement. Je veux travailler au Japon à moyen terme.",
    ],
    beforeTitle: "Avant 42",
    before: "Bac pro Commercialisation et services en restauration, puis des emplois en restauration rapide.",
    timelineTitle: "Parcours",
    timeline: [
      { date: "Janvier 2025", text: "Entrée à 42 Nice." },
      { date: "2025", text: "Tronc commun validé." },
      { date: "Juin 2025", text: "Certification C de CodinGame." },
      { date: "Mars 2026", text: "Échange à 42 Tokyo." },
      { date: "Juin à octobre 2026", text: "Testeur de localisation (LQA) chez Keywords Studios, à Tokyo, sur des jeux Konami." },
      { date: "Octobre 2026", text: "Retour à Nice." },
      { date: "Décembre 2026", text: "Disponible pour un stage de 6 mois." },
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
    description: "Matteo Murru, 42 Nice student. AI, web and DevOps developer, looking for a 6-month internship in Nice / the French Riviera or remote, from early December 2026.",
    photoAlt: "Photo of Matteo Murru",
    paragraphs: [
      "My name is Matteo Murru and I live in Nice. I study at 42 Nice: I completed the common core and I am working towards 42's RNCP level 7 degree (master's level).",
      "I build products with AI agents. I use Claude Code every day: I split the need into tasks, hand them to several agents in parallel, then I review, test and ship. I learned web and production work on my own projects, and now I want to do it as part of a team.",
    ],
    japanTitle: "Japan",
    japan: [
      "I lived in Japan from March to October 2026, for an exchange at 42 Tokyo. From June to October 2026, I worked at Keywords Studios in Tokyo as a localization QA tester (LQA) on games from the Konami studio: checking the French language in game, reproducing technical bugs and reporting them precisely to the development teams. I want to work in Japan in the medium term.",
    ],
    beforeTitle: "Before 42",
    before: "A vocational high school diploma in restaurant service, then jobs in fast food.",
    timelineTitle: "Path",
    timeline: [
      { date: "January 2025", text: "Joined 42 Nice." },
      { date: "2025", text: "Common core completed." },
      { date: "June 2025", text: "CodinGame C certification." },
      { date: "March 2026", text: "Exchange at 42 Tokyo." },
      { date: "June to October 2026", text: "Localization QA tester (LQA) at Keywords Studios, Tokyo, on Konami games." },
      { date: "October 2026", text: "Back in Nice." },
      { date: "December 2026", text: "Available for a 6-month internship." },
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
    seoTitle: "Comment ce site est déployé : CI, Docker, Cloudflare Workers et supervision",
    description:
      "Le chemin d'un commit jusqu'à zapz.work : CI GitHub Actions (lint, build, tests, Lighthouse), image Docker sur GHCR, mise en ligne sur Cloudflare Workers et contrôle de disponibilité.",
    lead: "Chaque version est vérifiée, construite, mise en ligne puis surveillée. Voici le chemin d'un commit jusqu'à zapz.work.",
    diagramTitle: "Schéma",
    diagramAlt:
      "Schéma : un push déclenche la CI GitHub Actions (lint, build, tests, Lighthouse) puis la publication d'une image Docker sur GHCR. Un script de mise en ligne reconstruit le commit, relance les tests et publie le site sur Cloudflare Workers. Un contrôle lancé depuis un serveur personnel surveille zapz.work toutes les 15 minutes.",
    stepsTitle: "Étape par étape",
    steps: [
      {
        title: "Push",
        text: "Je pousse sur la branche principale du dépôt GitHub. Seule cette branche part en production.",
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
        title: "Hébergement",
        text: "Le site tourne sur Cloudflare Workers : les fichiers du build sont servis comme assets statiques du Worker, et son code gère les redirections (www vers le domaine nu, http vers https, anciennes adresses, slash final), les en-têtes de sécurité, le cache des fichiers versionnés et la page 404.",
      },
      {
        title: "Mise en ligne",
        text: "Un script lancé depuis mon serveur part de l'export exact du commit, réinstalle les dépendances, reconstruit et relance les tests, publie avec `wrangler deploy`, puis vérifie en ligne les pages, les redirections et la 404. Une version qui échoue aux tests n'est pas publiée. La CI a le même job de mise en ligne, actif dès que le jeton Cloudflare est posé dans les secrets GitHub. Retour arrière : version précédente du Worker.",
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
      "Migré de Vercel vers Cloudflare Workers le 5 novembre 2026, quand le compte gratuit a dépassé son quota d'usage. La zone DNS a été recopiée chez Cloudflare avant la bascule, enregistrements e-mail compris : aucun e-mail perdu.",
    ],
  },
  en: {
    title: "How this site is deployed",
    seoTitle: "How this site is deployed: CI, Docker, Cloudflare Workers and monitoring",
    description:
      "The path from a commit to zapz.work: GitHub Actions CI (lint, build, tests, Lighthouse), a Docker image on GHCR, release on Cloudflare Workers and an uptime check.",
    lead: "Every version is checked, built, released and then monitored. Here is the path from a commit to zapz.work.",
    diagramTitle: "Diagram",
    diagramAlt:
      "Diagram: a push triggers the GitHub Actions CI (lint, build, tests, Lighthouse) and then publishes a Docker image to GHCR. A release script rebuilds the commit, runs the tests again and publishes the site to Cloudflare Workers. A check run from a personal server monitors zapz.work every 15 minutes.",
    stepsTitle: "Step by step",
    steps: [
      {
        title: "Push",
        text: "I push to the main branch of the GitHub repository. Only this branch goes to production.",
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
        title: "Hosting",
        text: "The site runs on Cloudflare Workers: the build files are served as the Worker's static assets, and its code handles redirects (www to the bare domain, http to https, old URLs, trailing slash), security headers, caching of versioned files and the 404 page.",
      },
      {
        title: "Release",
        text: "A script run from my server starts from the exact export of the commit, reinstalls dependencies, rebuilds and runs the tests again, publishes with `wrangler deploy`, then checks the pages, redirects and 404 online. A version that fails the tests is not published. The CI has the same release job, active once the Cloudflare token is set in the GitHub secrets. Rollback: the previous Worker version.",
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
      "Moved from Vercel to Cloudflare Workers on 5 November 2026, when the free account went over its usage quota. The DNS zone was copied to Cloudflare before the switch, email records included: no email was lost.",
    ],
  },
};
