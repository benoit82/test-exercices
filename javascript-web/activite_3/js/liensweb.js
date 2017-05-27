/*
Mise à jour Activité 3 : Modification du code par rapport à l'Activité 2 :
- Suppression du tableau de départ
- Modification de l'affichage de lien : appel du serveur distant
- Modification de l'evenement "submit" : on envoie les données et on rafraichit l'affichage des liens
*/


var divContenu = document.getElementById("contenu");

//passage en paramètre un lien complet : son titre, son auteur, son url
function creationLien(lien) {
    //création une div de classe "lien" qui va emglober toutes les informations
    var divElt = document.createElement("div");
    divElt.classList.add("lien");

    //création du titre cliquable : <h2><a href="url">titre</a></h2>
    var titreElt = document.createElement("h2");
    var lienElt = document.createElement("a");
    lienElt.href = lien.url;
    lienElt.textContent = lien.titre;
    //ajout du style (couleur du lien : #428bca) et retrait du soulignement
    lienElt.style.color = "#428bca";
    lienElt.style.textDecoration = "none";
    //insersion du lien dans le titre
    titreElt.appendChild(lienElt);
    //ajout de l'url à coté du titre en span
    urlElt = document.createElement("span");
    urlElt.textContent = " " + lien.url;
    titreElt.appendChild(urlElt);
    //insersion du titre dans la div
    divElt.appendChild(titreElt);

    //ajout du paragraphe "Ajouté par (auteur)"
    var pElt = document.createElement("p");
    pElt.textContent = "Ajouté par " + lien.auteur;
    divElt.appendChild(pElt);
    //on retourne la div
    return divElt;

}

//recuperation des liens sur le serveur à distance
function recupLien(url) {
    divContenu.innerHTML = "";
    ajaxGet(url, function (reponse) {
        //si la réponse n'est pas vide, on reçoit un JSON qu'on traduit en JavaScript
        if (reponse.length > 0) {
            var liens = JSON.parse(reponse);
            liens.forEach(function (lien) {
                divContenu.appendChild(creationLien(lien));
            });
        } else {
            //sinon on affiche un message disant qu'aucune info n'a été reçu
            var textInfo = document.createTextNode("Connexion établi, mais aucune information reçue.");
            divContenu.appendChild(textInfo);
        }
    });
}

recupLien("https://oc-jswebsrv.herokuapp.com/api/liens");


//preparation du formulaire d'ajout
//ajout de la div qui contiendra le nouveau bouton "ajouter un lien" et le formulaire
var divForm = document.createElement("div");
//attributs de la div
divForm.style.marginBottom = "10px";

//creation du bouton
var buttonAdd = document.createElement("button");
//attributs du bouton
buttonAdd.textContent = "Ajouter un lien";
//sur click, on affiche le formulaire
buttonAdd.addEventListener("click", function (e) {
    //on n'affiche plus le bouton
    divForm.innerHTML = "";
    //creation du formulaire
    var formElt = document.createElement("form");
    //creation des elements du formulaire
    //champ auteur :
    var auteurElt = document.createElement("input");
    auteurElt.setAttribute("name", "auteur");
    auteurElt.setAttribute("id", "auteur");
    auteurElt.setAttribute("placeholder", "Votre nom");
    auteurElt.setAttribute("required", true);
    auteurElt.style.marginRight = "15px";

    //champ titre :
    var titreElt = document.createElement("input");
    titreElt.setAttribute("name", "titre");
    titreElt.setAttribute("id", "titre");
    titreElt.setAttribute("placeholder", "Titre du lien");
    titreElt.setAttribute("required", true);
    titreElt.style.marginRight = "15px";

    //champ auteur :
    var urlElt = document.createElement("input");
    urlElt.setAttribute("name", "url");
    urlElt.setAttribute("id", "url");
    urlElt.setAttribute("placeholder", "Entrer le lien de l'url");
    urlElt.setAttribute("required", true);
    urlElt.style.marginRight = "15px";
    //controle de la saisie sur la perte de focus :
    urlElt.addEventListener("blur", function (e) {
        var regex = /^http[s]*:\/\//;
        //si le lien ne commence pas par http, on l'ajoute
        if (!regex.test(e.target.value) && e.target.value.length > 0) {
            e.target.value = "http://" + e.target.value;
        }
    });

    //bouton submit et son action :
    var butonAjElt = document.createElement("button");
    butonAjElt.setAttribute("type", "submit");
    butonAjElt.textContent = "Ajouter";

    formElt.addEventListener("submit", function (e) {
        //annulation l'envoie de donnée classique
        e.preventDefault();
        //si l'utilisateur n'a pas saisi de http, sans avoir quitter le champ (envoie par "Entrée")
        //il faut refaire le test regex
        var regex = /^http[s]*:\/\//;
        if (!regex.test(urlElt.value)) {
            urlElt.value = "http://" + urlElt.value;
        }
        //preparation à l'envoi des données
        var nouveauLien = {
            titre: titreElt.value,
            url: urlElt.value,
            auteur: auteurElt.value
        };

        /*
        //ajout du nouveau bloc lien en 1ere position
        var bloc1 = divContenu.childNodes[0];
        divContenu.insertBefore(creationLien(nouveauBloc), bloc1);
        */

        //envoie des données au serveur distant
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", nouveauLien, function (reponse) {
            //configuration des variable d'affichage si les données ont été reçu ou non
            //si tout est ok
            if (reponse.length > 0) {
                var confBackgroundColor = "#2ec3a0"; // couleur vert
                var textConfirmation = 'Confirmation : le lien "' + titreElt.value + '" a bien été ajouté !'
            } else {
                //sinon information erreur
                var confBackgroundColor = "red";
                var textConfirmation = "erreur sur l'envoi des données";
            }

            //destruction du formulaire
            divForm.innerHTML = "";

            //afficher le message de confirmation -disparition au bout de 2 sec
            var divConfirmation = document.createElement("div");
            //attributs de la div de confirmation
            divConfirmation.style.margin = "10px 0";
            divConfirmation.style.padding = "15px";
            divConfirmation.style.backgroundColor = confBackgroundColor; // couleur vert
            //creation et insersion du message de confirmation
            var pConfirmation = document.createElement("p");
            pConfirmation.textContent = textConfirmation;
            divConfirmation.appendChild(pConfirmation);
            //affichage dans la page
            divForm.appendChild(divConfirmation);
            //animation
            setTimeout(function () {
                divForm.removeChild(divConfirmation);
            }, 2000);
            //réafficher le bouton "Ajouter un lien" et des liens
            divForm.appendChild(buttonAdd);
            recupLien("https://oc-jswebsrv.herokuapp.com/api/liens");
        }, true);


    });

    //insersion des elements au formulaire
    var elements = [auteurElt, titreElt, urlElt, butonAjElt];
    elements.forEach(function (elem) {
        formElt.appendChild(elem);
    });
    //insersion du formulaire dans la div
    divForm.appendChild(formElt);

});

//insersion de la div avant la div contenu
document.querySelector("body").insertBefore(divForm, divContenu);
//insersion du bouton à la div
divForm.appendChild(buttonAdd);
