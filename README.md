# Pagino

## Description générale

Pagino est une application web qui permet d'emprunter des livres auprès d'écoles, d'universités ou de bibliothèques publiques. L'utilisateur peut consulter la disponibilité des livres proposés par ces établissements. Pour se connecter, il faut disposer d'une carte étudiante ou d'une carte de bibliothèque délivrée par l'établissement.

## Fonctionnalités

- **Consultation de la disponibilité des livres**  
  Parcourez le catalogue des livres et vérifiez leur disponibilité en temps réel.
- **Emprunt de livres**  
  Empruntez des livres grâce à votre carte étudiante ou de bibliothèque.
- **Authentification sécurisée**  
  Accès sécurisé via Auth.js pour garantir une expérience utilisateur fiable.

## Technologies utilisées

- **Next.js 15** – Framework React pour le développement de l'application.
- **TypeScript** – Pour bénéficier d'un typage statique et améliorer la qualité du code.
- **Tailwind CSS** – Pour la mise en forme et le design de l'application.
- **ShadCN** – Pour les composants réutilisables et personnalisables.
- **Auth.js** – Pour la gestion de l'authentification.
- **Drizzle + Neon** – ORM pour la gestion de la base de données.
- **Upstash** – Pour la gestion du cache ou d'autres fonctionnalités liées à la base de données.
- **WebStorm** – IDE utilisé pour le développement.

## Installation

1. **Cloner le dépôt GitHub**
   ```bash
   git clone "url github"

2. **Configurer les variables d'environnement**

- Vérifiez que toutes les variables d'environnement nécessaires sont correctement définies (généralement dans un fichier .env).

3. **Installer les dépendances**

    ```bash
   npm install
3. **Installer les dépendances**

- Lancer l'application en mode développement

    ```bash
    npm run dev

4. **Tests**

- Le projet utilise TypeScript pour détecter et prévenir les erreurs lors du développement. Le typage statique permet de garantir une qualité de code élevée et de réduire les bugs durant la phase de développement.

5. **Déploiement**
- Le déploiement de Pagino est réalisé via Vercel, qui simplifie le processus de déploiement pour les applications Next.js.
