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
    liveLink: "https://github.com/ZapzCsgo/Philosophers",
    type: "42"
  },
  {
    id: "libft",
    title: "Libft",
    description: "Bibliothèque de fonctions C personnalisée recréant les fonctions standard de la libc.",
    image: "libft42.webp",
    tags: ["C", "Library"],
    githubLink: "https://github.com/ZapzCsgo/Libft",
    liveLink: "https://github.com/ZapzCsgo/Libft",
    type: "42"
  },
  {
    id: "cube3d",
    title: "Cube3D",
    description: "Moteur de rendu 3D minimaliste inspiré de Wolfenstein 3D avec raycasting.",
    image: "cub3d.webp",
    tags: ["C", "Raycasting", "Graphics"],
    githubLink: "https://github.com/ZapzCsgo/Cube3D",
    liveLink: "https://github.com/ZapzCsgo/Cube3D",
    type: "42"
  },
  {
    id: "minishell",
    title: "Minishell",
    description: "Implémentation d'un shell minimaliste inspiré de bash.",
    image: "minishell.webp",
    tags: ["C", "Shell", "Parsing"],
    githubLink: "https://github.com/ZapzCsgo/Minishell",
    liveLink: "https://github.com/ZapzCsgo/Minishell",
    type: "42"
  },
  {
    id: "so_long",
    title: "So_long",
    description: "Petit jeu 2D avec la MiniLibX.",
    image: "so_long.webp",
    tags: ["C", "Game", "2D"],
    githubLink: "https://github.com/ZapzCsgo/So_long",
    liveLink: "https://github.com/ZapzCsgo/So_long",
    type: "42"
  },
  {
  id: "la_voie_de_la_pierre",
  title: "La voie de la pierre",
   description: "La Voie de la Pierre est une application web destinée aux profanes qui souhaitent découvrir la franc-maçonnerie et mieux comprendre les différentes obédiences existantes. Grâce à un questionnaire, l’utilisateur est guidé vers l’obédience qui correspond le mieux à ses valeurs, convictions et attentes spirituelles.",
   image: "voie_de_la_pierre.webp",
    tags: ["React", "Firebase", "Tailwind"],
    githubLink: "https://github.com/ZapzCsgo/La-Voie-de-la-Pierre",
   liveLink: "...",
     type: "side_project"
  }
];

export const FILE_PROJECT_MAPPING = {
  '42/common_core/philosophers.c': 'philosophers',
  '42/common_core/libft.c': 'libft',
  '42/common_core/cube3d.c': 'cube3d',
  '42/common_core/minishell.c': 'minishell',
  '42/common_core/so_long.c': 'so_long', // ⬅️ Virgule manquante ici
  'side_projects/voie_de_la_pierre.jsx': 'la_voie_de_la_pierre'
};

