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
    lead: "Une app web pour apprendre le japonais, en production avec des utilisateurs réels, en français, anglais et japonais.",
    stack: ["Next.js", "TypeScript", "PostgreSQL (Neon)", "Prisma", "Upstash Redis", "Resend", "Cloudflare Workers", "Playwright", "Bash"],
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
          "Les migrations de base sont additives uniquement. Le script refuse tout DROP, RENAME, TRUNCATE ou ALTER COLUMN, et n'applique jamais de migration lui-même.",
          "Les agents n'ont aucun droit destructif sur la base de prod, et la base se restaure à un instant précis (PITR).",
        ],
      },
    ],
    result: [
      "L'app est en production, avec des utilisateurs réels.",
      "Les nouveautés partent groupées, ce qui tient dans le quota. Un déploiement qui échoue aux contrôles ne reste pas en ligne.",
    ],
    learned: [
      "Un agent va vite et ne doute jamais. Je préfère une mise en prod un peu plus lente, mais vérifiée à chaque étape.",
      "Une étape de déploiement doit pouvoir être annulée sans moi.",
      "Une route de santé simple, appelée souvent, dit plus qu'un tableau de bord qu'on ne regarde pas.",
    ],
  },
  en: {
    title: "GaijinToSensei: an app in production",
    seoTitle: "GaijinToSensei, shipping and running it in production",
    description:
      "How I ship GaijinToSensei: Next.js on Cloudflare Workers, Neon, Prisma, Upstash, Resend, an agent pipeline, checked deploys with automatic rollback, and monitoring.",
    lead: "A web app to learn Japanese, in production with real users, in French, English and Japanese.",
    stack: ["Next.js", "TypeScript", "PostgreSQL (Neon)", "Prisma", "Upstash Redis", "Resend", "Cloudflare Workers", "Playwright", "Bash"],
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
          "Database migrations are additive only. The script rejects any DROP, RENAME, TRUNCATE or ALTER COLUMN, and never applies a migration itself.",
          "Agents have no destructive rights on the production database, and the database can be restored to a point in time (PITR).",
        ],
      },
    ],
    result: [
      "The app is in production, with real users.",
      "New features ship in batches, which fits the quota. A deployment that fails the checks does not stay online.",
    ],
    learned: [
      "An agent is fast and never doubts itself. I prefer a slightly slower release that is checked at every step.",
      "Any deployment step must be reversible without me.",
      "A simple health route, called often, tells more than a dashboard nobody looks at.",
    ],
  },
};

