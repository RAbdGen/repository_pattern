import Repository from "./repository.mjs";

// Implémentation du Repository
export default class MapRepository extends Repository {
    constructor() {
        super();
        this.donnees = new Map();
    }

    ajouterEntree(cle, valeur) {
        this.donnees.set(cle, valeur);
    }

    obtenirEntree(cle) {
        return this.donnees.get(cle);
    }

    verifierEntree(cle) {
        return this.donnees.has(cle);
    }

    supprimerEntree(cle) {
        return this.donnees.delete(cle);
    }

    obtenirToutesCles() {
        return Array.from(this.donnees.keys());
    }

    obtenirToutesValeurs() {
        return Array.from(this.donnees.values());
    }

    obtenirNombreTotalEntrees() {
        return this.donnees.size;
    }
}
