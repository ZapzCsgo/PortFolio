// Études de cas. Faits vérifiés dans le code, les journaux et l'historique git uniquement.
// Le texte entre accents graves `ainsi` est rendu en <code>.
import type { Lang } from "./site";

export interface CaseStudy {
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  stack: string[];
  link?: { href: string; label: string };
  context: string[];
  problem: string[];
  done: { title: string; items: string[] }[];
  result: string[];
  learned: string[];
}

export const GTS: Record<Lang, CaseStudy> = {
  fr: {
    title: "GaijinToSensei : une app en production",
    seoTitle: "GaijinToSensei, mise en production et exploitation",
    description:
      "Comment je mets en production GaijinToSensei : Next.js, Neon, Prisma, Upstash, Resend et Vercel, chaîne d'agents, déploiement contrôlé avec retour arrière et supervision.",
    lead: "Une app pour apprendre le japonais, en production avec des utilisateurs réels.",
    stack: ["Next.js", "PostgreSQL (Neon)", "Prisma", "Upstash Redis", "Resend", "Vercel", "Playwright", "Bash"],
    link: { href: "https://gajintosensei.com", label: "gajintosensei.com" },
    context: [
      "Je suis seul sur le projet. Des agents Claude Code écrivent la plupart du code. Mon travail, c'est le cadre autour : comment le code arrive en prod, comment on sait qu'il marche, et comment on répare.",
      "L'app tourne sur Vercel, avec une base PostgreSQL serverless chez Neon (via Prisma), Redis chez Upstash pour limiter le débit et Resend pour les e-mails.",
    ],
    problem: [
      "Beaucoup de changements par jour, plusieurs agents en parallèle, et un quota de déploiements par jour sur la plateforme.",
      "Chaque mise en prod doit rester sûre : une version cassée ne doit pas rester en ligne, et deux déploiements ne doivent pas se marcher dessus.",
    ],
    done: [
      {
        title: "Une chaîne d'agents qui livre",
        items: [
          "Plusieurs agents travaillent en parallèle, chacun sur sa branche. Ils codent, testent (QA automatisée avec Playwright), fusionnent et déploient.",
          "Des verrous évitent les conflits entre agents.",
          "Les fusions s'accumulent sur la branche principale et partent en un seul déploiement, pour tenir dans le quota de la plateforme.",
        ],
      },
      {
        title: "Une mise en prod contrôlée",
        items: [
          "Un script déploie l'export exact d'un commit dans une préversion, puis vérifie les pages publiques : code 200, titre, URL canonique, sitemap complet, robots.",
          "Le build de prod est construit sans être mis en ligne, contrôlé, puis promu. La branche principale n'avance qu'en avance rapide, jamais en force.",
          "Après la promotion, le site est revérifié. En cas d'échec, le script revient seul au déploiement précédent et envoie une alerte.",
          "Un verrou de fichier empêche deux mises en prod en même temps.",
          "Toutes les 10 minutes, une tâche planifiée vérifie que la prod n'est pas en retard sur la branche principale. Si elle l'est, elle relance une mise en prod sûre. Sinon elle n'envoie qu'une alerte.",
        ],
      },
      {
        title: "Supervision et protections",
        items: [
          "Une route de santé vérifie la base, Redis, l'envoi d'e-mails et le stockage, avec un délai maximum par service et un cache court pour ne pas les surcharger.",
          "Les erreurs serveur sont enregistrées en base et visibles dans une page Santé de l'outil d'administration.",
          "Limitation de débit par fenêtres glissantes sur la connexion, le chat, les signalements et le support.",
          "Depuis l'incident du 29 octobre 2026, les migrations de base sont additives uniquement. Le script refuse tout DROP, RENAME, TRUNCATE ou ALTER COLUMN, et n'applique jamais de migration lui-même.",
        ],
      },
    ],
    result: [
      "L'app est en production, avec des utilisateurs réels.",
      "Les nouveautés partent groupées, ce qui tient dans le quota. Un déploiement qui échoue aux contrôles ne reste pas en ligne.",
    ],
    learned: [
      "Les garde-fous comptent plus que la vitesse. Un agent rapide sans garde-fou finit par casser la prod.",
      "Une étape de déploiement doit pouvoir être annulée sans moi.",
      "Une route de santé simple, appelée souvent, dit plus qu'un tableau de bord qu'on ne regarde pas.",
    ],
  },
  en: {
    title: "GaijinToSensei: an app in production",
    seoTitle: "GaijinToSensei, shipping and running it in production",
    description:
      "How I ship GaijinToSensei: Next.js, Neon, Prisma, Upstash, Resend and Vercel, an agent pipeline, checked deploys with automatic rollback, and monitoring.",
    lead: "An app to learn Japanese, in production with real users.",
    stack: ["Next.js", "PostgreSQL (Neon)", "Prisma", "Upstash Redis", "Resend", "Vercel", "Playwright", "Bash"],
    link: { href: "https://gajintosensei.com", label: "gajintosensei.com" },
    context: [
      "I am alone on the project. Claude Code agents write most of the code. My job is the frame around it: how code reaches production, how we know it works, and how we fix it.",
      "The app runs on Vercel, with a serverless PostgreSQL database on Neon (through Prisma), Redis on Upstash for rate limiting and Resend for emails.",
    ],
    problem: [
      "Many changes a day, several agents in parallel, and a daily deployment quota on the platform.",
      "Every release has to stay safe: a broken version must not stay online, and two deployments must not collide.",
    ],
    done: [
      {
        title: "An agent pipeline that ships",
        items: [
          "Several agents work in parallel, each on its own branch. They write code, test it (automated QA with Playwright), merge and deploy.",
          "Locks prevent conflicts between agents.",
          "Merges pile up on the main branch and ship in a single deployment, to stay within the platform quota.",
        ],
      },
      {
        title: "Checked releases",
        items: [
          "A script deploys the exact export of a commit to a preview, then checks the public pages: status 200, title, canonical URL, full sitemap, robots.",
          "The production build is built without going live, checked, then promoted. The main branch only moves by fast-forward, never by force.",
          "After promotion the site is checked again. If that fails, the script rolls back to the previous deployment on its own and sends an alert.",
          "A file lock stops two releases from running at the same time.",
          "Every 10 minutes, a scheduled job checks that production is not behind the main branch. If it is, it starts a safe release. Otherwise it only sends an alert.",
        ],
      },
      {
        title: "Monitoring and protections",
        items: [
          "A health route checks the database, Redis, email sending and storage, with a timeout per service and a short cache so it does not overload them.",
          "Server errors are stored in the database and shown on a Health page in the admin tool.",
          "Sliding-window rate limits on login, chat, reports and support.",
          "Since the 29 October 2026 incident, database migrations are additive only. The script rejects any DROP, RENAME, TRUNCATE or ALTER COLUMN, and never applies a migration itself.",
        ],
      },
    ],
    result: [
      "The app is in production, with real users.",
      "New features ship in batches, which fits the quota. A deployment that fails the checks does not stay online.",
    ],
    learned: [
      "Guardrails matter more than speed. A fast agent without guardrails ends up breaking production.",
      "Any deployment step must be reversible without me.",
      "A simple health route, called often, tells more than a dashboard nobody looks at.",
    ],
  },
};

