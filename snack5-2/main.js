/*=============================================
    =            CODICE SNACK 5-2            =
=============================================*/

var stringaRight = [prompt("Inserisci una parola da rovesciare")];

function isReverse (stringaRight) {
    return stringaRight.split("").reverse().join("");
}

console.log(isReverse(stringaRight));


