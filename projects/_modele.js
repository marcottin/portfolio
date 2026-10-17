/*
  MODÈLE DE PROJET
  ────────────────
  1. Duplique ce fichier et nomme-le projet-NN.js avec le numéro suivant
     (projet-06.js, projet-07.js...). Les numéros se suivent sans trou :
     le site s'arrête au premier fichier manquant.
  2. Remplis les champs ci-dessous.
  3. Dépose l'image de couverture (png ou gif) dans le dossier images/.

  L'ordre sur la frise est calculé à partir de "date", pas du numéro de fichier.
*/

ajouterProjet({
  titre: "Titre du projet",

  date: "2026-01",          // AAAA, AAAA-MM ou AAAA-MM-JJ
  fin: "2026-03",           // facultatif : affiche « janvier 2026 – mars 2026 » dans l'aperçu
  contexte: "Stage, école, projet perso...",   // facultatif

  image: "images/mon-image.png",

  tags: ["Tag 1", "Tag 2", "Tag 3"],    // visibles uniquement dans l'aperçu détaillé

  description: [            // un élément de la liste = un paragraphe
    "Premier paragraphe : le problème et le contexte.",
    "Deuxième paragraphe : ce que tu as fait, les outils, les choix.",
    "Troisième paragraphe : le résultat."
  ]
});
