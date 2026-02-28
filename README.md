# Site Web - Master M&A et Ingénierie Financière 🎓

Ce projet est le site vitrine officiel du **Master 2 Fusion-Acquisition et Ingénierie Financière de l'Université Paris-Saclay**. Il centralise les informations pédagogiques, l'actualité de l'association étudiante et l'écosystème professionnel du Master.

## 🌐 Accès au site
Le site est déployé et consultable à l'adresse suivante :  
👉 [http://master-fusac.alwaysdata.net/](http://master-fusac.alwaysdata.net/)

## 🚀 Fonctionnalités principales

* **Navigation Intelligente** : Menu mobile optimisé avec système d'accordéon (fermeture automatique des sections inutilisées).
* **Expérience Utilisateur (UX)** : Menu scrollable sur smartphone pour accéder facilement aux 11+ sous-sections du Master.
* **Contenu Dynamique** : 
    * Carrousel d'images auto-play.
    * Listes d'Alumnis (Promos 2021 à 2024) avec affichage toggle.
    * Accordéons pour le détail des enseignements.
* **Design Responsive** : Mise en page adaptative via Flexbox et CSS Grid, avec une attention particulière sur la lisibilité des sections "Green Sanctuaries" et "The Bench".
* **Animations** : Apparition progressive des éléments au scroll via l'API *Intersection Observer*.

## 🛠️ Stack Technique

* **Frontend** : HTML5, CSS3 (Variables, Flexbox, Grid).
* **Interactivité** : JavaScript natif (Vanilla JS) - aucun framework lourd utilisé pour garantir une performance maximale.
* **Icônes** : FontAwesome 6+.
* **Hébergement** : Alwaysdata.

## 📂 Structure du Projet

```text
├── index.html          # Structure principale du site
├── css/
│   └── style.css       # Design global et Media Queries (Mobile First)
├── js/
│   └── script.js       # Logique du menu, carrousel et accordéons
├── images/             # Logos, photos de l'équipe et assets visuels
└── README.md           # Documentation technique