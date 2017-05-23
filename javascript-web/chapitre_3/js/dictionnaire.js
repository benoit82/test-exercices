// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var dlElt = document.createElement("dl"); // creation de la liste

document.getElementById("contenu").appendChild(dlElt); // insersion de la liste dans contenu
mots.forEach(function(mot){
    // pour chaque mot, on crée le dt qui inclura le terme en strong
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    dtElt.appendChild(strongElt);
    //pour chaque mot, on crée la description
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;
    //on fait suivre le terme puis la description
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});