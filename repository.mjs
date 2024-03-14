// Définition de l'interface Repository
export default class Repository {
    ajouterEntree(cle, valeur) {}
    obtenirEntree(cle) {}
    verifierEntree(cle) {}
    supprimerEntree(cle) {}
    obtenirToutesCles() {}
    obtenirToutesValeurs() {}
    obtenirNombreTotalEntrees() {}
  }