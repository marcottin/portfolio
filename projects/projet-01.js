ajouterProjet({
  titre: "Accouplement magnétique",
  date: "2025-07",
  contexte: "Projet académique",
  image: "images/Accouplement/photo_assemblee.jpg",
  tags: ["CAO", "Simulation magnétique", "Acquisition de données", "C/C++ (Arduino)", "Python", "Impression 3D"],
  description: [
    "Un accouplement magnétique transmet un couple d'un arbre à un autre sans aucun contact mécanique : des aimants, positionnés sur chaque arbre, interagissent pour transmettre l'effort. Ce projet couvrait toute la démarche, du dimensionnement d'un tel système jusqu'à sa validation expérimentale.",
    { image: "images/Accouplement/photo_desassemblee.jpg", legende: "Accouplement magnétique partiellement démonté.", taille: 70 },
    "Le travail a débuté par une étude bibliographique des configurations et architectures existantes, suivie de la modélisation 3D du système. J'ai ensuite étudié le comportement magnétique de l'accouplement par simulation et par une étude théorique.",
    "Un prototype a été fabriqué, en partie par impression 3D. Différents capteurs, reliés à une carte Arduino et exploités sous Python, ont permis d'acquérir les données et de les confronter aux résultats théoriques.",
    { image: "images/Accouplement/acquisition.jpg", legende: "Banc d'acquisition de données.", taille: 70 }
  ]
});