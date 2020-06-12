/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function(){
        function Friday13th(year) {
            let monthSpooky = new Array();
            let monthYear = new Array(); 
            monthYear[0] = "January";
            monthYear[1] = "February";
            monthYear[2] = "March";
            monthYear[3] = "April";
            monthYear[4] = "May";
            monthYear[5] = "June";
            monthYear[6] = "July";
            monthYear[7] = "August";
            monthYear[8] = "September";
            monthYear[9] = "October";
            monthYear[10] = "November";
            monthYear[11] = "December";

            for (month=0; month<12; month++) {
                var d = new Date(year,month,13);
                if(d.getDay() == 5){
                    monthSpooky = monthSpooky + " " +monthYear[month];
                }
            }
            alert(monthSpooky);  
        }

        console.log(numberOfFridaythe13thsIn(document.getElementById("year").value));
    });
   
})();
