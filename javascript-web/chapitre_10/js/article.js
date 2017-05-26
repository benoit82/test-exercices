var form = document.querySelector('form');
var confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //envoi des infos vers le serveur
    var article = new FormData(form);


    ajaxPost('http://oc-jswebsrv.herokuapp.com/article', article, function (reponse) {
        pElt = document.createElement('p');
        pElt.textContent = 'Envoi de l\'article "' + document.getElementById('titre').value + '" réussi ! \n bien joué !';
        confirmation.appendChild(pElt);
        setTimeout(function() {
            confirmation.removeChild(pElt);
        }, 2000);
    });
});
