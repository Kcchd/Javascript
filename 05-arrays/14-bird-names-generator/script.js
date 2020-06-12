/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById('run').addEventListener('click', function() {

    let randomBirds = birds[Math.floor(Math.random()*birds.length)]
    let randomAdjectives = Math.floor(Math.random() * adjectives.size);
    const adjectivesArray = Array.from(adjectives);

    if (randomBirds.fem == true){
        console.log('La '+randomBirds.name+' '+adjectivesArray[randomAdjectives]+'e')
    }
    else {
        console.log('Le '+randomBirds.name+' '+adjectivesArray[randomAdjectives])
    }
    })
    //Create a var who take a array element random with index
    //Create a var who take a set element random with index
    //Créer une variable qui prend en compte la valeur boléenne
    //concatenation of the sum of the two element 
})();
