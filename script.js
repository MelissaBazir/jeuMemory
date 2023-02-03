/*  1 2
    2 1
 */

/* TO DO list
- gérer l'aléatoire dans le placement des images
- Pouvoir choisir le nombre de cartes en jeu
- gérer les débuts et fins de parties
- ajouter une animation (exemple confettis) lors de victoire
- Pouvoir relancer une partie
- gérer le bug du click deux fois sur une même image
- Compter le nombre de coups pour gagner (stocker les stats en cookies ?) */

// déclarer un tableau de toutes les cartes
let jeuTableau;
let allCards = document.querySelectorAll(".card");
let cptClickCurrent = 0;
let dataImageShowed;

allCards.forEach((card) => {
  card.addEventListener("click", function () {
    playGame(card);
  });
});

function playGame(card) {
  cptClickCurrent++;
  card.classList.remove("hidden");

  if (cptClickCurrent === 1) {
    //Premier click, je cache les images trouvées avant
    allCards.forEach((card) => {
      if (card.classList.contains("finded")) {
        //c'est une carte trouvée
      } else {
        // pas trouvée, il faut qu'elle soit masquée
        card.classList.add("hidden");
      }
    });
    // j'affiche la carte sur laquelle je viens de cliquer
    card.classList.remove("hidden");
    // je stocke la réponse derrière la carte et je la retourne
    dataImageShowed = card.dataset.image;
  } else if (cptClickCurrent === 2) {
    //deuxième fois, vérifier si les cartes sont identiques
    card.classList.remove("hidden");
    if (dataImageShowed === card.dataset.image) {
      allCards.forEach((card) => {
        if (card.classList.contains("hidden")) {
          //c'est une carte cachée
        } else {
          card.classList.add("finded");
        }
      });
    }
    cptClickCurrent = 0;
    dataImageShowed = "";

    // Compter les cartes qui n'ont pas la classe "finded"
    // si = 0; alors le jeu est fini
  }
}
