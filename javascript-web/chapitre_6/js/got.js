// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

var form = document.querySelector("form");
//chargement du selecteur avec le tableau de maisons :
//<option value="" selected>Choisissez une maison</option>
maisons.forEach(function(maison){
    var optionElt = document.createElement("option");
    optionElt.value = maison.code;
    optionElt.textContent = maison.nom;
    document.getElementById("maison").appendChild(optionElt);
});

form.elements.maison.addEventListener("change", function(e){
    var persos = getPersonnages(e.target.value);
    //on reset la list
    var ulElt = document.getElementById("persos");
    ulElt.innerHTML= "";
    //pour chaque perso, on crée un "li" avec son nom
    persos.forEach(function(perso){
        var liElt = document.createElement("li");
        liElt.textContent = perso;
        ulElt.appendChild(liElt);
    });
});