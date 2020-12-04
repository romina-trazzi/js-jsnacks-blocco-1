
/*===============================================
=            CODICE JS BICICLETTE            =
=================================================*/

/* Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

var biciclette = [
    {
        nome: "bici A",
        peso: 10
    },

    {
        nome: "bici B",
        peso: 12
    },

    {
        nome: "bici C",
        peso: 5
    }
]


var flag = biciclette[0].peso;

for (var i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < flag) {
        flag = biciclette[i]; 
    }
}

console.log(flag);


