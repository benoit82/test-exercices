// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"


// Pour chaque élément du tableau, on crée un nouveau lien
journaux.forEach(function(journal){
    var pElt = document.createElement("p");
    var lienElt = document.createElement("a");
    lienElt.href = journal;
    lienElt.textContent = journal;
    pElt.appendChild(lienElt);    
    document.getElementById("contenu").appendChild(pElt);
});