export const INFRA: Record<Lang, CaseStudy> = {
  fr: {
    title: "Automatisations et infra perso",
    seoTitle: "Automatisations et infra perso : VPS, 25 tâches planifiées, tunnel et sites statiques",
    description:
      "Un VPS Linux qui fait tourner des agents et des tâches de nuit, un hub exposé par un tunnel Cloudflare derrière un proxy edge sur Vercel, des sites publiés sur Cloudflare Pages.",
    lead: "Un VPS qui travaille la nuit (vidéos, SEO, garde de prod), un hub perso qui n'ouvre aucun port, et des sites publiés tout seuls.",
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
          "25 tâches planifiées, lancées par Hermes Agent (open source, que j'ai configuré et que j'exploite) ou par cron.",
          "Une usine à vidéos courtes produit et programme des posts sur YouTube, Instagram et TikTok. Une boucle SEO met en ligne une amélioration mesurée par jour. D'autres tâches répondent aux commentaires.",
          "14 tâches n'utilisent aucune IA : la garde de prod de GaijinToSensei toutes les 10 minutes avec alertes Telegram, la publication du site MetaDBD toutes les 15 minutes, la surveillance d'un bot Discord toutes les 2 minutes, l'envoi des nouvelles pages aux moteurs de recherche (IndexNow).",
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
    title: "Automations and personal infrastructure",
    seoTitle: "Automations and personal infrastructure: VPS, 25 scheduled jobs, tunnel and static sites",
    description:
      "A Linux VPS that runs agents and night jobs, a hub exposed through a Cloudflare tunnel behind an edge proxy on Vercel, and sites published to Cloudflare Pages.",
    lead: "A VPS that works at night (videos, SEO, production guard), a personal hub that opens no port, and sites that publish themselves.",
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
          "25 scheduled jobs, run by Hermes Agent (open source, which I configured and run) or by cron.",
          "A short video factory produces and schedules posts on YouTube, Instagram and TikTok. An SEO loop ships one measured improvement a day. Other jobs reply to comments.",
          "14 jobs use no AI at all: the GaijinToSensei production guard every 10 minutes with Telegram alerts, publishing the MetaDBD site every 15 minutes, watching a Discord bot every 2 minutes, sending new pages to search engines (IndexNow).",
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

// Page « Agents IA ». Chiffres GtS vérifiés par git (724 commits sur la branche principale, 479 avec un trailer
// Co-Authored-By Claude ; branches w1, w2, w3). steam-roblox-agents : 21 cas dans eval/cases.yaml, max_revisions = 2,
// pourcentages donnés par Matteo (08/11/2026). Zapz Forge et automatisations VPS : faits confirmés par Matteo (13/11/2026),
// code de Zapz Forge non public (aucun lien). Schémas et chiffres clés : content/agents.ts et content/diagrams.ts.
export const AGENTS: Record<Lang, CaseStudy> = {
  fr: {
    title: "Agents IA : les faire livrer sans leur confier la prod",
    seoTitle: "Agents IA : Claude Code sur GaijinToSensei, Zapz Forge, automatisations et système multi-agents LangGraph",
    description:
      "Comment je fais travailler des agents IA : 3 agents Claude Code en parallèle sur GaijinToSensei (479 des 724 commits) avec des garde-fous dans le code, Zapz Forge (4 agents de code reliés à Roblox Studio et Blender par MCP), 25 tâches planifiées sur un VPS, et steam-roblox-agents évalué sur 21 cas.",
    lead: "Des agents Claude Code écrivent la plupart du code de mon app. Je décide de ce qu'ils ont le droit de faire et je vérifie ce qu'ils livrent.",
    stack: ["Claude Code", "Codex", "OpenCode", "Gemini CLI", "MCP", "LangGraph", "Python", "Pydantic", "Playwright", "Hermes Agent"],
    context: [
      "Sur GaijinToSensei, **479 des 724** commits portent la ligne `Co-Authored-By` d'un agent Claude Code.",
      "Sur mon VPS, Hermes Agent (open source) lance des sous-agents et **25** tâches planifiées. Je l'ai **configuré, pas écrit**. S'il se trompe, je corrige la consigne (skill) en cause.",
    ],
    problem: [
      "Un agent va vite et ne doute jamais. Il peut casser une prod aussi vite qu'il livre une fonctionnalité.",
      "Il me faut des limites qu'il ne peut pas contourner, et une mesure de ce qu'il produit.",
    ],
    done: [
      {
        title: "Trois agents en parallèle sur GaijinToSensei",
        items: [
          "Chaque agent a sa branche (`w1`, `w2`, `w3`). Des verrous évitent les conflits.",
          "Les tests Playwright passent sur chaque branche avant la fusion. Les fusions partent ensemble, en un seul déploiement.",
        ],
      },
      {
        title: "Des garde-fous dans le code",
        items: [
          "Chaque version part d'abord en préversion, sans trafic, et passe des contrôles HTTP. En cas d'échec après la mise en ligne, le script revient seul à la version précédente.",
          "Les agents n'ont aucun droit destructif sur la prod. Le script refuse toute migration avec DROP, RENAME, TRUNCATE ou ALTER COLUMN, et n'en applique jamais lui-même.",
          "La base de prod se restaure à un instant précis (PITR).",
          "La règle est dans le script, pas dans le prompt : un agent peut ignorer une consigne, pas un script qui refuse.",
        ],
      },
      {
        title: "Zapz Forge : un atelier d'agents pour jeux Roblox",
        items: [
          "Claude Code, Codex, OpenCode et Gemini CLI travaillent sur un même jeu, reliés à Roblox Studio et Blender par MCP.",
          "La doc Roblox est indexée en local, et une banque d'assets se consulte par recherche sémantique.",
          "J'ai écrit **24 skills** pour les agents : code roblox-ts, game design, équilibrage, UI, playtest, performance, mise en ligne.",
          "Un skill « barre de qualité » oblige l'agent à se noter sur 10 face à de vrais jeux avant de me montrer son travail.",
          "Sauvegarde automatique : un commit toutes les 5 minutes, plus des archives. Le code n'est pas public.",
        ],
      },
      {
        title: "Automatisations sur VPS",
        items: [
          "**25** tâches planifiées, dont une usine à vidéos courtes qui produit et programme des posts sur YouTube, Instagram et TikTok.",
          "Une boucle SEO met en ligne une amélioration mesurée par jour. D'autres tâches répondent aux commentaires.",
          "Une garde de prod vérifie GaijinToSensei toutes les **10 minutes** et m'alerte sur Telegram.",
        ],
      },
      {
        title: "steam-roblox-agents : un système multi-agents évalué",
        items: [
          "Un graphe LangGraph qui dit si un jeu Steam en tendance mérite une adaptation Roblox.",
          "Le critique renvoie à l'analyste une note qui ne tient pas, **2 fois** au plus.",
          "Le score final vient du code, pas du modèle. Chaque source (URL, outil, heure) est journalisée.",
          "Sur **21 cas** passés, verdict exact : **61,9 %** avec Claude Sonnet 5.5, **42,9 %** avec GPT-6 Sol, contre **33,3 %** pour une règle naïve (pic de joueurs Steam seul).",
          "Les réponses des modèles sont enregistrées et rejouées en CI, sans appel payant. Ces 21 cas ont aussi servi à régler la grille : le chiffre reste indicatif.",
        ],
      },
    ],
    result: [
      "L'app tourne en prod avec de vrais utilisateurs, et la majorité de son code vient d'agents.",
      "Une migration destructive s'arrête au script, avant la prod.",
    ],
    learned: [
      "Signer chaque commit d'agent me dit précisément ce que j'ai écrit et ce que j'ai fait écrire.",
      "Sans jeu de cas, je ne sais pas si un agent progresse ou change seulement d'avis.",
      "Lancer un agent est rapide. Vérifier ce qu'il a fait prend plus longtemps.",
    ],
  },
  en: {
    title: "AI agents: letting them ship without handing them production",
    seoTitle: "AI agents: Claude Code on GaijinToSensei, Zapz Forge, automations and a LangGraph multi-agent system",
    description:
      "How I work with AI agents: 3 Claude Code agents in parallel on GaijinToSensei (479 of 724 commits) with guardrails in code, Zapz Forge (4 coding agents connected to Roblox Studio and Blender through MCP), 25 scheduled jobs on a VPS, and steam-roblox-agents evaluated on 21 cases.",
    lead: "Claude Code agents write most of the code of my app. I decide what they are allowed to do and I check what they ship.",
    stack: ["Claude Code", "Codex", "OpenCode", "Gemini CLI", "MCP", "LangGraph", "Python", "Pydantic", "Playwright", "Hermes Agent"],
    context: [
      "On GaijinToSensei, **479 of the 724** commits carry a Claude Code agent's `Co-Authored-By` line.",
      "On my VPS, Hermes Agent (open source) starts sub-agents and runs **25** scheduled jobs. I **configured it, I did not write it**. When it gets something wrong, I fix the instruction (skill) behind it.",
    ],
    problem: [
      "An agent is fast and never doubts itself. It can break production as fast as it ships a feature.",
      "I need limits it cannot get around, and a way to measure what it produces.",
    ],
    done: [
      {
        title: "Three agents in parallel on GaijinToSensei",
        items: [
          "Each agent has its own branch (`w1`, `w2`, `w3`). Locks prevent conflicts.",
          "Playwright tests run on every branch before the merge. Merges ship together, in a single deployment.",
        ],
      },
      {
        title: "Guardrails in code",
        items: [
          "Every version first goes to a preview with no traffic and passes HTTP checks. If a check fails after release, the script rolls back to the previous version on its own.",
          "Agents have no destructive rights on production. The script rejects any migration with DROP, RENAME, TRUNCATE or ALTER COLUMN, and never applies one itself.",
          "The production database can be restored to a point in time (PITR).",
          "The rule lives in the script, not in the prompt: an agent can ignore an instruction, not a script that says no.",
        ],
      },
      {
        title: "Zapz Forge: an agent workshop for Roblox games",
        items: [
          "Claude Code, Codex, OpenCode and Gemini CLI work on the same game, connected to Roblox Studio and Blender through MCP.",
          "The Roblox docs are indexed locally, and an asset bank is searched by semantic search.",
          "I wrote **24 skills** for the agents: roblox-ts code, game design, balancing, UI, playtesting, performance, release.",
          "A \"quality bar\" skill makes the agent score itself out of 10 against real games before it shows me its work.",
          "Automatic backup: a commit every 5 minutes, plus archives. The code is not public.",
        ],
      },
      {
        title: "Automations on a VPS",
        items: [
          "**25** scheduled jobs, including a short video factory that produces and schedules posts on YouTube, Instagram and TikTok.",
          "An SEO loop ships one measured improvement a day. Other jobs reply to comments.",
          "A production guard checks GaijinToSensei every **10 minutes** and alerts me on Telegram.",
        ],
      },
      {
        title: "steam-roblox-agents: an evaluated multi-agent system",
        items: [
          "A LangGraph graph that decides whether a trending Steam game is worth a Roblox adaptation.",
          "The critic sends a score that does not hold up back to the analyst, **twice** at most.",
          "Code computes the final score, not the model. Every source (URL, tool, time) is logged.",
          "On **21 past cases**, exact verdict: **61.9%** with Claude Sonnet 5.5, **42.9%** with GPT-6 Sol, against **33.3%** for a naive rule (Steam player peak alone).",
          "Model responses are recorded and replayed in CI, with no paid calls. The same 21 cases were also used to tune the grid, so the figure is only indicative.",
        ],
      },
    ],
    result: [
      "The app is in production with real users, and most of its code comes from agents.",
      "A destructive migration stops at the script, before production.",
    ],
    learned: [
      "Signing every agent commit tells me exactly what I wrote and what I had written for me.",
      "Without test cases, I cannot tell whether an agent got better or just changed its mind.",
      "Starting an agent is quick. Checking what it did takes longer.",
    ],
  },
};

if (SRA_PUBLIC) {
  AGENTS.fr.link = { href: SRA_REPO, label: "Code de steam-roblox-agents sur GitHub" };
  AGENTS.en.link = { href: SRA_REPO, label: "steam-roblox-agents code on GitHub" };
}
