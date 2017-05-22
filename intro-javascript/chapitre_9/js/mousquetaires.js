var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires :");

for (var i = 0; i < mousquetaires.length; i++) {
  console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");

console.log("Maintenant ils sont quatre :");
mousquetaires.forEach(function(mousquetaire) {
  console.log(mousquetaire);
});

var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;
valeurs.forEach(function(valeur) {
  somme += valeur;
});
console.log("La somme des éléments vaut " + somme);

var max = 0;

valeurs.forEach(function(valeur) {
  max = (valeur > max) ? valeur : max;
});

console.log("Le maximum des éléments vaut " + max);

var mots = [];
var saisi = "";

while (saisi != "stop") {
 saisi = prompt("Saisir un mot (stop pour arreter)");
 if (saisi != "stop") {
   mots.push(saisi);
 }
}
mots.forEach(function(mot){
  console.log(mot);
});
