let mioNome;

mioNome = "Alice";

console.log(mioNome);

let miaEta = 33;

console.log(miaEta);

let saluto = "Ciao, mi chiamo " + mioNome + " e ho " + miaEta + " anni";
console.log(saluto);
alert(saluto);

console.log("Ciao, il mio nome è " + mioNome + " e adesso ho " + miaEta + " anni");

let nomeUser = "Paola"; //string
let etaUser = 25; //number
let stateUser = true; //boolean

console.log(typeof nomeUser);
console.log(typeof etaUser);
console.log(typeof stateUser);

let num1 = 8;
let num2 = "4";

// type casting: forzo una variabile ad essere di un determinato tipo
let somma = num1 + Number(num2);
let prod = num1 * num2;
let quoz = num1 / num2;
let sott = num1 - num2;

console.log(somma);
console.log(prod);
console.log(quoz);
console.log(sott);

let tuoNome = "Anna";

let tuoNumeroFortunato = prompt("Qual è il tuo numero fortunato?");

let numeroAltro = Number(tuoNumeroFortunato) + 10;

console.log("Da oggi il tuo numero fortunato sarà: " + numeroAltro);
