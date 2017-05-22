var saisi = prompt("Saisi d'un mot :");
console.log("Le mot " + saisi + " contient " + saisi.length + " caractère");
console.log("Il s'écrit en minuscules " + saisi.toLowerCase());
console.log("Il s'écrit en majuscules " + saisi.toUpperCase());

function compterNbVoyelles(mot) {
    var nbVoyelle = 0;
    mot = mot.toLowerCase();
    for (var i = 0; i <= mot.length - 1; i++) {
        if (mot[i] === "a" || mot[i] === "e" || mot[i] === "i" || mot[i] === "u" || mot[i] === "y" || mot[i] === "o") {
            nbVoyelle++;
        }
    }
    return nbVoyelle;
}

var nbVoyelle = compterNbVoyelles(saisi);
var nbConsonne = saisi.length - compterNbVoyelles(saisi);

console.log("Il contient " + nbVoyelle + " voyelle(s) et " + nbConsonne + "consonne(s)");

function inverser(mot) {
    var motInverse = "";
    var longueurMot = mot.length - 1;

    for (var i = longueurMot; i >= 0; i--) {
        motInverse += mot[i];
    }
    return motInverse;
}

var inverse = inverser(saisi);
console.log("En inversé, le mot devient : " + inverse);

if (inverse.toUpperCase() === saisi.toUpperCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}

function trouverLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
        case "a":
            lettreLeet = "4";
            break;
        case "b":
            lettreLeet = "8";
            break;
        case "e":
            lettreLeet = "3";
            break;
        case "l":
            lettreLeet = "1";
            break;
        case "o":
            lettreLeet = "0";
            break;
        case "s":
            lettreLeet = "5";
            break;
        case "t":
            lettreLeet = "7";
            break;
            // ...
    }
    return lettreLeet;
}

function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}
var leet = convertirEnLeetSpeek(saisi);
console.log("Il s'écrit en leet speak : " + leet);
