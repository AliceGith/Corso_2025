//ctrl + ù - Commento

//VARIABILE

//Dichiaro una variabile
let mioNome;

//Assegno un valore alla variabile
mioNome = "Dario";

//leggo il valore della variabile richiamandola
console.log(mioNome);

//dichiaro e assegno allo stesso momento
let miaEta = 35;
console.log(miaEta);

//Voglio stampare una miscela tra le due variabili
let saluto = "Ciao, mi chiamo " + mioNome + " e ho " + miaEta + " anni";
console.log(saluto);
alert(saluto);


//posso anche stamparlo senza l'usa di una variabile come saluto
console.log("Ciao, il mio nome è " + mioNome + " adesso ho " + miaEta + " anni");


//TIPI DI DATO - JS è debolmente tipizzato: esistono i tipi, semplicemente non li dichiaro, li lascio interpretare dal browser

let nomeUser = "Paola";  //String 
let etaUser = 25; //Number
let stateUser = true; //Boolean - può assumere solo ed esclusivamente 2 valori : true o false; 1 o 0;

console.log(typeof nomeUser);
console.log(typeof etaUser);
console.log(typeof stateUser);

//copiare riga: ALT + SHIFT + freccia su/giù 

let num1 = 8;
let num2 = "4";

// TYPE CASTING: forzo una variabile ad essere di un determinato tipo
let somma = num1 + Number( num2 ); //84
let prod = num1 * num2; 
let quoz = num1 / num2;
let sott = num1 - num2;

console.log(somma);
console.log(prod);
console.log(quoz);
console.log(sott);

let tuoNome = "Anna";
let tuoCognome = "Rossi";

console.log(tuoNome * tuoCognome); //NaN = Not a Number


/////////////////////////

let tuoNumeroFortunato = prompt("Qual è il tuo num fortunato ?"); 
let numeroAltro = Number( tuoNumeroFortunato ) + 10;
console.log("Da oggi il tuo nuovo numero fortunato sarà: " + numeroAltro);



/**IN ALTRI LINGUAGGI
 * JAVA
 * String nomeUser = "Paola"
 * int etaUser = 25;
 * boolean stateUser = true;
 * 
 * Typescript
 * nomeUser: string = "Paola"
 * etaUser: number = 25;
 * stateUser: boolean = true
 * presenza = false;
 */