/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
    var getAge = prompt("What's your age?");
    var getGender = prompt("What's your gender ?");
    var getTown = prompt("Where do you live ?");
var getAge1 = confirm("Do you have "+getAge+" years old?");
if (getAge1 !== true) {
    var getAge = prompt("What's your age?");
    var getGender = prompt("What's your gender ?");
    var getTown = prompt("Where do you live ?");
}
var getGender1 = confirm("Are you a "+getGender+" ?");
if (getGender1 !== true) {
    var getAge = prompt("What's your age?");
    var getGender = prompt("What's your gender ?");
    var getTown = prompt("Where do you live ?");
}
var getTown1 = confirm("Do you live at "+getTown+" ?");
if (getTown1 !== true) {
    var getAge = prompt("What's your age?");
    var getGender = prompt("What's your gender ?");
    var getTown = prompt("Where do you live ?");
}



