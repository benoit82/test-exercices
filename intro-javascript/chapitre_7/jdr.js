var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;
perso.xp = 0;
// Renvoie la description du personnage
perso.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie et " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

// TODO : ajoutez ici la définition de l'objet perso

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());
//-------------------

// TODO : ajoutez ici la définition de l'objet chien
var chien = {
    nom: "Moon",
    race: "husky",
    taille: "90",
    aboyer: function () {
        return "ouaf ! ouaf !!";
    },
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
//----------------------

var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

var cercle = {
    rayon : 1,
    perimetre: function(){
        return this.rayon*2*3.14;
    },
    aire: function(){
        return this.rayon*this.rayon*3.14;
    },
};
cercle.rayon = r;

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());