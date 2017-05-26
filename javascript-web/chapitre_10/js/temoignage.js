var form = document.querySelector('form');
var resultat = document.getElementById('resultat');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var temoignage = {
        pseudo : e.target.elements.pseudo.value,
        evaluation : e.target.elements.evaluation.value,
        message : e.target.elements.message.value
    };
    ajaxPost('http://oc-jswebsrv.herokuapp.com/api/temoignage', temoignage,function (reponse) {
            pElt = document.createElement('p');
            pElt.textContent = 'Envoi du témoignage réussi ! Bien joué !';
            resultat.appendChild(pElt);
            setTimeout(function () {
                resultat.removeChild(pElt);
            }, 2000);
        },true);
});
