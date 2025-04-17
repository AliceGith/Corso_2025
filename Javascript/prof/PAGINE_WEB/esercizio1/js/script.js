let nome = prompt("Scrivi il tuo nome");
let cognome = prompt("Scrivi il tuo cognome");

let nomeUser = document.getElementById("nomeUser");
nomeUser.innerHTML = "Ciao " + nome + " " + cognome;

let num1 = Number( prompt("Inserisci un numero") );
let num2 = Number( prompt("Inserisci un altro numero") );
let somma = num1 + num2;

let risultati = document.getElementById("risultati");
risultati.innerHTML = "Primo numero: " + num1 + "<br>Secondo numero: " + num2 + "<br> Somma: " + somma;
