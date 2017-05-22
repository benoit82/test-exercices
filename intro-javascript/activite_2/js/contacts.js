/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

////////////////////////////////////////////////////////////////////
//Création de l'objet Contact.
////////////////////////////////////////////////////////////////////
var Contact = {
  prenom: "",
  nom: "",
  init: function(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  },
  afficherDetail: function() {
    return "Nom : " + this.nom + ", prénom : " + this.prenom;
  }
};
////////////////////////////////////////////////////////////////////
// Initialisation du tableau de contacts de base : Carole Lévisse & Mélodie Nelsonne
////////////////////////////////////////////////////////////////////
var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");
var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");

var contacts = [contact1, contact2];

////////////////////////////////////////////////////////////////////
//Création des fonctions du menu :
//Fonction de listing de contacts :
////////////////////////////////////////////////////////////////////
var listerContact = function(tabContacts) {
  tabContacts.forEach(function(contact) {
    console.log(contact.afficherDetail());
  });
}

////////////////////////////////////////////////////////////////////
//Fonction d'ajout d'un contact :
////////////////////////////////////////////////////////////////////
var ajouterContact = function(tabContacts) {
  //demande à l'utilisateur le prenom et le nom du contact à créer
  prenom = prompt("Ajout d'un nouveau contact\nSaisissez le prénom :");
  nom = prompt("Ajout d'un nouveau contact\nSaisissez le prénom :");
  //création du contact
  var nouvContact = Object.create(Contact);
  nouvContact.init(prenom, nom);
  //enregistrement dans la list passé en paramètre
  tabContacts.push(nouvContact);
  //affichage du contact enregistré pour confirmer à l'utilisateur
  console.log("Enregistrement fait de : " + nouvContact.afficherDetail());
}

////////////////////////////////////////////////////////////////////
//Création du menu
////////////////////////////////////////////////////////////////////
var afficherMenu = function() {
  console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter le programme");
}

////////////////////////////////////////////////////////////////////
//Message de bienvenue et proposition d'interagir avec le programme
////////////////////////////////////////////////////////////////////
console.log("Bienvenue dans le gestionnaire des contacts, choisissez une options svp :");

////////////////////////////////////////////////////////////////////
//Affichage du menu et attente du choix, lancement des fonctions choisi
////////////////////////////////////////////////////////////////////
var choix = "";
while (choix !== 0) {
  afficherMenu();
  choix = Number(prompt("Choisissez une option :"));
  switch (choix) {
    case 1:
      listerContact(contacts);
      break;
    case 2:
      ajouterContact(contacts);
      break;
    default:
      //si aucune option choisi, avertir l'utilisateur, sinon on boucle le menu
      if (choix !== 0) {
        console.log("Merci de faire un choix du menu proposé");
      }
  }
}
