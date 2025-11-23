# Yossra Bouhlali - Portfolio Website 🎨✨

<div align="center">
  <img src="public/Yossra Portfolio and 3 more pages - Personal - Microsoft_ Edge 2025-11-23 19-18-06.gif" alt="Portfolio Demo" width="800">
</div>

Un portfolio moderne et élégant développé avec Next.js, TypeScript, et Tailwind CSS, mettant en valeur mes compétences en développement et mes projets en Systèmes Embarqués et Mobiles.

[![Netlify Status](https://api.netlify.com/api/v1/badges/692331f0fa052d60971921c20/deploy-status)](https://app.netlify.com/sites/yossra-portfolio/deploys)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🌐 Live Demo

**[Voir le Portfolio en Ligne →](https://yossra-portfolio.netlify.app)**

---

## 📸 Aperçu

![Portfolio Hero Section](public/preview-hero.png)
*Section d'accueil avec animation 3D*

![Portfolio Projects Section](public/preview-projects.png)
*Galerie de projets interactive*

---

## ✨ Fonctionnalités

### 🎨 Design & Interface
- ✅ Design moderne et épuré avec une palette de couleurs girly
- ✅ Interface utilisateur responsive (mobile, tablette, desktop)
- ✅ Animations fluides et transitions élégantes
- ✅ Navigation intuitive avec smooth scroll
- ✅ Effets de parallaxe et animations au scroll

### 🎭 Animations & Effets
- ✅ Scène 3D interactive avec React Three Fiber
- ✅ Formes géométriques flottantes animées
- ✅ Animations d'apparition au scroll (Framer Motion)
- ✅ Effets de hover sur les cartes et boutons
- ✅ Transitions de page fluides

### 📱 Responsive Design
- ✅ Optimisé pour tous les écrans (320px - 4K)
- ✅ Menu hamburger pour mobile
- ✅ Images optimisées et lazy loading
- ✅ Performance excellente (90+ Lighthouse score)

### 📧 Fonctionnalités Interactives
- ✅ Formulaire de contact fonctionnel avec EmailJS
- ✅ Validation des formulaires en temps réel
- ✅ Notifications toast pour les actions utilisateur
- ✅ Téléchargement de CV en un clic
- ✅ Liens vers réseaux sociaux (LinkedIn, GitHub, Email)

### 🎯 Sections
- ✅ **Hero** - Présentation avec animation 3D
- ✅ **À propos** - Biographie et photo de profil
- ✅ **Compétences** - Technologies maîtrisées avec niveaux
- ✅ **Expérience** - Parcours professionnel et formations
- ✅ **Projets** - Portfolio de projets avec détails
- ✅ **Contact** - Formulaire et informations de contact

---

## 🛠️ Technologies Utilisées

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - Framework React avec SSR/SSG
- **[React 18](https://react.dev/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Composants UI accessibles
- **[Radix UI](https://www.radix-ui.com/)** - Primitives UI headless
- **[class-variance-authority](https://cva.style/)** - Variants de composants

### Animations & 3D
- **[Framer Motion](https://www.framer.com/motion/)** - Animations déclaratives
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer pour Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Helpers pour R3F
- **[Three.js](https://threejs.org/)** - Bibliothèque 3D WebGL

### Formulaire & Email
- **[EmailJS](https://www.emailjs.com/)** - Service d'envoi d'emails
- **[React Hook Form](https://react-hook-form.com/)** - Gestion de formulaires

### Icônes & Assets
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[Next Font](https://nextjs.org/docs/app/api-reference/components/font)** - Optimisation des polices

### Dev Tools
- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[PostCSS](https://postcss.org/)** - Transformations CSS
- **[clsx](https://github.com/lukeed/clsx)** - Construction de classes CSS

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :

- **Node.js** ≥ 18.0.0 ([Télécharger](https://nodejs.org/))
- **npm** ≥ 9.0.0 ou **yarn** ≥ 1.22.0
- **Git** ([Télécharger](https://git-scm.com/))
- Un éditeur de code (VS Code recommandé)

---

## 🚀 Installation & Démarrage

### 1️⃣ Cloner le Repository

```bash
# HTTPS
git clone https://github.com/YOUR-USERNAME/yossra-portfolio.git

# SSH
git clone git@github.com:YOUR-USERNAME/yossra-portfolio.git

# Naviguer dans le dossier
cd yossra-portfolio
```

### 2️⃣ Installer les Dépendances

```bash
# Avec npm
npm install

# Ou avec yarn
yarn install

# Ou avec pnpm
pnpm install
```

### 3️⃣ Configuration d'EmailJS

Pour activer le formulaire de contact :

1. **Créer un compte sur [EmailJS](https://www.emailjs.com/)**

2. **Créer un service email** :
   - Dashboard → Email Services → Add New Service
   - Choisir votre provider (Gmail, Outlook, etc.)
   - Connecter votre compte

3. **Créer un template d'email** :
   - Dashboard → Email Templates → Create New Template
   - Utiliser ces variables :
     - `{{user_name}}` - Nom de l'expéditeur
     - `{{user_email}}` - Email de l'expéditeur
     - `{{subject}}` - Sujet du message
     - `{{message}}` - Contenu du message

4. **Récupérer vos identifiants** :
   - **Service ID** : `service_xxxxxxx`
   - **Template ID** : `template_xxxxxxx`
   - **Public Key** : `xxxxxxxxxxxxxxxx`

5. **Mettre à jour le fichier** `components/contact.tsx` :

```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Remplacer
  'YOUR_TEMPLATE_ID',     // Remplacer
  form,
  'YOUR_PUBLIC_KEY'       // Remplacer
)
```

### 4️⃣ Lancer le Serveur de Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur 🎉

---

## 📁 Structure du Projet

```
girly-portfolio-website/
│
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx               # Layout racine avec metadata
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux + Tailwind
│   └── favicon.ico              # Favicon
│
├── components/                   # Composants React
│   ├── ui/                      # Composants UI (shadcn)
│   │   ├── button.tsx           # Bouton personnalisable
│   │   ├── card.tsx             # Cartes de contenu
│   │   ├── input.tsx            # Champs de saisie
│   │   ├── textarea.tsx         # Zone de texte
│   │   ├── sheet.tsx            # Menu mobile/sidebar
│   │   ├── toast.tsx            # Notifications
│   │   └── toaster.tsx          # Container de notifications
│   │
│   ├── about.tsx                # Section À propos
│   ├── contact.tsx              # Section Contact + Formulaire EmailJS
│   ├── experience.tsx           # Section Expérience professionnelle
│   ├── hero.tsx                 # Section Hero/Accueil
│   ├── nav.tsx                  # Navigation responsive + CV download
│   ├── projects.tsx             # Section Portfolio de projets
│   ├── scene-3d.tsx             # Scène 3D avec Three.js
│   ├── skills.tsx               # Section Compétences techniques
│   └── theme-provider.tsx       # Provider thème sombre/clair
│
├── hooks/                        # Custom React Hooks
│   ├── use-mobile.ts            # Hook détection mobile/tablette
│   └── use-toast.ts             # Hook système de notifications
│
├── lib/                          # Utilitaires
│   └── utils.ts                 # Fonction cn() pour classes conditionnelles
│
├── public/                       # Assets statiques
│   ├── icon.jpg                 # Favicon personnalisé
│   ├── profile.jpg              # Photo de profil (optionnel)
│   └── projects/                # Images des projets (optionnel)
│       ├── project1.png
│       ├── project2.png
│       └── ...
│
├── .eslintrc.json               # Configuration ESLint
├── .gitignore                   # Fichiers ignorés par Git
├── components.json              # Configuration shadcn/ui
├── next.config.ts               # Configuration Next.js
├── netlify.toml                 # Configuration Netlify (déploiement)
├── package.json                 # Dépendances et scripts npm
├── package-lock.json            # Verrouillage des versions
├── postcss.config.mjs           # Configuration PostCSS
├── tailwind.config.ts           # Configuration Tailwind CSS
├── tsconfig.json                # Configuration TypeScript
└── README.md                    # Documentation (ce fichier)
```

### 📂 Description des Dossiers

#### `app/`
Le dossier principal de Next.js 14 (App Router) contenant :
- **layout.tsx** : Layout global, metadata SEO, providers
- **page.tsx** : Page d'accueil avec toutes les sections
- **globals.css** : Styles globaux, variables CSS, Tailwind

#### `components/`
Tous les composants React réutilisables :
- **ui/** : Composants de base (shadcn/ui)
- **Sections** : Hero, About, Skills, Experience, Projects, Contact
- **Navigation** : Nav avec menu responsive et téléchargement CV
- **3D** : Scene-3d avec animations Three.js

#### `hooks/`
Custom hooks React :
- **use-mobile** : Détecte si l'utilisateur est sur mobile
- **use-toast** : Gère les notifications toast

#### `lib/`
Fonctions utilitaires :
- **utils.ts** : Fonction `cn()` pour fusionner des classes CSS

#### `public/`
Assets statiques accessibles publiquement :
- Images, icônes, CV, etc.
- Accès direct via `/nom-fichier.ext`

---

## 📝 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement (localhost:3000)
npm run dev -- -p 3001   # Lance sur un port différent

# Production
npm run build        # Crée une version optimisée
npm start            # Lance le serveur de production

# Qualité du Code
npm run lint         # Vérifie les erreurs ESLint
npm run lint:fix     # Corrige automatiquement les erreurs
```

---

## 🚀 Déploiement

### Déploiement sur Netlify ⭐

Le site est déjà déployé sur Netlify : **[https://yossra-portfolio.netlify.app](https://yossra-portfolio.netlify.app)**

#### Redéployer après modifications :

1. **Commit et push vos changements** :
```bash
git add .
git commit -m "Description des changements"
git push origin main
```

2. **Netlify redéploie automatiquement** votre site ! 🎉

---

## 📧 Contact

Pour toute question, suggestion ou opportunité :

### Yossra Bouhlali

- 📧 **Email** : [yossrabouhlali@gmail.com](mailto:yossrabouhlali@gmail.com)

- 💼 **LinkedIn** : [linkedin.com/in/yossra-bouhlali](https://linkedin.com/in/yossra-bouhlali)
- 🐙 **GitHub** : [github.com/yossrabouhlali](https://github.com/yossrabouhlali)
- 🌐 **Portfolio** : [yossra-portfolio.netlify.app](https://yossra-portfolio.netlify.app)

---

## 📄 Licence

Ce projet est sous licence **MIT**.

---

<div align="center">

### Made with 💕 by Yossra Bouhlali

**Embedded Systems & Mobile Developer**

---

[![Portfolio](https://img.shields.io/badge/Portfolio-yossra--portfolio.netlify.app-EC4899?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yossra-portfolio.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yossra_Bouhlali-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yossra-bouhlali)
[![GitHub](https://img.shields.io/badge/GitHub-yossrabouhlali-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yossrabouhlali)
[![Email](https://img.shields.io/badge/Email-yossrabouhlali@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yossrabouhlali@gmail.com)

**© 2025 Yossra Bouhlali. All rights reserved.**

⭐ **If you like this project, please give it a star!** ⭐

<img src="public/Cat Girl GIF by Pluralsight.gif" alt="signature" width="300">

</div>