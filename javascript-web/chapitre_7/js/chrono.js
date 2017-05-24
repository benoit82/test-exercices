var chronoAnim = null;

document.querySelector("button").addEventListener("click", function (e) {
    var lancerChrono = this.textContent;
    if (lancerChrono === "Démarrer") {
        var compteur = Number(document.getElementById("compteur").textContent);
        chronoAnim = setInterval(function () {
            compteur++;
            document.getElementById("compteur").textContent = compteur;
        }, 1000);
        this.textContent = "Arrêter";
    }
    if (lancerChrono === "Arrêter") {
        clearInterval(chronoAnim);
        this.textContent = "Démarrer";
    }

});
