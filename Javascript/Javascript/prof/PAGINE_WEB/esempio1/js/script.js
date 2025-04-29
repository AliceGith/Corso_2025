
let nomeUser = prompt("Come ti chiami ?");
let benvenuto = document.getElementById("benvenuto");
benvenuto.innerHTML = "Ciao " + nomeUser;

//Chiedo i due numeri al mio user. Faccio il casting di entrambi i numeri poiché il prompt produce una stringa
let num1 = Number( prompt("Inserisci il primo numero") );
let num2 = Number( prompt("Inserisci un altro numero") );

let somma = num1 + num2;
let prod = num1 * num2;
let quoz = num1 / num2;
let diff = num1 - num2;

console.log("Somma: " + somma);
console.log("Prodotto: " + prod);
console.log("Quoziente: " + quoz);
console.log("Differenza: " + diff);

//Voglio stampare nella pagina i risultati

//Prendo il <p> con id = "risultati"
//il "risultati" deve corrispondere esattamente all'id che ho nello html
let res = document.getElementById("results"); //<p id="risultati"></p>
console.log(res);

//inietto delle string
res.innerHTML = "Somma: " + somma + "<br>Prodotto: " + prod + "<br>Quoziente: " + quoz + " <br>Differenza: " + diff;


