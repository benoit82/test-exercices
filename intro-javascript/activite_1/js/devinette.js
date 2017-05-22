/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
//initialisation de le nombre donnée (nb), on le met à 0 pour entrer dans la boucle et sera forcement pas compris entre 1 et 100
var nb = 0;
//initialisation du nombre d'essai (max à 6 on sort de la boucle) 
var essai = 0;
while (nb != solution || essai <= 6) {
    //on incrémente un nouvel essai
    essai++;
    //si on a encore le droit à un autre essai et si le jeu n'est pas fini
    if (essai <= 6 && nb != solution) {
        //on demande au joueur un chiffre
        var nb = Number(prompt("Entrez un chiffre entre 1 et 100 :"));
        //controle avec la solution
        if (nb < solution) {
            console.log(nb + " est trop petit");
        } else if (nb > solution) {
            console.log(nb + " est trop grand");
        } else {
            // si ni trop petit ni trop grand alors le nombre est trouvé
            console.log("Bravo ! La solution était " + solution + "\n Vous avez trouvé en " + essai + "essai(s)");
            //on met les essai à 7 pour forcer à sortir de la boucle et ne pas afficher "Perdu" en cas de victoire
            essai = 7;
        }
    } else {
        console.log("Perdu... La solution était " + solution);
        //on oublie pas de mettre la solution dans le nombre nb pour eviter une boucle infini
        nb = solution;
    }
}
