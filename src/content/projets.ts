// Études de cas. Faits vérifiés dans le code, les journaux et l'historique git uniquement.
// Le texte entre accents graves `ainsi` est rendu en <code>.
import { SRA_PUBLIC, SRA_REPO, type Lang } from "./site";

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
      "Comment je mets en production GaijinToSensei : Next.js sur Cloudflare Workers, Neon, Prisma, Upstash, Resend, chaîne d'agents, déploiement contrôlé avec retour arrière et supervision.",
    lead: "Une app pour apprendre le japonais, en production avec des utilisateurs réels.",
    stack: ["Next.js", "PostgreSQL (Neon)", "Prisma", "Upstash Redis", "Resend", "Cloudflare Workers", "Playwright", "Bash"],
    link: { href: "https://gajintosensei.com", label: "gajintosensei.com" },
    context: [
      "Je suis seul sur le projet. Des agents Claude Code écrivent la plupart du code. Mon travail, c'est le cadre autour : comment le code arrive en prod, comment on sait qu'il marche, et comment on répare.",
      "L'app tourne sur Cloudflare Workers (Next.js adapté par OpenNext), avec une base PostgreSQL serverless chez Neon (via Prisma), Redis chez Upstash pour limiter le débit et Resend pour les e-mails.",
    ],
    problem: [
      "Beaucoup de changements par jour, plusieurs agents en parallèle, et un quota de déploiements par jour sur l'hébergeur d'origine.",
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
          "Un script construit l'export exact d'un commit et le publie comme nouvelle version du Worker, sans trafic, puis vérifie les pages publiques sur l'adresse de cette version : code 200, titre, URL canonique, sitemap complet, robots.",
          "La version ne reçoit le trafic qu'après ces contrôles. La branche principale n'avance qu'en avance rapide, jamais en force.",
          "Après l'activation, le site est revérifié. En cas d'échec, le script revient seul à la version précédente et envoie une alerte.",
          "Un verrou de fichier empêche deux mises en prod en même temps.",
          "Toutes les 10 minutes, une tâche planifiée vérifie que la prod n'est pas en retard sur la branche principale. Si elle l'est, elle relance une mise en prod sûre. Sinon elle n'envoie qu'une alerte.",
        ],
      },
      {
        title: "Migration de Vercel vers Cloudflare Workers",
        items: [
          "Le 5 novembre 2026, le compte gratuit Vercel a dépassé son quota d'usage et ses projets ont été coupés. J'ai migré l'app vers Cloudflare Workers le jour même, pour 5 $ par mois.",
          "Devant l'app, un second Worker met en cache les pages publiques pour les visiteurs non connectés, jamais pour une session. Temps de réponse du serveur (TTFB) passé de 0,26-0,30 s à 0,07-0,09 s, LCP de l'accueil à 1,4 s.",
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
      "Un agent rapide sans garde-fou a fini par casser ma prod. Je préfère une mise en prod un peu plus lente, mais vérifiée à chaque étape.",
      "Une étape de déploiement doit pouvoir être annulée sans moi.",
      "Une route de santé simple, appelée souvent, dit plus qu'un tableau de bord qu'on ne regarde pas.",
    ],
  },
  en: {
    title: "GaijinToSensei: an app in production",
    seoTitle: "GaijinToSensei, shipping and running it in production",
    description:
      "How I ship GaijinToSensei: Next.js on Cloudflare Workers, Neon, Prisma, Upstash, Resend, an agent pipeline, checked deploys with automatic rollback, and monitoring.",
    lead: "An app to learn Japanese, in production with real users.",
    stack: ["Next.js", "PostgreSQL (Neon)", "Prisma", "Upstash Redis", "Resend", "Cloudflare Workers", "Playwright", "Bash"],
    link: { href: "https://gajintosensei.com", label: "gajintosensei.com" },
    context: [
      "I am alone on the project. Claude Code agents write most of the code. My job is the frame around it: how code reaches production, how we know it works, and how we fix it.",
      "The app runs on Cloudflare Workers (Next.js adapted by OpenNext), with a serverless PostgreSQL database on Neon (through Prisma), Redis on Upstash for rate limiting and Resend for emails.",
    ],
    problem: [
      "Many changes a day, several agents in parallel, and a daily deployment quota on the original host.",
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
          "A script builds the exact export of a commit and uploads it as a new Worker version with no traffic, then checks the public pages on that version's address: status 200, title, canonical URL, full sitemap, robots.",
          "The version only gets traffic after these checks. The main branch only moves by fast-forward, never by force.",
          "After activation the site is checked again. If that fails, the script rolls back to the previous version on its own and sends an alert.",
          "A file lock stops two releases from running at the same time.",
          "Every 10 minutes, a scheduled job checks that production is not behind the main branch. If it is, it starts a safe release. Otherwise it only sends an alert.",
        ],
      },
      {
        title: "Migration from Vercel to Cloudflare Workers",
        items: [
          "On 5 November 2026, the free Vercel account went over its usage quota and its projects were shut down. I moved the app to Cloudflare Workers the same day, for $5 a month.",
          "In front of the app, a second Worker caches public pages for signed-out visitors, never for a session. Server response time (TTFB) went from 0.26-0.30 s to 0.07-0.09 s, home page LCP 1.4 s.",
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
      "A fast agent without guardrails ended up breaking my production. I now prefer a slightly slower release that is checked at every step.",
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
          "Le 5 novembre 2026, le proxy a été coupé avec le compte gratuit Vercel, qui avait dépassé son quota. Le hub reste fermé tant que je n'ai pas migré le proxy sur Cloudflare.",
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
          "On 5 November 2026, the proxy went down with the free Vercel account, which had gone over its quota. The hub stays closed until I move the proxy to Cloudflare.",
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

// Page « Agents IA » (cible secondaire : IA agentique). Chiffres GtS vérifiés par git (724 commits, 479 avec un
// trailer Co-Authored-By Claude ; branches w1, w2, w3). Aucun pourcentage d'évaluation de steam-roblox-agents tant que
// l'évaluation n'a pas été relancée avec de vrais modèles et une baseline.
export const AGENTS: Record<Lang, CaseStudy> = {
  fr: {
    title: "Agents IA : les faire livrer sans leur confier la prod",
    seoTitle: "Agents IA : chaîne d'agents Claude Code sur GaijinToSensei et système multi-agents LangGraph",
    description:
      "Comment je fais travailler des agents IA : 3 agents Claude Code en parallèle sur GaijinToSensei (479 des 724 commits), garde-fous ajoutés après un incident de prod, et steam-roblox-agents, un système multi-agents LangGraph avec un agent critique et une évaluation sur 21 cas.",
    lead: "Des agents Claude Code écrivent la plupart du code de mon app. Moi, je décide de ce qu'ils ont le droit de faire, et je vérifie ce qu'ils livrent.",
    stack: ["Claude Code", "LangGraph", "Python", "Pydantic", "Playwright", "Hermes Agent", "Bash", "Git"],
    context: [
      "Sur GaijinToSensei, 479 des 724 commits sont co-signés par un agent Claude Code (ligne `Co-Authored-By` dans l'historique git). Trois agents travaillent en même temps, chacun sur sa branche : `w1`, `w2`, `w3`.",
      "Sur mon VPS, j'ai installé et je fais tourner Hermes Agent, un agent open source. Je ne l'ai pas écrit. Je l'ai configuré : il lance des sous-agents, gère 25 tâches planifiées, et quand il se trompe, je corrige la consigne (skill) qui l'a induit en erreur.",
    ],
    problem: [
      "Un agent va vite et ne doute jamais. Le 29 octobre 2026, une migration lancée par un agent a visé la base de production au lieu d'une base jetable, et l'a vidée.",
      "Il me faut donc deux choses : des limites que l'agent ne peut pas contourner, et un moyen de mesurer si ce qu'il produit est juste.",
    ],
    done: [
      {
        title: "Trois agents en parallèle sur GaijinToSensei",
        items: [
          "Chaque agent a sa branche. Des verrous évitent les conflits entre agents.",
          "Avant une fusion, l'agent lance la QA automatisée avec Playwright. La branche principale n'avance qu'en avance rapide, jamais en force.",
          "Les fusions partent ensemble dans un seul déploiement, par le script de mise en prod contrôlée (préversion, contrôles, retour arrière automatique).",
        ],
      },
      {
        title: "Des garde-fous dans le code, après l'incident",
        items: [
          "La base a été restaurée par point-in-time restore. J'ai écrit un postmortem sans reproche.",
          "Les agents n'ont plus aucun droit destructif sur la prod. Le script de mise en prod refuse une migration qui contient DROP, RENAME, TRUNCATE ou ALTER COLUMN, et n'applique jamais de migration lui-même.",
          "La règle est dans le script, pas dans une consigne : un agent peut ignorer une phrase de son prompt, pas un script qui refuse.",
        ],
      },
      {
        title: "steam-roblox-agents : un système multi-agents évalué",
        items: [
          "Un graphe LangGraph qui dit si un jeu Steam en tendance mérite une adaptation Roblox. Un agent collecte les données Steam, un autre cherche les clones déjà sur Roblox, un analyste note le jeu (sortie structurée Pydantic), et un agent critique renvoie la note à l'analyste quand elle ne tient pas, deux fois au plus.",
          "Le score final est calculé par du code, pas par le modèle. Chaque décision garde ses sources (URL, outil, heure de lecture) dans un journal JSONL.",
          "Une évaluation sur 21 cas passés mesure les verdicts. Les tests et la CI tournent hors ligne, avec un modèle scripté et des réponses enregistrées : aucun appel payant.",
        ],
      },
    ],
    result: [
      "L'app est en production avec des utilisateurs réels, alors que la majorité de son code vient d'agents.",
      "Depuis l'incident, une migration destructive est bloquée par le script avant d'atteindre la prod.",
    ],
    learned: [
      "Signer chaque commit d'agent me permet de dire précisément ce que j'ai écrit et ce que j'ai fait écrire.",
      "Sans jeu de cas, je ne sais pas si un agent s'améliore ou s'il change seulement d'avis.",
      "Le plus long n'est pas de lancer un agent. C'est de vérifier ce qu'il a fait.",
    ],
  },
  en: {
    title: "AI agents: letting them ship without handing them production",
    seoTitle: "AI agents: a Claude Code agent pipeline on GaijinToSensei and a LangGraph multi-agent system",
    description:
      "How I work with AI agents: 3 Claude Code agents in parallel on GaijinToSensei (479 of 724 commits), guardrails added after a production incident, and steam-roblox-agents, a LangGraph multi-agent system with a critic agent and an evaluation on 21 cases.",
    lead: "Claude Code agents write most of the code of my app. I decide what they are allowed to do, and I check what they ship.",
    stack: ["Claude Code", "LangGraph", "Python", "Pydantic", "Playwright", "Hermes Agent", "Bash", "Git"],
    context: [
      "On GaijinToSensei, 479 of the 724 commits are co-signed by a Claude Code agent (a `Co-Authored-By` line in the git history). Three agents work at the same time, each on its own branch: `w1`, `w2`, `w3`.",
      "On my VPS, I installed and run Hermes Agent, an open source agent. I did not write it. I configured it: it starts sub-agents, runs 25 scheduled jobs, and when it gets something wrong, I fix the instruction (skill) that misled it.",
    ],
    problem: [
      "An agent is fast and never doubts itself. On 29 October 2026, a migration started by an agent hit the production database instead of a throwaway one, and wiped it.",
      "So I need two things: limits the agent cannot get around, and a way to measure whether what it produces is right.",
    ],
    done: [
      {
        title: "Three agents in parallel on GaijinToSensei",
        items: [
          "Each agent has its own branch. Locks prevent conflicts between agents.",
          "Before a merge, the agent runs the automated Playwright QA. The main branch only moves by fast-forward, never by force.",
          "Merges ship together in a single deployment, through the checked release script (preview, checks, automatic rollback).",
        ],
      },
      {
        title: "Guardrails in code, after the incident",
        items: [
          "The database was restored with point-in-time restore. I wrote a blameless postmortem.",
          "Agents no longer have any destructive rights on production. The release script rejects a migration that contains DROP, RENAME, TRUNCATE or ALTER COLUMN, and never applies a migration itself.",
          "The rule lives in the script, not in an instruction: an agent can ignore a line of its prompt, not a script that says no.",
        ],
      },
      {
        title: "steam-roblox-agents: an evaluated multi-agent system",
        items: [
          "A LangGraph graph that decides whether a trending Steam game is worth a Roblox adaptation. One agent collects Steam data, another looks for clones already on Roblox, an analyst scores the game (Pydantic structured output), and a critic agent sends the score back to the analyst when it does not hold up, at most twice.",
          "The final score is computed by code, not by the model. Every decision keeps its sources (URL, tool, time of reading) in a JSONL log.",
          "An evaluation on 21 past cases measures the verdicts. Tests and CI run offline, with a scripted model and recorded responses: no paid calls.",
        ],
      },
    ],
    result: [
      "The app is in production with real users, while most of its code comes from agents.",
      "Since the incident, a destructive migration is blocked by the script before it reaches production.",
    ],
    learned: [
      "Signing every agent commit lets me say exactly what I wrote and what I had written for me.",
      "Without a set of test cases, I cannot tell whether an agent got better or just changed its mind.",
      "Starting an agent is the quick part. Checking what it did takes longer.",
    ],
  },
};

if (SRA_PUBLIC) {
  AGENTS.fr.link = { href: SRA_REPO, label: "Code de steam-roblox-agents sur GitHub" };
  AGENTS.en.link = { href: SRA_REPO, label: "steam-roblox-agents code on GitHub" };
}
