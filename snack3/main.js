
/*===============================================
=            CODICE JS TRIANGOLO            =
=================================================*/

/* Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.*/

var base = 20;
var altezza = 10;

var area = (base * altezza) / 2;

var ipotenusa = Number(Math.sqrt((base ** 2) + (altezza ** 2)).toFixed(2)); 
/* è radice quadrata dei quadrati costruiti sui due cateti
(base e altezza) */

console.log(ipotenusa);

var perimetro = base + altezza + ipotenusa;

console.log(area, perimetro);



