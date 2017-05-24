var continuer = true;
var count = 0;



document.getElementById("clic").addEventListener("click", function (e) {
    if (continuer) {
        count++;
        document.getElementById("compteurClics").textContent = count;
    } 
});

document.getElementById("desactiver").addEventListener("click", function () {
    continuer = false;
});
