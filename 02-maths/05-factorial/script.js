/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

    // get the value of the input 
        var num = (document.getElementById("number").value);
    // define result 
        var result = num;
       
    // if 0 OR 1, return 1
        if (num === 0 || num === 1)

        return 1; 

    //while loop 
        while (num > 1) {
            num--; //decrementation by 1 at each iteration
            result *= num; //result = result * num 
        }
        alert(result);
    });
   
})();
