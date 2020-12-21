// Le joueur démarre avec aucune carte ( score = 0 )
// La banque démarre avec un score entre 16 et 21, qui restera caché jusqu'à la fin du jeu.
// Pour chaque round, le joueur pourra:
// Soit tirer une carte possédant une valeur aléatoire entre 1 et 11. Cette valeur sera ajouté à son score. 
//Si après cet ajout son score depasse 21, le joueur perd automatiquement, 
//on l'informe et on dévoile le score de la banque.
// Soit passer si son score actuel est plus que 16 (sinon la banque gangera toujours), ce qui mettra fin à la partie.
// En fin de partie, 4 options sont possibles :
// Si le score du joueur est supérieur à 21, le joueur perd.
// Si le score du joueur est 21, il fait un Black Jack et gagne.
// Si le score du joueur est supérieur au score de la banque, le joueur gagne.
// Si le score du joueur est inférieur au score de la banque, le joueur perd.
// Si le score du joueur est égale au score de la banque, le joueur perd.
// Dans tous ces cas, on informe le résultat et on dévoile le score de la banque.
console.log('\n')
console.log('                                    Bienvenue dans le black Jack')
var cardB = Math.floor(Math.random() * (21 - 16)) + 16;
scorB = cardB;
//console.log('Le score  de la banque est:', cardB);
console.log('\n');
//console.log(cardj);
var scorj = 0;
var prompt = require('prompt');
prompt.start();
function displayPrompt() {
    prompt.get({ name: 'q', description: 'cardj ?' }, function (err, result) {
        if ((result.q === 'y') || (result.q === 'yes')) {
            var cardj = Math.floor(Math.random() * 10) + 1;
            scorj += cardj;
            console.log("Le score de joeur est:" + ' ' + scorj)
            console.log("Your score is " + scorj + ", bank is " + scorB)
        }
        else if (result.q = 'Passed')  {
            if (scorj > scorB) {
                console.log('le jouer gagne');
                console.log("Your score is " + scorj + ", bank is " + scorB)
                return;
            }
            if (scorj < scorB || (scorj === scorB)) {
                console.log('le jouer perd');
                return;
            }
        }
        if (scorj > 21) {
            console.log('Le jouer perd');
            console.log("Your score is " + scorj + ", bank is " + scorB)
            return;
        }
        if (scorj === 21) {
            console.log('le joueur a fait un bon blackjak "gagne")');
            console.log("Your score is " + scorj + ", bank is " + scorB)
            return;
        }
        displayPrompt();
    });
}
displayPrompt();