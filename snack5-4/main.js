/*=============================================
    =            CODICE SNACK 5-4           =
=============================================*/

/* Scrivi una funzione che fonda due array (con lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro

es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

var numeri = [1, 2, 3, 4, 5];
var lettere = ["d","f","g","h","l"];
var nuovoArray = [];

function mixArray(lettera, numero) {
     var i=0;
     while(nuovoArray.length != (numeri.length + lettere.length)) {
         nuovoArray.push(numero[i], lettera[i]);
         i++;
     }
 }

 mixArray(numeri, lettere);

 console.log(mixArray);