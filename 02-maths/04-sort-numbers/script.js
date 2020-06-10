/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
       /* Définit la variable num en l'équivalent aux nombres qui composent l'imput. 
       split => Permet de scinder la chaîne de caractère en diff éléments, 
       .map => transforme les nombres (+)=> en nombres positifs. */ 

        let num = (document.getElementById("number").value).split `,`.map(x=>+x);
        num.sort(function (a, b){ return a-b; });
        alert(num);
    });
      
})();
