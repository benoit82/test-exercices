document.querySelector("button").addEventListener("click", function (e) {
    var dessert = prompt("Ajouter un dessert à la liste :");
    var listeElt = document.getElementById("desserts");
    var elemListeElt = document.createElement("li");
    elemListeElt.textContent = dessert;
    listeElt.appendChild(elemListeElt);
});

document.addEventListener("click", function (e) {
    if (e.target.tagName === "LI"){
    var modification = prompt("Modifier le dessert :",e.target.textContent);
    e.target.textContent = modification;
    }
});

//corrigé :
/*
document.querySelector("button").addEventListener("click", function () {
    var nomDessert = prompt("Entrez le nom du nouveau dessert :");

    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    dessertElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
        e.target.textContent = nouveauNom;
    });

    document.getElementById("desserts").appendChild(dessertElt);
});
*/