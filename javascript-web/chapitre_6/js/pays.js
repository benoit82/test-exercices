// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

//remplissage de la div de suggestion
var divSuggestions = document.getElementById("suggestions");
var inputPays = document.getElementById("pays");
inputPays.focus();
//evenement : sur le focus du champ
inputPays.addEventListener("input", function(e){
    //on reset la liste
    divSuggestions.innerHTML ="";
   listePays.forEach(function(pays){
        if(pays.indexOf(e.target.value) !== -1){
            var divElt = document.createElement("div");
            divElt.classList.add("suggestion");
            divElt.textContent = pays;
            divElt.addEventListener("click",function(e){
                //sur clic, on rempli l'input pays
                inputPays.value = this.textContent;
                //on reset la div suggestions
                this.parentNode.innerHTML ="";
            });
            divSuggestions.appendChild(divElt);
        }
    });
});