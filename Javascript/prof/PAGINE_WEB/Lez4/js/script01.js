let nomeUser = "Dario";
let etaUser = 35;

let saluto = "Ciao " + nomeUser + " hai " + etaUser + " anni !";
console.log(saluto);

let frase = "Il risultato è " + 3 * 6;
console.log(frase);

let a = 5;
let b = 9;
let somma = a + b ;

console.log("Il risultato è " + somma);

let c = "6";
let d = "7";
let somma2 = Number( c ) + Number( d );
console.log("La somma vale: " + somma2);
let prod2 = c * d; //In questo caso non necessita il casting perché il prodotto vale solo tra numeri ed essendo JS debolmente tipizzato interpreta le due stringhe c e d come numeri 
console.log("Il prod vale " + prod2);

let parola = "Oggi";
let parola2 = "Javascript";

console.log(parola * parola2);

