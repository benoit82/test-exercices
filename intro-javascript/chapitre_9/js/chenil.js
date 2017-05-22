var Chien = {
  // initialise le chien
  init: function(nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  },
  // Renvoie l'aboiement du chien
  aboyer: function() {
    var aboiement = "Whoua ! Whoua !";
    if (this.taille < 25) {
      aboiement = "Kaii ! Kaii !";
    } else if (this.taille > 60) {
      aboiement = "Grrr ! Grrr !";
    }
    return aboiement;
  }
};

var Crokdur = Object.create(Chien);
Crokdur.init("Crokdur", "mâtin de Naples", 75);
var Pupuce = Object.create(Chien);
Pupuce.init("Pupuce", "bichon", 22);
var Medor = Object.create(Chien);
Medor.init("Médor", "labrador", 58);

var chiens = [Crokdur, Pupuce, Medor];

chiens.forEach(function(chien) {
  console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie : " + chien.aboyer());
});
