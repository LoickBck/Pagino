export const navigationLinks = [
  {
    href: "/library",
    label: "Bibliothèque",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "Mon Profil",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Accueil",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "Tous les utilisateurs",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "Tous les livres",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/borrow-records",
    text: "Historique des emprunts",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Demandes de comptes",
  },
];

export const FIELD_NAMES = {
  fullname: "Nom complet",
  email: "E-mail",
  universityId: "Numéro d'identité universitaire",
  password: "Mot de passe",
  universityCard: "Télécharger la carte d'étudiant",
};

export const FIELD_TYPES = {
  fullname: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "La Bibliothèque de Minuit",
    author: "Matt Haig",
    genre: "Fantastique / Fiction",
    rating: 4.6,
    totalCopies: 20,
    availableCopies: 10,
    description:
      "Un roman éblouissant sur tous les choix qui façonnent une vie bien vécue, racontant l'histoire de Nora Seed entre la vie et la mort.",
    color: "#192152",
    cover: "https://m.media-amazon.com/images/I/81wsOMg9FYL._SL1500_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Un roman éblouissant sur tous les choix qui façonnent une vie bien vécue, racontant l'histoire de Nora Seed entre la vie et la mort.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Développement personnel / Productivité",
    rating: 4.9,
    totalCopies: 99,
    availableCopies: 50,
    description:
      "Un guide révolutionnaire pour adopter de bonnes habitudes, briser les mauvaises et s'améliorer de 1 % chaque jour.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Un guide révolutionnaire pour adopter de bonnes habitudes, briser les mauvaises et s'améliorer de 1 % chaque jour.",
  },
  {
    id: 3,
    title: "Vous Ne Connaissez Pas JS : Scope & Closures",
    author: "Kyle Simpson",
    genre: "Informatique / JavaScript",
    rating: 4.7,
    totalCopies: 9,
    availableCopies: 5,
    description:
      "Un guide essentiel pour comprendre les mécanismes de base de JavaScript, axé sur le scope et les closures.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Un guide essentiel pour comprendre les mécanismes de base de JavaScript, axé sur le scope et les closures.",
  },
  {
    id: 4,
    title: "L'Alchimiste",
    author: "Paulo Coelho",
    genre: "Philosophie / Aventure",
    rating: 4.5,
    totalCopies: 78,
    availableCopies: 50,
    description:
      "Un conte magique de Santiago, un jeune berger andalou, qui part en quête d'un trésor terrestre.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Un conte magique de Santiago, un jeune berger andalou, qui part en quête d'un trésor terrestre.",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Développement personnel / Productivité",
    rating: 4.7,
    totalCopies: 23,
    availableCopies: 23,
    description:
      "Des règles pour réussir dans un monde distrait, en apprenant à cultiver une concentration profonde pour atteindre une productivité maximale.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Des règles pour réussir dans un monde distrait, en apprenant à cultiver une concentration profonde pour atteindre une productivité maximale.",
  },
  {
    id: 6,
    title: "Code Propre",
    author: "Robert C. Martin",
    genre: "Informatique / Programmation",
    rating: 4.8,
    totalCopies: 56,
    availableCopies: 56,
    description:
      "Un manuel d'artisanat logiciel agile, offrant les meilleures pratiques et principes pour écrire un code propre et maintenable.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Un manuel d'artisanat logiciel agile, offrant les meilleures pratiques et principes pour écrire un code propre et maintenable.",
  },
  {
    id: 7,
    title: "Le Programmeur Pratique",
    author: "Andrew Hunt, David Thomas",
    genre: "Informatique / Programmation",
    rating: 4.8,
    totalCopies: 25,
    availableCopies: 3,
    description:
      "Un guide intemporel pour les développeurs afin d'améliorer leurs compétences et leurs pratiques de programmation.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Un guide intemporel pour les développeurs afin d'améliorer leurs compétences et leurs pratiques de programmation.",
  },
  {
    id: 8,
    title: "La Psychologie de l'Argent",
    author: "Morgan Housel",
    genre: "Finance / Développement personnel",
    rating: 4.8,
    totalCopies: 10,
    availableCopies: 5,
    description:
      "Morgan Housel explore les comportements uniques et les mentalités qui façonnent la réussite financière et la prise de décision.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Morgan Housel explore les comportements uniques et les mentalités qui façonnent la réussite financière et la prise de décision.",
  },
];

export const sorts = [
  {
    value: "oldest",
    label: "Plus ancien",
  },
  {
    value: "newest",
    label: "Plus récent",
  },
  {
    value: "available",
    label: "Disponible",
  },
  {
    value: "highestRated",
    label: "Mieux noté",
  },
];

export const userRoles = [
  {
    value: "user",
    label: "Utilisateur",
    bgColor: "bg-[#FDF2FA]",
    textColor: "text-[#C11574]",
  },
  {
    value: "admin",
    label: "Admin",
    bgColor: "bg-[#ECFDF3]",
    textColor: "text-[#027A48]",
  },
];

export const borrowStatuses = [
  {
    value: "overdue",
    label: "En retard",
    bgColor: "bg-[#FFF1F3]",
    textColor: "text-[#C01048]",
  },
  {
    value: "borrowed",
    label: "Emprunté",
    bgColor: "bg-[#F9F5FF]",
    textColor: "text-[#6941C6]",
  },
  {
    value: "returned",
    label: "Rendu",
    bgColor: "bg-[#F0F9FF]",
    textColor: "text-[#026AA2]",
  },
];
