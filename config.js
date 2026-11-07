// ============================================================
//  RÉGLAGES DE LA BOUTIQUE — c'est le seul fichier à modifier
//  pour changer les textes, le prix, les tailles et les photos.
//  ⚠️ Le prix, les tailles et la date de fin sont AUSSI dans
//  apps-script/Code.gs (c'est lui qui fait payer) : garde les deux pareils.
// ============================================================
window.BOUTIQUE = {
  marque: 'Versatyl',
  produit: 'T-shirt Soirée 2026',
  prix: 25,                       // en euros
  tailles: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  maxParTaille: 10,               // quantité max par taille et par commande
  finPrecommande: '2026-11-30T23:59:00+01:00',

  accroche: 'Édition limitée, produite uniquement à partir des précommandes.',
  description:
    "Texte de présentation à remplacer : l'histoire du design, pourquoi ce t-shirt, " +
    "ce qui le rend unique. Deux ou trois phrases suffisent.",
  details: [
    ['Matière', '100 % coton bio, 180 g/m² (à confirmer)'],
    ['Coupe', 'Oversize unisexe (à confirmer)'],
    ['Impression', 'Sérigraphie devant et dos (à confirmer)'],
    ['Entretien', 'Lavage 30 °C à l’envers, pas de sèche-linge'],
  ],
  retrait:
    'À récupérer à la soirée du samedi 13 décembre 2026 (à confirmer), ' +
    'sur présentation du QR code reçu par e-mail.',

  // Guide des tailles (mesures à plat, en cm) — valeurs d'exemple
  guideTailles: {
    entetes: ['Taille', 'Largeur', 'Longueur'],
    lignes: [['XS', 49, 68], ['S', 52, 70], ['M', 55, 72], ['L', 58, 74], ['XL', 61, 76], ['XXL', 64, 78]],
  },

  // Visuels du t-shirt (galerie du produit). Quand tu auras de vraies photos
  // du t-shirt, dépose-les dans photos/ et remplace ces maquettes.
  photos: [
    { src: 'img/tshirt-dos.jpg', alt: 'Dos du t-shirt noir : la créature Versatyl violette et rose, logo dessous' },
    { src: 'img/tshirt-devant.jpg', alt: 'Devant du t-shirt noir : logo Versatyl lilas sur la poitrine' },
    { src: 'img/visuel-dos.jpg', alt: 'Le visuel du dos en grand' },
  ],

  instagram: 'https://www.instagram.com/',   // ton compte
  contact: 'versatyl.marseille@gmail.com',            // e-mail pour les questions

  // Page « Mentions légales, CGV, confidentialité » (mentions-legales.html).
  // Remplis chaque ligne : tant qu'une ligne est vide, la page affiche « à compléter ».
  legal: {
    vendeur: 'Versatyl Marseille',
    statut: 'Association loi 1901',
    adresse: '69 chemin de la Tuilerie, 84470 Châteauneuf-de-Gadagne',
    immatriculation: 'SIRET 108 160 078 00011',
    responsable: 'Félix Bastide',
    tva: '',              // facultatif, ex. 'TVA non applicable, art. 293 B du CGI'
    mediateur: '',        // facultatif : médiateur de la consommation (nom + site web)
  },

  // URL du script Google (étape 5 du GUIDE.md).
  // Vide = MODE DÉMO : aucun paiement, tout est simulé dans le navigateur.
  API_URL: 'https://script.google.com/macros/s/AKfycbzC9dnTjbnynKS3WzvD9kiD0ZJV_tp02dYAcnR4Ku-pr13OHnbjSUBosWp3Y1Bk4RNi4w/exec',
};
