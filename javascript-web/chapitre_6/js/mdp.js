var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    //initialisation du message informatif
    var message = "";
    //lancement des tests sur le champ du mot de passe
    //champ mot de passe 1
    var mdp1 = this.elements.mdp1.value;
    //est ce que le mdp1 contient 6 caractère ?
    if (mdp1.length < 6) {
        message += "Le mot de passe ne contient pas 6 caractères. ";
    }
    //test regex : doit contenir un chiffre
    var regexChiffre = /[0-9]+/;
    if (!regexChiffre.test(mdp1)) {
        message += "Le mot de passe doit comporter au moin un chiffre. ";
    }
    //enfin on compare le mdp1 avec le mdp2
    var mdp2 = this.elements.mdp2.value;
    if (mdp1 !== mdp2) {
        message += "Les 2 mots de passe ne sont pas identique.";
    }

    //à ce stade, si le message est toujours vide, alors on valide :
    //le mot de passe est OK
    if (message.length === 0) {
        message = "Le mot de passe est valide.";
    }
    //on ajoute le message au <p> infoMdp
    document.getElementById("infoMdp").textContent = message;
    //annulation de l'envoie
    e.preventDefault();
});
