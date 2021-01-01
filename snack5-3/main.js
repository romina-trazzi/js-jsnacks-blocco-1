/*=============================================
    =            CODICE SNACK 5-3            =
=============================================*/

/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

var arrayMaggiore15 = [];
var arrayMinore15 = [];

var zucchine = {

    "zucchinaUno": {
        lunghezza: 20 + "cm",
        peso: 1 
    },

    "zucchinaDue": {
        lunghezza: 18 + "cm",
        peso: 3 
    },

    "zucchinaTre": {
        lunghezza: 12 + "cm",
        peso: 5
    },

    "zucchinaQuattro": {
        lunghezza: 20 + "cm",
        peso: 2 
    },

    "zucchinaCinque": {
        lunghezza: 18 + "cm",
        peso: 4 
    },

    "zucchinaSei": {
        lunghezza: 12 + "cm",
        peso: 3
    },

    "zucchinaSette": {
        lunghezza: 20 + "cm",
        peso: 2 
    },

    "zucchinaOtto": {
        lunghezza: 18 + "cm",
        peso: 5 
    },

    "zucchinaNove": {
        lunghezza: 12 + "cm",
        peso: 2 
    },

    "zucchinaDieci": {
        lunghezza: 12 + "cm",
        peso: 4 
    }
}


// prendi la proprietà lunghezza di ciascun oggetto e verifica se il valore è > o < di 15
// aggiungi l'oggetto all'array corretto

var i = 0;

for (i in zucchine)  {
    var item = zucchine[i];
    if (zucchine[i].lunghezza < 15 + "cm") {
        arrayMinore15.push(item);
    } else {
        arrayMaggiore15.push(item);
    } 
}

console.log(arrayMinore15);
console.log(arrayMaggiore15);

// somma i pesi delle zucchine nei due array

// minore15

var sommaPesoMinore15 = 0;

for (j in arrayMinore15) {
    sommaPesoMinore15 += (arrayMinore15[j].peso);
}

console.log(sommaPesoMinore15 + "kg");

// maggiore15

var sommaPesoMaggiore15 = 0;

for (k in arrayMaggiore15) {
    sommaPesoMaggiore15 += (arrayMaggiore15[k].peso);
}

console.log(sommaPesoMaggiore15 + "kg");