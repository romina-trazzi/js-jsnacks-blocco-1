/*=============================================
    =            CODICE SNACK 5-2            =
=============================================*/

var stringaRight = prompt("Inserisci una parola da rovesciare");
var reverse;

function isReverse(parola) { 
    var reverse = parola.split("").reverse().join("");
    return reverse;
}

var markup = 

   ` <div class = "parola_rovescia">
        <h2> ${stringaRight} diventa ` + isReverse(stringaRight) + `</h2>
    </div> `
    
document.getElementById("prova").insertAdjacentHTML("beforeend", markup)





