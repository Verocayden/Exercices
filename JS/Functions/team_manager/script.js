const teams = [
    "Habs",
    "Lightning",
    "Maple Leafs",
    "Golden Knights",
    "Penguins"];

// Problème de base
function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    // Problème de scope avec var
    // i existe à cause de la fermeture. À la fin de la boucle, i prend la dernière valeur du tableau.
    // Du coup, cela donne toujours les Penguins, car c'est le dernier élément dans le tableau.
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", (e) => {
            e.target.textContent = teams[i];
        });
    }
    document.getElementById("team-loader").disabled = true;
}

// Solution 1: Remplacer var par let (pour changer la fermeture)
// var: Sa fermeture dépasse le bloc; elle inclut aussi la fonction.
// var va prendre automatiquement la valeur la plus à jour de i, puis peut regarder "en-haut" du scope (et voit que i a déjà été déclaré) mais ce n'est pas forcément la bonne.
// let: Contrairement au var, sa fermeture est juste dans le bloc (PAS LA FONCTION EN GÉNÉRAL)
// Donc, avec let, on a le comportement désiré.
// TLDR: var est chiant, let est bien.
function loadTeams() {
    const listItems = document.getElementsByClassName("team");
        for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", (e) => {
            e.target.textContent = teams[i];
        });
    }
    document.getElementById("team-loader").disabled = true;
}

// Solution 2: Avec IIFE
// On a ajouté une fonction lambda avec son IIFE.
// On est quand même capable de monter et le i est égal à 4.
// Pourquoi ça fonctionne ?
// C'est à cause de newI.
// Pour lla fonction: On passe les paramètres par copie.
// Si i change, newI ne change pas en même temps, car c'est une copie...
// On n'a donc pas besoin de remonter en haut.
// newI est une copie de i, pas une référence. Les changements de i n'affectent pas newI.
// Dans une fonction, les paramètres sont passés par copie et non par référence.
function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (var i = 0; i < listItems.length; i++) {
        (function (newI) {
            listItems[newI].addEventListener("click", (e) => {
                e.target.textContent = teams[newI];
            });
        })(i);
    }
    document.getElementById("team-loader").disabled = true;
}