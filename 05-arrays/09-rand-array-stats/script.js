/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', function(){
    // Create a new array 
    arrayNum = new Array; 
    //Create a sum variable with a value of 0
    sum = 0;

    for(i=0; i<10; i++) {
        arrayNum[i] = Math.floor(Math.random()*101);
        sum = sum + arrayNum[i];
        document.getElementById('n-'+(i+1)).innerHTML= arrayNum[i];
    }
    min= Math.min.apply(Math, arrayNum);
    max= Math.max.apply(Math, arrayNum);
    average= sum/ arrayNum.length;
    document.getElementById('min').innerHTML= min;
    document.getElementById('max').innerHTML= max;
    document.getElementById('sum').innerHTML= sum;
    document.getElementById('average').innerHTML= average;
    //for loop with indentation to ten 
    //define the index of the array with integer value to a random number, mutiply by 101; 
    //sum the array to the sum variable 
    //take all element id who begin with n-, and replace with the array;
    //define min and max who apply to arrayNum
    //Find the average of the sum of all number 
    })
})();
