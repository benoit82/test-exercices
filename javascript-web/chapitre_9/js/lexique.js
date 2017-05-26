var divInfos = document.getElementById('infos');
var pLiens = document.querySelector('p');

var lettres = ['A', 'B', 'C', 'D', 'E', 'F'];

lettres.forEach(function (lettre) {
    var lienElt = document.createElement('a');
    lienElt.href = 'https://oc-jswebsrv.herokuapp.com/api/lexique/' + lettre;
    lienElt.textContent = lettre;
    lienElt.style.marginRight = '5px';
    lienElt.addEventListener('click', function (e) {
        e.preventDefault();
        ajaxGet(lienElt.href, function (reponse) {
            var definitions = JSON.parse(reponse);
            divInfos.innerHTML = '';
            if (definitions.length !== 0) {
                definitions.forEach(function (def) {
                    var h2Elt = document.createElement('h2');
                    var pDefElt = document.createElement('p');

                    h2Elt.textContent = def.term;
                    pDefElt.textContent = def.definition;

                    divInfos.appendChild(h2Elt);
                    divInfos.appendChild(pDefElt);

                });
            }else {
                divInfos.innerHTML = '<p>Aucun mot trouvé</p>';
            }
        });
    });
    pLiens.appendChild(lienElt);
});
