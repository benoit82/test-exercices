/*
function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});
*/

//Exercice1

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt",function(reponse){
    var langages = reponse.split(";");
    langages.forEach(function (langue) {
        var liElt = document.createElement("li");
        liElt.textContent = langue;
        document.getElementById('langages').appendChild(liElt);
    });
});
