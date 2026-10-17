ajouterProjet({
  titre: "Jeu de Puissance 4",
  date: "2026-03",
  contexte: "Projet personnel",
  image: "images/Puissance_4/partie.gif",
  tags: ["Python", "Jeu", "IA", "Interface graphique"],
  description: [
    "Je voulais comprendre comment une IA de jeu choisit son prochain coup. Plutôt que de m'en tenir à la théorie, j'en ai construit une : un Puissance 4 complet, jouable à la souris, face à un adversaire rapide et difficile à battre.",
    "L'IA repose sur un algorithme minimax. À chaque tour, elle simule ses coups possibles, les réponses de l'adversaire, puis ses propres réponses, jusqu'à une profondeur limitée, et retient le meilleur coup.",
    "Un élagage alpha-bêta écarte les branches qui ne peuvent plus changer la décision. L'IA explore ainsi plus loin dans le même temps, d'où sa rapidité.",
    "Plusieurs modes de jeu sont disponibles. Ils rendent l'IA moins performante en réduisant sa profondeur de calcul et en simplifiant sa fonction d'évaluation heuristique. Les modes les plus faciles affichent même les alignements dangereux, comme ci-dessous.",
    { image: "images/Puissance_4/3_alignes.png", legende: "Partie en cours : le joueur affronte l'IA.", taille: 70 }
  ]
});