export const navigationLinks = [
  {
    href: "/bibliotheque",
    label: "Bibliothèque",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/mon-profil",
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
    route: "/admin/utilisateurs",
    text: "Tous les utilisateurs",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/livres",
    text: "Tous les livres",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/emprunts",
    text: "Historique des emprunts",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/compte",
    text: "Demandes de comptes",
  },
];

export const FIELD_NAMES = {
  fullName: "Nom complet",
  email: "E-mail",
  universityId: "Numéro d'identité universitaire",
  password: "Mot de passe",
  universityCard: "Télécharger la carte d'étudiant",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

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
