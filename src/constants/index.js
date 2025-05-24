// src/constants.js

export const HERO_CONTENT = "Software engineer en C et C++, enthusiast à l'idée de devenir reverse engineer. Je partage ici mes write-ups, mes projets et side projects. Très intéressé par le game hacking et les CTF, j'aimerais un jour mettre mes compétences au service d'une cause utile";

export const PROJECTS_DATA = [
  {
    id: "philosophers",
    title: "Philosophers",
    description: "Simulation du problème des philosophes dînant, démontrant la synchronisation des threads.",
    image: "philosophers42.webp",
    tags: ["C", "Threads", "Mutex"],
    githubLink: "https://github.com/ZapzCsgo/Philosophers42",
    liveLink: "https://github.com/ZapzCsgo/Philosophers42"
  },
  {
    id: "libft",
    title: "Libft",
    description: "Recréation de fonctions standard de la librairie C.",
    image: "libft42.webp",
    tags: ["C", "Library"],
    githubLink: "https://github.com/ZapzCsgo/libft",
    liveLink: "https://github.com/ZapzCsgo/libft"
  },
  {
    id: "cube3d",
    title: "Cube3D",
    description: "Moteur de raycasting 3D inspiré de Wolfenstein 3D.",
    image: "cub3d.webp",
    tags: ["C", "Graphics", "Raycasting"],
    githubLink: "https://github.com/ZapzCsgo/Cube3D",
    liveLink: "https://github.com/ZapzCsgo/Cube3D"
  },
  {
    id: "minishell",
    title: "Minishell",
    description: "Implémentation simplifiée d'un shell bash.",
    image: "minishell.webp",
    tags: ["C", "Shell", "Parsing"],
    githubLink: "https://github.com/ZapzCsgo/minishell",
    liveLink: "https://github.com/ZapzCsgo/minishell"
  },
  {
    id: "so_long",
    title: "So Long",
    description: "Petit jeu 2D utilisant la bibliothèque graphique MinilibX.",
    image: "so_long.webp",
    tags: ["C", "Game", "Graphics"],
    githubLink: "https://github.com/ZapzCsgo/so_long",
    liveLink: "https://github.com/ZapzCsgo/so_long"
  }
];

export const FILE_PROJECT_MAPPING = {
  "42/common_core/philosophers.c": "philosophers",
  "42/common_core/libft.c": "libft",
  "42/common_core/cube3d.c": "cube3d",
  "42/common_core/minishell.c": "minishell",
  "42/common_core/so_long.c": "so_long"
};