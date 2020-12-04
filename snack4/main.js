/*=============================================
    =            SNACK 4 CALCIO  =
=============================================*/

/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, 
le altre saranno tutte settate a 0. */

/* Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti */


var squadra = [
    {
        nome: "Samp",
        punti: 0,
        falli: 0
    },
    {
        nome: "Genoa",
        punti: 0,
        falli: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    }
]


for (var i = 0; i < squadra.length; i++) { 

    // Generiamo numeri random da inserire al posto di punti e falli
    var puntiRandom = (Math.floor(Math.random() * 11));
    var falliRandom = (Math.floor(Math.random() * 11));

    squadra[i].punti = puntiRandom;
    squadra[i].falli = falliRandom;    
} 


for (var key in squadra) {
    console.log(squadra[key]);
} 



