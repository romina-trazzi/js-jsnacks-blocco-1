/*===============================================
=            CODICE JAVASCRIPT SNACKS            =
==================================================*/

/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10

Attraverso un prompt dare la possibilità all’utente 
di modificare il peso della palla. */


var palla = {
    nome: "palla generica",
    peso: "10 kg"
}

var userPrompt = Number(prompt("Inserisci il nuovo peso della palla"));

palla["peso"] = userPrompt + " kg";

console.log(palla.peso);

/* Metodo due

palla.peso = Number(prompt("Inserisci il nuovo peso della palla")); 

console.log(palla); */

