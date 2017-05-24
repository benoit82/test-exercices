// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];
//affichage
var numQuestion = 0;
var divContenuElt = document.getElementById("contenu");
questions.forEach(function(question) {
    numQuestion++;
    //creation de tous les elements
    divElt = document.createElement("div"); // conteneur de la questions
    divElt.id = "q"+ numQuestion;
    pElt = document.createElement("p");
    
    strongElt = document.createElement("strong"); // question numero ?
    strongElt.textContent = "Question " + numQuestion + " : ";
    
    emElt = document.createElement("em"); // enonce
    emElt.textContent = question.enonce;
    
    boutonElt = document.createElement("button"); // afficher la réponse
    boutonElt.textContent = "Afficher la réponse";
    //on crée un evenement sur le click du bouton
    boutonElt.addEventListener("click",function(e){
        var reponseElt = document.createElement("span");
        reponseElt.textContent = question.reponse;
        e.target.style.display = "none";
        e.target.parentElement.appendChild(reponseElt);            
        });    
    //on emboite les elements :
    pElt.appendChild(strongElt);
    pElt.appendChild(emElt);
    pElt.appendChild(document.createElement("br")); // saut de ligne
    pElt.appendChild(boutonElt);    
    divElt.appendChild(pElt);
    divContenuElt.appendChild(divElt);
    
});
