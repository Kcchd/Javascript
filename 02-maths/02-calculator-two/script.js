/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementByClass('operator').addEventListener('click', function() {
    let one = +document.getElementById('op-one').value;
    let two = +document.getElementById('op-two').value;
        console.log
    switch(addition){
        case 'addition':
        alert(one+two);
        break;

        case 'substraction':
        alert(one-two);
        break;
        
        case 'multiplication':
        alert(one*two);
        break;

        case 'division':
        alert(one/two);
        break;
    }
    return true;
}
})();
