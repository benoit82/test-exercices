/*var table = document.querySelector('table');
ajaxGet('http://localhost/javascript-web-srv/data/tableaux.json', function (tableaux) {
    var tabs = JSON.parse(tableaux);
    tabs.forEach(function (tableau) {
        var trElt = document.createElement('tr');
        var tdNom = document.createElement('td');
        var tdAnnee = document.createElement('td');
        var tdAuteur = document.createElement('td');
        tdNom.textContent = tableau.nom;
        tdAnnee.textContent = tableau.annee;
        tdAuteur.textContent = tableau.auteur;

        trElt.appendChild(tdNom);
        trElt.appendChild(tdAnnee);
        trElt.appendChild(tdAuteur);

        trElt.appendChild(table);
    });
});


Exercice : tableau de tableaux
*/

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.année + "</td>" +
            "<td>" + tableau.auteur + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});
