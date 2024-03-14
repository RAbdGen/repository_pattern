import Maprepository from "./mapRepository.mjs";

const repository = new Maprepository();

// Ajouter des entrées au repository
repository.ajouterEntree("John", "john@example.com");
repository.ajouterEntree("Tux", "Tux@example.com");
repository.ajouterEntree("Linux", "Linux@example.com");


// Obtenir une entrée du repository
console.log("Obtenir email de Tux : ", repository.obtenirEntree("Tux")); // Affiche : Tux@example.com


// Vérifier si une entrée existe dans le repository
// Supprimer une entrée du repository
// Revérifier la l'entrée
console.log("John est-il présent : ", repository.verifierEntree("John")); // Affiche : true
repository.supprimerEntree("John");
console.log("John est-il présent : ", repository.verifierEntree("John")); // Affiche : false


console.log("Liste des personnes : ", repository.obtenirToutesCles()); // Affiche : ["Tux", "Linux"]
console.log("Liste des emails : ", repository.obtenirToutesValeurs()); // Affiche : ["Tux", "Linux"]


// Obtenir le nombre total d'entrées dans le repository
console.log("Nombre total de personnes : ", repository.obtenirNombreTotalEntrees()); // Affiche : 2