export const INFRA: Record<Lang, CaseStudy> = {
  fr: {
    title: "Mon infra perso",
    seoTitle: "Infra perso : VPS, tâches planifiées, tunnel et sites statiques",
    description:
      "Un VPS Linux qui fait tourner des agents et des tâches de nuit, un hub exposé par un tunnel Cloudflare derrière un proxy edge sur Vercel, des sites publiés sur Cloudflare Pages.",
    lead: "Un VPS qui travaille la nuit, un hub perso qui n'ouvre aucun port, et des sites publiés tout seuls.",
    stack: ["Linux", "systemd", "cron", "Bash", "Node.js", "Cloudflare Tunnel", "Vercel Edge", "Cloudflare Pages", "wrangler"],
    context: [
      "Je fais tourner plusieurs projets en même temps : GaijinToSensei, deux apps Overwolf et leurs sites. J'ai besoin que du travail avance quand je ne suis pas devant l'écran.",
    ],
    problem: [
      "Faire tourner des agents et des tâches sans surveillance, sans leur donner tous les droits, sans exposer ma machine et sans payer l'hébergement des sites.",
    ],
    done: [
      {
        title: "Un VPS qui travaille la nuit",
        items: [
          "Les agents de nuit tournent comme un service systemd, sous un utilisateur dédié sans droits root.",
          "Un verrou garantit qu'un seul exécuteur tourne à la fois. Il reprend seul après une limite d'usage, et met le travail de côté s'il bloque.",
          "Les rares actions qui demandent root passent par un exécuteur à liste fermée : il ne lance que des commandes prévues à l'avance.",
          "L'exécuteur a ses propres tests.",
        ],
      },
      {
        title: "Des tâches planifiées",
        items: [
          "25 tâches planifiées, dont 14 qui n'utilisent aucune IA : la garde de prod de GaijinToSensei toutes les 10 minutes, la publication du site MetaDBD toutes les 15 minutes, la surveillance d'un bot Discord toutes les 2 minutes, l'envoi des nouvelles pages aux moteurs de recherche (IndexNow) et des alertes.",
        ],
      },
      {
        title: "Un hub perso sans port ouvert",
        items: [
          "Le hub tourne sur mon PC. Il sort par un tunnel Cloudflare : aucun port entrant n'est ouvert.",
          "Devant, un proxy edge sur Vercel fait l'authentification : mot de passe haché (PBKDF2), comparaison à temps constant, cookie signé (HMAC), délai contre la force brute, en-têtes HSTS et anti-iframe, page hors index.",
          "L'adresse du tunnel est lue dans une configuration edge. Quand le tunnel change, il n'y a rien à redéployer. S'il est coupé, le proxy répond une erreur 503 propre.",
        ],
      },
      {
        title: "Des sites publiés automatiquement",
        items: [
          "5 sites statiques sur Cloudflare Pages. metaaoe.app se publie à chaque push grâce à l'intégration Git. Les autres sont publiés depuis le VPS avec wrangler, par une tâche planifiée ou un script.",
        ],
      },
    ],
    result: [
      "Du travail avance chaque nuit. Les sites se mettent à jour sans intervention.",
      "Aucun port de mon PC n'est exposé sur Internet. L'hébergement des sites ne coûte rien.",
    ],
    learned: [
      "Donner à chaque programme le minimum de droits : un utilisateur dédié et une liste fermée valent mieux qu'un sudo général.",
      "Un verrou par tâche évite la plupart des bugs de tâches planifiées qui se chevauchent.",
      "Une tâche planifiée doit rester silencieuse quand tout va bien et n'envoyer qu'une alerte quand ça casse.",
    ],
  },
  en: {
    title: "My personal infrastructure",
    seoTitle: "Personal infrastructure: VPS, scheduled jobs, tunnel and static sites",
    description:
      "A Linux VPS that runs agents and night jobs, a hub exposed through a Cloudflare tunnel behind an edge proxy on Vercel, and sites published to Cloudflare Pages.",
    lead: "A VPS that works at night, a personal hub that opens no port, and sites that publish themselves.",
    stack: ["Linux", "systemd", "cron", "Bash", "Node.js", "Cloudflare Tunnel", "Vercel Edge", "Cloudflare Pages", "wrangler"],
    context: [
      "I run several projects at once: GaijinToSensei, two Overwolf apps and their sites. I need work to move forward when I am not at the screen.",
    ],
    problem: [
      "Run agents and jobs unattended, without giving them full rights, without exposing my machine and without paying to host the sites.",
    ],
    done: [
      {
        title: "A VPS that works at night",
        items: [
          "The night agents run as a systemd service, under a dedicated user without root rights.",
          "A lock makes sure only one runner works at a time. It resumes on its own after a usage limit, and sets the work aside if it gets stuck.",
          "The few actions that need root go through a closed-list executor: it only runs commands defined in advance.",
          "The runner has its own tests.",
        ],
      },
      {
        title: "Scheduled jobs",
        items: [
          "25 scheduled jobs, 14 of them without any AI: the GaijinToSensei production guard every 10 minutes, publishing the MetaDBD site every 15 minutes, watching a Discord bot every 2 minutes, sending new pages to search engines (IndexNow) and alerts.",
        ],
      },
      {
        title: "A personal hub with no open port",
        items: [
          "The hub runs on my PC. It goes out through a Cloudflare tunnel: no inbound port is open.",
          "In front of it, an edge proxy on Vercel handles authentication: hashed password (PBKDF2), constant-time comparison, signed cookie (HMAC), brute-force delay, HSTS and anti-framing headers, noindex.",
          "The tunnel address is read from an edge configuration store. When the tunnel changes, nothing needs to be redeployed. If it is down, the proxy returns a clean 503.",
        ],
      },
      {
        title: "Sites that publish themselves",
        items: [
          "5 static sites on Cloudflare Pages. metaaoe.app publishes on every push through the Git integration. The others are published from the VPS with wrangler, by a scheduled job or a script.",
        ],
      },
    ],
    result: [
      "Work moves forward every night. The sites update without me.",
      "No port of my PC is exposed to the Internet. Hosting the sites costs nothing.",
    ],
    learned: [
      "Give each program the least rights it needs: a dedicated user and a closed list beat a general sudo.",
      "One lock per job prevents most bugs from overlapping scheduled jobs.",
      "A scheduled job should stay quiet when all is well and send a single alert when it breaks.",
    ],
  },
};
