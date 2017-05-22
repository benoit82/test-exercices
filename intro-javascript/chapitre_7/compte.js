var CompteBancaire = {
  initCB: function(titulaire, solde) {
    this.titulaire = titulaire;
    this.solde = solde;
  },
  crediter: function(somme) {
    this.solde += somme;
  },
  debiter: function(somme) {
    this.solde -= somme;
  },
  decrire: function() {
    console.log("Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
  },
};

var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
CompteEpargne.ajouterInterets = function() {
  this.solde += this.solde * this.tauxInteret;
};


// TODO : ajoutez ici la définition des objets nécessaires

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
