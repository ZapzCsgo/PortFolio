# Récupération de l'Entity List sur Counter-Strike 2

*Analyse dynamique pour la récupération de l'entity_list*

---

## Disclaimer

Je vais montrer comment j'ai récupéré l'entity_list sur Counter-Strike via une analyse dynamique.

Ce n'est pas un tutoriel, je montre simplement comment j'ai fait sans rentrer plus en détail et ça sera mon seul writeup sur CS2.

Si ça vous intéresse, vous avez des forums comme [UnknownCheats](https://unknowncheats.me) pour poser des questions ou des formations en gamehacking comme [https://haxo.games](https://haxo.games).

**⚠️ Vous devez uniquement travailler sur les jeux à des fins éducatives et en hors-ligne !**

---

## Étape 1 : Préparation de l'environnement

Bref, commençons.

Je désactive l'anti-cheat VAC, car nous ne sommes pas là pour contourner l'anti-cheat aujourd'hui.

![Désactivation anti-cheat](/turnOffAntiCheat.jpg)

## Étape 2 : Analyse dynamique avec Cheat Engine

Je me mets dans un environnement pour ne pas être dérangé, et commence à scanner la vie d'un bot (100 points de vie) sur Cheat Engine, un bon outil d'analyse dynamique.

Puis je lui tire dessus et sélectionne "Decreased Value" sur Cheat Engine, et je répète ceci de différentes manières jusqu'à avoir plus que quelques résultats.

![Résultats du scan](/end_scan.jpg)

## Étape 3 : Identification de la vraie adresse

Je regarde les résultats, et je vais changer la valeur des points de vie du bot : si la modification de valeur change d'autres adresses, c'est que c'est la bonne. Nous ne voulons pas de copie mais la vraie adresse.

Nous en avons maintenant deux, nous allons donc voir qui accède à cette adresse pour voir laquelle des deux nous intéresse réellement et "Show Disassembler".

On tombe directement sur un call `client.dll`, ce qui semble être bon pour nous car l'autre adresse est en réalité un call sur `server.dll`. Ce qui ne nous intéresse pas car nous n'y avons pas accès dans la pratique.

![Accès à l'adresse](/who_acces.jpg)

## Étape 4 : Analyse de la structure

Donc on peut déduire sur `[rbx + 0x00000344]` que :
- `rbx` c'est le début de l'entity_list
- `+ 0x00000344` l'offset de la vie du joueur

On va donc cliquer sur l'instruction et récupérer l'adresse de `rbx` (`0x346D706C0`).

## Étape 5 : Récupération de l'adresse statique

On va vouloir récupérer l'adresse statique, donc on va scanner l'adresse `rbx` et mettre en 8 bytes car c'est un jeu 64bits, et nous avons bien trouvé en vert l'adresse statique.

On va la stocker, et "Browse Memory Region".

Il s'agit donc de l'entity_list mais comme tu peux le voir on ne pointe pas vraiment au début alors montons un peu jusqu'à voir une zone vide de `00000`. Ce qui signifiera que l'on est bien au début de la liste.

On "Display as 4 bytes decimal" pour voir, et je vois qu'il y a `32` qui est probablement le nombre maximum de joueurs possible sur un serveur.

![Nombre maximum de joueurs](/max_player_server.jpg)


Nous avons donc notre entity_list, qui peut être très utile dans certains cas, comme mieux comprendre le jeu, ou meme le détourner.

---

*Writeup réalisé à des fins de pratique éducatives uniquement.*
