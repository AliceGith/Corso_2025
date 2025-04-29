let numero = 10;

console.log(numero);

numero++;

console.log(numero);
console.log(numero++);
console.log(numero);

numero--;

console.log(numero);
console.log(numero--);
console.log(numero);

++numero;
--numero;

console.log(numero);
console.log(++numero);

//////////////////////////////////////////////////////////////

let numero2 = 12;

let resto2 = numero2 % 2;
console.log("Il resto della divisione per 2 vale "+resto2);

let resto7 = numero2 % 7;
console.log("Il resto della divisione per 7 vale "+resto7);

let numero3 = 121;
console.log("numero3 è multiplo di 3 se modulo = 0: " + numero3%3);

/////////////////////////////////////////////////////////////

let numero4 = 24;
let numero5 = 18;

// numero4 = numero4 + numero5;
numero4 += numero5;
numero4 += 100;
numero4 -= 50;
console.log(numero4);


let parole = ["Ciao","come","stai"];
let frase = "";
parole.forEach(parola =>{
    frase += parola + " ";
})
console.log(frase);
