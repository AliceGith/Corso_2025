let nomeUser = prompt("Come ti chiami?");
let benvenuto = document.getElementById("benvenuto");
benvenuto.innerHTML = "Ciao " + nomeUser.charAt(0).toUpperCase()+nomeUser.slice(1);

let num1 = Number(prompt("Inserisci il primo numero"));
let num2 = Number(prompt("Inserisci il secondo numero"));

let somma = num1 + num2;
let prod = num1 * num2;
let quoz = num1 / num2;
let diff = num1 - num2;

console.log("Somma: " + somma);
console.log("Prodotto: " + prod);
console.log("Quoziente " + quoz);
console.log("Differenza: " + diff);

let risultati = document.getElementById("risultati");

risultati.innerHTML = "Somma: " + somma + "<br>Prodotto: " + prod + "<br>Quoziente: " + quoz + "<br>Differenza: " + diff;
