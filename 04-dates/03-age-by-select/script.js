/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', function() {
    var today = new Date()
    var dobDay = String(document.getElementById('dob-day').value);
    var dobMonth = String(document.getElementById("dob-month").value);
    var dobYear = String(document.getElementById('dob-year').value); 

    var age = Number(today.getFullYear()) - Number(dobYear); 

    var day =  String(today.getDate());
    var month = String(today.getMonth() +1);
    if (day.length < 2) {
        day = '0' + day;
    }
    if (month.length < 2) {
        month = '0' + month;
    }
    if (dobDay.length < 2) {
        dobDay = '0' + dobDay;
    }
    if (dobMonth.length < 2) {
        dobMonth = '0' + dobMonth;
    }
    var firstPart = dobMonth + dobDay;
    firstPart= Number(firstPart);

    var secondPart = month + day;
    secondPart= Number(firstPart);

    if (firstPart - secondPart < 0){ 
        alert('You are '+ age+ ' years old!');
    }
    else {
        alert('You are '+ (age-1) + ' years old!')
    }
})

    //création de 2 variable récupérant les jours et mois actuels sous forme de chaine de catactère
    //Bloc IF pour ajouter un 0 devant les jours ou les mois ne comportant qu'un seul caractère
    //Variable ajoutant les deux chiffres du jour encodé derrière les deux chiffes du mois
    //Conversion de la chaine de caractères obtenue en nombre
    //Même principe avec la date du jour
     //Conversion en nombre
     //Boucle If testant le résultat, si la date entrée (MMJJ) - la date du jour (MMJJ)
     //est négatif alors renvoyer la variable age calculée précédement.
     //Si ce n'est pas le cas alors renvoyée la variable -1 car son anniversaire n'est pas encore passé cette année.
})();
