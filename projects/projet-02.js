ajouterProjet({
  titre: "Jeu du Sudoku",
  date: "2025-12",
  contexte: "Projet personnel",
  image: "images/Sudoku/partie.png",
  tags: ["Python", "Jeu", "Interface graphique"],
  description: [
    "Je voulais apprendre à créer une interface graphique en Python. J'ai choisi un projet que je pouvais tester et améliorer facilement : un jeu de sudoku.",
    "Le programme génère lui-même ses grilles et vérifie que chacune n'admet qu'une seule solution. Le joueur saisit ses chiffres directement dans la grille. À tout moment, il peut demander un indice ou faire contrôler ce qu'il a déjà rempli.",
    "Plusieurs niveaux de difficulté sont proposés. Ils règlent le nombre de cases déjà remplies au départ : plus la grille est vide, plus elle est difficile.",
    { image: "images/Sudoku/choix-difficulte.png", legende: "Choix du niveau de difficulté.", taille: 70 },
    "",
    "Le fonctionnement est simple : une grille complète est d'abord générée en remplissant les cases une à une. Le programme tient à jour, pour chaque case vide, la liste des chiffres encore autorisés selon sa ligne, sa colonne et son bloc de 3×3. Il traite en priorité la case la plus contrainte (celle qui a le moins de choix possibles) et y place un chiffre tiré au hasard. Cette stratégie évite de se retrouver rapidement dans une impasse.",
    "On retire ensuite des chiffres pour créer le puzzle. Après chaque suppression, un solveur compte les solutions de la grille obtenue. Il utilise la même logique que la génération et s'arrête dès qu'il en trouve deux, ce qui suffit à savoir si la solution est unique."
  ]
});