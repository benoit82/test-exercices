// on rattache tous les elements div ensemble
var divElts = document.getElementsByTagName("div");

var couleurTexte = prompt("Couleur du texte ? (en anglais svp)");
var couleurFondDeTexte = prompt("Couleur de fond des paragraphe ? (toujours en anglais)");

// pour chaque div :
for (i = 0; 0 < divElts.length; i++) {
    //on colore le texte :
    divElts[i].style.color = couleurTexte;
    //on colore le fond :
    divElts[i].style.backgroundColor = couleurFondDeTexte;
}
