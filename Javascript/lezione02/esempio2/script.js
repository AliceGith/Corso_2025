let nome = prompt("Come ti chiami?");
let cognome = prompt("Qual è il tuo cognome?");

let nomCog = nome.charAt(0).toUpperCase()+nome.slice(1)+" "+cognome.charAt(0).toUpperCase()+cognome.slice(1);

let targetNome = document.getElementById("targetNome");
let targetNumeri = document.getElementById("targetNumeri");

targetNome.innerHTML = "Ciao " + nomCog;

document.addEventListener("DOMContentLoaded", () => {
    let num1 = Number(prompt("Inserisci il primo numero"));
    let num2 = Number(prompt("Inserisci il secondo numero"));
    let somma = num1 + num2;
    targetNumeri.innerHTML = "Numero uno: "+num1+"<br>Numero due: "+num2+"<br><br>Somma: "+somma;    
})

