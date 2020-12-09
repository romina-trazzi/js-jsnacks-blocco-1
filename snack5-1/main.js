
/*=============================================
    =            CODICE SNACK 5-1            =
=============================================*/

var zucchine = [
    
    {
        varietà: "zucchinaUno",
        peso: 3,
        lunghezza: "20 cm"
    },

    {
        varietà: "zucchinaDue",
        peso: 4,
        lunghezza: "15 cm"
    },

    {
        varietà: "zucchinaTre",
        peso: 2,
        lunghezza: "10 cm"
    },

    {
        varietà: "zucchinaQuattro",
        peso: 3,
        lunghezza: "20 cm"
    },

    {
        varietà: "zucchinaCinque",
        peso: 4,
        lunghezza: "15 cm"
    },

    {
        varietà: "zucchinaSei",
        peso: 2,
        lunghezza: "10 cm"
    },

       {
        varietà: "zucchinaSette",
           peso: 3,
        lunghezza: "20 cm"
    },

    {
        varietà: "zucchinaOtto",
        peso: 4,
        lunghezza: "15 cm"
    },

    {
        varietà: "zucchinaNove",
        peso: 2,
        lunghezza: "10 cm"
    },

    {
        varietà: "zucchinaDieci",
        peso: 4,
        lunghezza: "10 cm"
    }
]

var sum = 0;

for (var i = 0; i < zucchine.length; i++) {
    var sum = sum + zucchine[i].peso;
}

console.log("La somma del peso delle zucchine è " + sum + " kg.");


