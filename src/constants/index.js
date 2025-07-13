// constants/index.js
// Données des projets
export const PROJECTS_DATA = [
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
];

export const FILE_PROJECT_MAPPING = {
  '42/common_core/philosophers.c': 'philosophers',
  '42/common_core/libft.c': 'libft',
  '42/common_core/cube3d.c': 'cube3d',
  '42/common_core/minishell.c': 'minishell',
  '42/common_core/so_long.c': 'so_long'
};
