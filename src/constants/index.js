// constants/index.js
// Données des projets
export const PROJECTS_DATA = [
  {
    id: "antidebug",
    title: "AntiDebug",
    description: "Outil open source pour tester les techniques d'anti-debug Windows x86_64. Interface terminal, détections multiples, C++17.",
    image: "antidebug.webp",
    tags: ["C++", "Windows", "Reverse", "Anti-Debug"],
    githubLink: "https://github.com/haxo-games/AntiDebug",
    liveLink: "",
    type: "contribution"
  },
  {
    id: "webserv",
    title: "Webserv",
    description: "Serveur HTTP en C++98 compatible nginx avec support CGI, gestion des requêtes GET/POST/DELETE.",
    image: "webserv_42.webp",
    tags: ["C++", "HTTP", "Server", "CGI"],
    githubLink: "",
    liveLink: "",
    type: "42"
  },
  {
    id: "philosophers",
    title: "Philosophers",
    description: "Simulation du problème des philosophes dînant, démontrant la synchronisation des threads.",
    image: "philosophers42.webp",
    tags: ["C", "Threads", "Mutex"],
    githubLink: "",
    liveLink: "",
    type: "42"
  },
  {
    id: "libft",
    title: "Libft",
    description: "Bibliothèque de fonctions C personnalisée recréant les fonctions standard de la libc.",
    image: "libft42.webp",
    tags: ["C", "Library"],
    githubLink: "",
    liveLink: "",
    type: "42"
  },
  {
    id: "cube3d",
    title: "Cube3D",
    description: "Moteur de rendu 3D minimaliste inspiré de Wolfenstein 3D avec raycasting.",
    image: "cub3d.webp",
    tags: ["C", "Raycasting", "Graphics"],
    githubLink: "",
    liveLink: "",
    type: "42"
  },
  {
    id: "minishell",
    title: "Minishell",
    description: "Implémentation d'un shell minimaliste inspiré de bash.",
    image: "minishell.webp",
    tags: ["C", "Shell", "Parsing"],
    githubLink: "",
    liveLink: "",
    type: "42"
  },
  {
    id: "so_long",
    title: "So_long",
    description: "Petit jeu 2D avec la MiniLibX.",
    image: "so_long.webp",
    tags: ["C", "Game", "2D"],
    githubLink: "",
    liveLink: "",
    type: "42"
  }
    ,
    {
      id: "la_voie_de_la_pierre",
      title: "La Voie de la Pierre",
      description: "Application interactive destinée aux profanes souhaitant découvrir la franc-maçonnerie et mieux comprendre les différentes obédiences existantes. Questionnaire personnalisé guidant l’utilisateur vers l’obédience correspondant à ses valeurs et attentes spirituelles.",
  description: "Application interactive destinée aux profanes souhaitant découvrir la franc-maçonnerie et mieux comprendre les différentes obédiences existantes. Questionnaire personnalisé guidant l’utilisateur vers l’obédience correspondant à ses valeurs et attentes spirituelles. Ce projet avait pour but et du sens selon moi d’enlever les idées conspirationnistes et d’informer les profanes tout en gardant et respectant le secret maçonnique.",
    image: "/lvdlp.webp",
      tags: ["TypeScript", "React", "Quizz", "Spiritualité"],
      githubLink: "https://github.com/ZapzCsgo/La-Voie-de-la-Pierre",
      liveLink: "https://la-voie-de-la-pierre.vercel.app/",
      type: "side_projects"
    }
];

export const FILE_PROJECT_MAPPING = {
  '42/common_core/webserv.cpp': 'webserv',
  '42/common_core/philosophers.c': 'philosophers',
  '42/common_core/libft.c': 'libft',
  '42/common_core/cube3d.c': 'cube3d',
  '42/common_core/minishell.c': 'minishell',
  '42/common_core/so_long.c': 'so_long',
  'contributions/antidebug.cpp': 'antidebug'
};
