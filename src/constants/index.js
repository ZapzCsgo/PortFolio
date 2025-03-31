// constants/index.js

// Données des projets
export const PROJECTS_DATA = [
    {
      id: "philosophers",
      title: "Philosophers",
      description: "Simulation du problème des philosophes dînant, démontrant la synchronisation des threads.",
      image: "philosophers42.webp",
      tags: ["C", "Threads", "Mutex"],
      githubLink: "https://github.com/ZapzCsgo/Philosophers",
      liveLink: "https://github.com/ZapzCsgo/Philosophers"
    },
    {
      id: "libft",
      title: "Libft",
      description: "Bibliothèque de fonctions C personnalisée recréant les fonctions standard de la libc.",
      image: "libft42.webp",
      tags: ["C", "Library"],
      githubLink: "https://github.com/ZapzCsgo/Libft",
      liveLink: "https://github.com/ZapzCsgo/Libft"
    },
    {
      id: "cube3d",
      title: "Cube3D",
      description: "Moteur de rendu 3D minimaliste inspiré de Wolfenstein 3D avec raycasting.",
      image: "cub3d.webp",
      tags: ["C", "Raycasting", "Graphics"],
      githubLink: "https://github.com/ZapzCsgo/Cube3D",
      liveLink: "https://github.com/ZapzCsgo/Cube3D"
    },
    {
      id: "minishell",
      title: "Minishell",
      description: "Implémentation d'un shell minimaliste inspiré de bash.",
      image: "minishell.webp",
      tags: ["C", "Shell", "Parsing"],
      githubLink: "https://github.com/ZapzCsgo/Minishell",
      liveLink: "https://github.com/ZapzCsgo/Minishell"
    },
    {
      id: "so_long",
      title: "So_long",
      description: "Petit jeu 2D avec la MiniLibX.",
      image: "so_long.webp",
      tags: ["C", "Game", "2D"],
      githubLink: "https://github.com/ZapzCsgo/So_long",
      liveLink: "https://github.com/ZapzCsgo/So_long"
    }
  ];
  
  // Mapping des chemins de fichiers vers les IDs de projet
  export const FILE_PROJECT_MAPPING = {
    '42/common_core/philosophers.c': 'philosophers',
    '42/common_core/libft.c': 'libft',
    '42/common_core/cube3d.c': 'cube3d',
    '42/common_core/minishell.c': 'minishell',
    '42/common_core/so_long.c': 'so_long'
  };