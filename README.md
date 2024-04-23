# Readme
## Projet XR2C2 - Steven Essam

# Langage de programmation
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


# Structure de dossier du projet XR2C2
        
    XR2C2_Project/
    │
    ├── data/
    │   ├── Json_Structure.json
    │   └── projects.json
    │
    ├── mediaFiles/
    │   ├── Images/
    │   └── Videos/
    │
    ├── public/
    │   ├── css/
    │   │   └── formStyle.css
    │   ├── form.html
    │   └── projects.html
    │
    └── server.js



# Préparation de l'environnement

## Installation
- Initialisez Node.js en exécutant la commande suivante :
    ``` 
    npm init -y
    ```
- Installez les packages nécessaires :
    ``` 
    npm install express body-parser
    ```

## Configuration du Serveur
- Démarrez le serveur en exécutant :
    ```
    node server.js
    ```
- Le serveur fonctionnera sur http://localhost:3000.

# Soumission du Formulaire ✅
- Accédez au formulaire à l'adresse http://localhost:3000/form.html.
- Le code HTML et JavaScript génère dynamiquement un formulaire basé sur une structure `JSON` fournie.
- Il crée des éléments de formulaire tels que des champs de saisie, des boutons radio et des boutons pour ajouter plus d'ensembles de champs en fonction des attributs spécifiés dans le JSON.
- Les attributs de type `Liste` permettent aux utilisateurs d'ajouter dynamiquement plusieurs ensembles de champs de saisie.
- Les attributs de type `Integer` sont représentés par des champs de saisie avec le type de nombre.
- Les attributs de type `String` sont représentés par des champs de saisie avec le type de texte area ou text input.
- Les attributs `Boolean` sont représentés par des boutons radio avec les options « Yes » et « No ».
- Les attributs de type `image` et `video` permettent aux utilisateurs de sélectionner plusieurs fichiers d'image ou de vidéo. Les chemins des fichiers sélectionnés sont ensuite enregistrés dans un tableau.
- Les images et vidéos doivent être placées dans le dossier `MediaFiles`, puis dans les sous-dossiers `Images` ou `Videos`.
- Les attributs de type `option` permettent de créer un menu déroulant avec les options spécifiées dans le JSON.
- Si l'attribut a des options prédéfinies spécifiées dans le JSON, un menu déroulant est automatiquement généré avec ces options.
- Si l'attribut `other` est défini comme `true` dans le JSON, une option `Other` est ajoutée au menu déroulant, permettant à l'utilisateur de saisir une option personnalisée en plus des options prédéfinies.
- Chaque attribut est identifié par sa clé `AttributeID`, qui est utilisée comme clé pour l'objet JSON résultant lors de la soumission du formulaire.
- Lorsque le formulaire est soumis, il collecte les données du formulaire et construit un objet représentant les données du formulaire au format JSON.


# Stockage des Données ✅
- Les données du formulaire sont stockées dans le fichier `data/projects.json`.
- Chaque formulaire soumis génère une nouvelle entrée dans le fichier JSON, contenant les données du formulaire.
- Le serveur génère automatiquement un ID unique pour chaque projet soumis, assurant ainsi l'unicité des identifiants de projet, même après le redémarrage du serveur.
- Les données des projets existants peuvent être consultées et modifiées en éditant directement le fichier `projects.json`.
- Assurez-vous que le fichier `projects.json` est correctement initialisé avec un tableau vide `[]` s'il est vide.


# Page des Projets ✅
- Mise en place d'une page pour afficher les projets soumis.
- Utilisation d'`HTML`, `CSS`, `Bootstrap`, et `JavaScript` pour créer l'interface web.
- Utilisation de `Bootstrap` pour la mise en page et le style des éléments.
- Affichage des projets sous forme de cartes avec des `images`, des `titres` et des `descriptions`.
- Implémentation d'une `barre de recherche` permettant de filtrer dynamiquement les projets par `nom` ou `descriptions`.
- Implémentation d'une fonctionnalité de `filtrage par type d'immersion` à l'aide d'un `menu déroulant`.
- Mise en place d'une `pagination` pour naviguer entre les pages de projets.
- Redirection vers une page d'information détaillée du projet lors du clic sur un projet.


# Guide d'implémentation des Dropdowns et du Filtrage ✅

## 1. Ajouter des Dropdowns dans le HTML

Dans le fichier HTML, ajoutez les éléments de menu déroulant pour chaque critère de filtrage que vous souhaitez proposer.

```
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
        Filter by Criteria
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownButton" id="dropdownMenu">
        <!-- Dropdown items will be populated dynamically -->
    </ul>
</div>
```

## 2. JavaScript pour Populer les Dropdowns et Filtrer les Données
Dans la partie JavaScript, écrivez du code pour peupler les menus déroulants avec des options et pour filtrer les données en fonction des options sélectionnées.
```
// Fonction pour peupler le dropdown avec des options
function populateDropdown(data) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const options = new Set();

    // Extract unique options from data
    data.forEach(item => {
        // Extract and add option to set
    });

    // Create dropdown items for each option
    options.forEach(option => {
        const dropdownItem = document.createElement('li');
        dropdownItem.innerHTML = `<a class="dropdown-item" href="#">${option}</a>`;
        dropdownMenu.appendChild(dropdownItem);
    });

    // Add event listener to dropdown items
    dropdownMenu.addEventListener('click', function (event) {
        // Handle option selection
    });
}
```

```
// Fonction pour filtrer les données en fonction des options sélectionnées
function applyFilters() {
    // Filtrer les données en fonction des options sélectionnées dans les dropdowns
}
```
```
// Appel de la fonction populateDropdown lors du chargement des données
fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        populateDropdown(data);
        applyFilters();
    })
    .catch(error => console.error('Error fetching data:', error));
```

## 3. Affichage des Filtres Sélectionnés et Suppression
```
// Fonction pour afficher les filtres sélectionnés
function displaySelectedFilters() {
    // Afficher les filtres sélectionnés dans une section de l'interface utilisateur
}
```
```
// Fonction pour supprimer un filtre sélectionné
function removeFilter(filter) {
    // Supprimer le filtre sélectionné et mettre à jour les résultats
}
```

## 4. Initialisation de l'objet selectedFilters : L'objet selectedFilters est initialisé avec les valeurs par défaut des filtres au chargement de la page.
```
let selectedFilters = {
    immersionType: 'All Immersion Type',
    ...
};
```