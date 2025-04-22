// oggetto math e suoi metodi
// math.random() produce un numero casuale tra 0 e 1
let target = document.getElementById("target");
let target2 = document.getElementById("target2");
let numRandom = Math.ceil(Math.random() * 100);
target.innerHTML = numRandom;

// math.ceil() e math.floor()
// ceil arrotonda all'intero superiore
// floor arrotonda all'intero inferiore

let mioNum = 5.9;
console.log((Math.ceil(mioNum)));
console.log((Math.floor(mioNum)));

// se volessi ottenere un numero casuale tra 1 e 10
let numCasuale = Math.ceil(Math.random() * 20);
target2.innerHTML = numCasuale;

// se volessi ottenre un numero casuale tra 15 e 25
let numCasuale2 = Math.ceil(Math.random() * 10) + 15;
console.log(`numCasuale2 = ${numCasuale2}`);

// ABS valore assoluto
let a = Math.abs(-9);
console.log(a);

// radice
let b = 64;
let radB = Math.sqrt(b);
console.log(radB);

// potenza
let c = 5
let powC = Math.pow(c,2);
console.log(powC);

// round - arrotonda in modo classico
let d = 12.49;
let rD = Math.round(d);
console.log(rD);

let e = 12.5;
let rE = Math.round(e);
console.log(rE);

const PI = Math.PI;
console.log(PI);

