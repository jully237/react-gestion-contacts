# 📇 Contact Manager — React

> Mini application React de gestion de contacts avec consommation d’API externe et gestion d’état locale.

Ce projet a été réalisé dans un cadre pédagogique afin de consolider les bases essentielles de React (hooks, composants, formulaires, appels API, gestion d’état, etc.).

---

## 🎯 Objectifs pédagogiques

L’application permet de démontrer la maîtrise des notions suivantes :

- Utilisation des hooks React : `useState`, `useEffect`
- Appels API avec `fetch`
- Gestion des états : loading, error, données
- Formulaires contrôlés
- Rendu conditionnel
- Architecture propre par composants
- Manipulation d’une liste dynamique (ajout / suppression)

---

## ✨ Fonctionnalités

- 🔄 Chargement des contacts depuis une API externe  
- 📃 Affichage dynamique de la liste des contacts  
- ➕ Ajout d’un contact via formulaire (gestion locale)  
- ❌ Suppression d’un contact  
- ⏳ Affichage d’un message pendant le chargement  
- ⚠️ Gestion des erreurs  
- 📭 Message affiché lorsqu’aucun contact n’est disponible  
- 🔢 Affichage du nombre total de contacts  

---

## 🧱 Architecture du projet

src/
├── components/
│ ├── ContactForm.jsx
│ ├── ContactList.jsx
│ └── ContactItem.jsx
│
├── services/
│ └── contactApi.js
│
└── App.jsx

Cette structure respecte les bonnes pratiques de séparation des responsabilités :
- Les composants gèrent l’interface
- Le dossier `services` gère les appels API
- `App.jsx` centralise la logique globale

---

## 🌐 API utilisée

API publique fournie par JSONPlaceholder :  
https://jsonplaceholder.typicode.com/users

Champs exploités :
- id  
- name  
- email  
- phone  

---

## 🚀 Installation et exécution du projet

### 1. Cloner le dépôt
```bash
git clone https://github.com/jully237/react-gestion-contacts.git


2. Accéder au dossier du projet
cd react-gestion-contacts

3. Installer les dépendances
npm install

4. Lancer le projet
npm run dev


Puis ouvrir dans le navigateur :
http://localhost:5173

🛠️ Technologies utilisées

React (Vite)

JavaScript ES6+

HTML5 / CSS3

Git & GitHub

API REST (fetch)

👩‍💻 Auteure

Jully Matchum Fonkam
Étudiante en Bachelor Computer Science
Passionnée par le développement et la gestion des données

GitHub : https://github.com/jully237
