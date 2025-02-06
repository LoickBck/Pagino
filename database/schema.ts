import {
  varchar, // Type pour les chaînes de caractères avec longueur fixe ou variable
  uuid, // Type pour les identifiants uniques (UUID)
  integer, // Type pour les nombres entiers
  text, // Type pour les textes (longues chaînes de caractères)
  pgTable, // Fonction pour définir une table PostgreSQL
  date, // Type pour les dates
  pgEnum, // Fonction pour définir un type énuméré PostgreSQL
  timestamp, // Type pour les timestamps (date et heure)
} from "drizzle-orm/pg-core";

// Définition d'un type énuméré "status" pour le statut des utilisateurs
export const STATUS_ENUM = pgEnum("status", [
  "PENDING", // En attente
  "APPROVED", // Approuvé
  "REJECTED", // Rejeté
]);

// Définition d'un type énuméré "role" pour le rôle des utilisateurs
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);

// Définition d'un type énuméré "borrow_status" pour le statut des emprunts
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", [
  "BORROWED", // Emprunté
  "RETURNED", // Rendu
]);

// Définition de la table "users" (utilisateurs)
export const users = pgTable("users", {
  // Identifiant unique de l'utilisateur (UUID)
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),

  // Nom complet de l'utilisateur (varchar avec une longueur maximale de 255 caractères)
  fullName: varchar("full_name", { length: 255 }).notNull(),

  // Adresse email de l'utilisateur (texte, doit être unique)
  email: text("email").notNull().unique(),

  // Identifiant universitaire (entier, unique)
  universityId: integer("university_id").notNull().unique(),

  // Mot de passe de l'utilisateur
  password: text("password").notNull(),

  // Carte d'étudiant de l'utilisateur (stockée sous forme de texte)
  universityCard: text("university_card").notNull(),

  // Statut de l'utilisateur utilisant le type énuméré STATUS_ENUM, valeur par défaut "PENDING"
  status: STATUS_ENUM("status").default("PENDING"),

  // Rôle de l'utilisateur utilisant le type énuméré ROLE_ENUM, valeur par défaut "USER"
  role: ROLE_ENUM("role").default("USER"),

  // Date de la dernière activité de l'utilisateur, valeur par défaut la date actuelle
  lastActivityDate: date("last_activity_date").defaultNow(),

  // Date de création de l'enregistrement, avec fuseau horaire, valeur par défaut la date et l'heure actuelles
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Définition de la table "books" (livres)
export const books = pgTable("books", {
  // Identifiant unique du livre (UUID)
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),

  // Titre du livre (varchar, longueur maximale 255)
  title: varchar("title", { length: 255 }).notNull(),

  // Auteur du livre (varchar, longueur maximale 255)
  author: varchar("author", { length: 255 }).notNull(),

  // Genre du livre (texte)
  genre: text("genre").notNull(),

  // Note du livre (nombre entier)
  rating: integer("rating").notNull(),

  // URL de la couverture du livre (texte)
  coverUrl: text("cover_url").notNull(),

  // Couleur de la couverture du livre (varchar de 7 caractères, typiquement pour un code hexadécimal)
  coverColor: varchar("cover_color", { length: 7 }).notNull(),

  // Description du livre (texte)
  description: text("description").notNull(),

  // Nombre total d'exemplaires, valeur par défaut 1
  totalCopies: integer("total_copies").notNull().default(1),

  // Nombre d'exemplaires disponibles, valeur par défaut 0
  availableCopies: integer("available_copies").notNull().default(0),

  // URL de la vidéo associée au livre (texte)
  videoUrl: text("video_url").notNull(),

  // Résumé du livre (varchar)
  summary: varchar("summary").notNull(),

  // Date de création de l'enregistrement du livre, avec fuseau horaire
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Définition de la table "borrow_records" (enregistrements d'emprunt)
export const borrowRecords = pgTable("borrow_records", {
  // Identifiant unique de l'enregistrement d'emprunt (UUID)
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),

  // Référence à l'identifiant de l'utilisateur qui emprunte (clé étrangère vers users.id)
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),

  // Référence à l'identifiant du livre emprunté (clé étrangère vers books.id)
  bookId: uuid("book_id")
    .references(() => books.id)
    .notNull(),

  // Date et heure de l'emprunt, valeur par défaut l'heure actuelle, avec fuseau horaire
  borrowDate: timestamp("borrow_date", { withTimezone: true })
    .defaultNow()
    .notNull(),

  // Date d'échéance de l'emprunt (date)
  dueDate: date("due_date").notNull(),

  // Date de retour du livre (peut être nulle si le livre n'est pas encore rendu)
  returnDate: date("return_date"),

  // Statut de l'emprunt utilisant le type énuméré BORROW_STATUS_ENUM, valeur par défaut "BORROWED"
  status: BORROW_STATUS_ENUM("status").default("BORROWED").notNull(),

  // Date de création de l'enregistrement d'emprunt, avec fuseau horaire, valeur par défaut la date actuelle
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
