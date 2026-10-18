ajouterProjet({
  titre: "Traqueur de production solaire",
  date: "2026-08",
  contexte: "Projet personnel",
  image: "images/Traqueur/affichage_energie.gif",
  tags: ["C/C++ (ESP32)", "CAO", "Impression 3D", "API", "Électronique", "IHM"],
  description: [
    "Ce boîtier permet de suivre la production solaire de la maison et de savoir, d'un coup d'œil, quels appareils essentiels (voiture électrique, lave-linge, etc.) peuvent être utilisés avec l'énergie disponible.",
    { image: "images/Traqueur/affichage_energie.gif", legende: "Affichage de l'énergie disponible pour la voiture électrique.", taille: 70 },
    "L'appareil propose deux modes. Le premier affiche l'énergie disponible, appareil par appareil. Le second gère les notifications par utilisateur : sur demande, il prévient la bonne personne quand brancher et débrancher un appareil. Chaque utilisateur est associé à une couleur.",
    { image: "images/Traqueur/activation_notification.gif", legende: "Mise en marche des notifications de \"l'utilisateur bleu\" pour la machine à laver.", taille: 70 },
    "Le boîtier alerte aussi l'administrateur lorsque le disjoncteur des panneaux s'enclenche, lorsque le programme subit des erreurs récurrentes, ou lorsqu'il serait plus rentable d'attendre les heures creuses plutôt que de consommer sur le réseau.",
    { image: "images/Traqueur/notification.png", legende: "Exemple d'une notification reçue.", taille: 70 },
    "Le programme dépasse 1500 lignes de C++. Il fait communiquer l'ESP32 avec plusieurs services : les serveurs d'Enphase Energy (pour obtenir un jeton d'authentification), la passerelle solaire locale de l'installation (pour obtenir les données énergétiques), l'API des tarifs Tempo, l'API de messagerie WhatsApp et un serveur NTP (Network Time Protocol).",
    "Pour limiter sa consommation, l'ESP32 passe en veille profonde entre chaque requête et pendant la nuit. Il se réveille à intervalle régulier ou par appui sur un bouton.",
    "Sa consommation moyenne reste ainsi inférieure à 2 mW.",
    "Le boîtier a été conçu en CAO puis imprimé en 3D.",
    { image: "images/Traqueur/boitier.jpg", legende: "Photo du boîtier.", taille: 80 }
  ]
});