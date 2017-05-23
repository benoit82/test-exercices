/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
//Pour chaque entité de lien :
listeLiens.forEach(function (entite) {
    //création une div de classe "lien" qui va emglober toutes les informations
    var divElt = document.createElement("div");
    divElt.className = "lien";

    //création du titre cliquable : <h2><a href="url">titre</a></h2>
    var titreElt = document.createElement("h2");
    var lienElt = document.createElement("a");
    lienElt.href = entite.url;
    lienElt.textContent = entite.titre;
    //ajout du style (couleur du lien : #428bca)
    lienElt.style.color = "#428bca";
    //insersion du lien dans le titre
    titreElt.appendChild(lienElt);
    //ajout de l'url à coté du titre en span
    urlElt = document.createElement("span");
    urlElt.textContent = " " + entite.url;
    titreElt.appendChild(urlElt);
    //insersion du titre dans la div
    divElt.appendChild(titreElt);

    //ajout du paragraphe "Ajouté par (auteur)"
    var pElt = document.createElement("p");
    pElt.textContent = "Ajouté par " + entite.auteur;
    divElt.appendChild(pElt);

    //ajout la div fini à "contenu"
    document.getElementById("contenu").appendChild(divElt);
});
