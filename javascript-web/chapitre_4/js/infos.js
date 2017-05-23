// on récupère les styles de la div "contenu"
var contenuElt = document.getElementById("contenu");
var stylesContenu = getComputedStyle(contenuElt);

var styles = [];
styles.push("Hauteur : " + stylesContenu.height);
styles.push("Longueur : " + stylesContenu.width);

/* on crée une div "info" contenant : un paragraphe "Information sur l'élément \"contenu\""
                                    une liste : la hauteur et la longueur */
var infoElt = document.getElementById("infos");
var pElt = document.createElement("p");
pElt.textContent = "Information sur l'élément \"contenu\" :";
infoElt.appendChild(pElt);
var ulElt = document.createElement("ul");
infoElt.appendChild(ulElt);
styles.forEach(function (style) {
    var liElt = document.createElement("li");
    liElt.textContent = style;
    ulElt.appendChild(liElt);
});


/*
Exercice : informations sur un élément

var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);
*/