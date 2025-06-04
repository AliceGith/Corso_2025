document.querySelectorAll('.expandable-header').forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;
        parent.classList.toggle('active');
    });
});

// esercizio 1
let numeriEsercizio1 = [];
let numeroGrande1 = 0;

let printNumeriEsercizio1 = document.getElementById("numeriEstratti1");
let printNumeroGrande1 = document.getElementById("numeroGrande1");
let btnRefreshEsercizio1 = document.getElementById("btnRefreshEsercizio1");

function esercizio1(){
    numeriEsercizio1 = [];
    numeroGrande1 = 0;
    for(let i = 0; i < 5; i++){
        let numeriRandom1 = Math.ceil(Math.random() * 100);
        numeriEsercizio1.push(numeriRandom1);
        if(numeriEsercizio1[i] > numeroGrande1){
            numeroGrande1 = numeriEsercizio1[i]
        }
    }
    printNumeriEsercizio1.innerHTML = "I numeri estratti sono: " + numeriEsercizio1.join(" ");
    printNumeroGrande1.innerHTML = "Il più grande è: " + numeroGrande1;
}

esercizio1();
btnRefreshEsercizio1.addEventListener("click", esercizio1);

// esercizio 2

let numeriEsercizio2Pari = document.getElementById("numeriEsercizio2Pari");
let numeriEsercizio2Dispari = document.getElementById("numeriEsercizio2Dispari");

for(let i = 0; i <= 15; i++){
    if(i % 2 == 0){
        numeriEsercizio2Pari.innerHTML += i + " ";
    }else{
        numeriEsercizio2Dispari.innerHTML += i + " ";
    }
}

// esercizio 3

let numeriEsercizio3 = document.getElementById("numeriEsercizio3");
let outputEsercizio3 = "";

for(let i = 1; i <= 100; i++){
    let textEsercizio3 = "";
    if(i % 3 == 0 && i % 5 == 0){
        textEsercizio3 = i + " - Bangarang ";
    }else if(i % 3 == 0){
        textEsercizio3 = i + " - Zoom ";
    }else if(i% 5 == 0){
        textEsercizio3 = i + " - Boom ";
    }else{
        textEsercizio3 = i;
    }
    outputEsercizio3 += `<div>${textEsercizio3}</div>`;
}

numeriEsercizio3.innerHTML = outputEsercizio3;

// esercizio 4

let targetEsercizio4 = document.getElementById("targetEsercizio4");
let riga = ""

for(let i = 1; i <= 5; i++){
    for(let j = 1; j < i; j++){
        riga += "<img src=./rubber_duck_icon.png>";
    }   
    targetEsercizio4.innerHTML += riga + "<br>";
    riga = "";
}

// esercizio 5

let esercizio5Multipli3 = document.getElementById("esercizio5Multipli3");
let esercizio5Multipli5 = document.getElementById("esercizio5Multipli5");
let esercizio5Risultato = document.getElementById("esercizio5Risultato");

let esercizio5Counter3 = 0;
let esercizio5Counter5 = 0;
let esercizio5Somma = 0;

for(let i = 1; i <= 1000; i++){
    if(i % 3 == 0 && i % 5 == 0){
        esercizio5Counter3++;
        esercizio5Counter5++;
        esercizio5Somma = esercizio5Somma + i;
    }else if(i % 3 == 0){
        esercizio5Counter3++;
        esercizio5Somma = esercizio5Somma + i;
    }else if(i % 5 == 0){
        esercizio5Counter5++;
        esercizio5Somma = esercizio5Somma + i;
    }    
}

esercizio5Multipli3.innerHTML += esercizio5Counter3;
esercizio5Multipli5.innerHTML += esercizio5Counter5;
esercizio5Risultato.innerHTML += esercizio5Somma;

// esercizio 6

let esercizio6Input = document.getElementById("esercizio6Input");
let btnEsercizio6 = document.getElementById("btnEsercizio6");
let targetEsercizio6 = document.getElementById("targetEsercizio6");
let righeEsercizio6 = 0;
let arrayEsercizio6 = [];

function esercizio6(){
    targetEsercizio6.innerHTML = "";
    arrayEsercizio6 = [];
    righeEsercizio6 = esercizio6Input.value;
    for(let i = 1; i <= righeEsercizio6; i++ ){
        arrayEsercizio6.push(i);
        targetEsercizio6.innerHTML += arrayEsercizio6.join(" ") + "<br>";
    }
}

btnEsercizio6.addEventListener("click", esercizio6);
esercizio6Input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        esercizio6();
    }
});

// esercizio 7

let esercizio7Input = document.getElementById("esercizio7Input");
let btnEsercizio7 = document.getElementById("btnEsercizio7");
let targetEsercizio7 = document.getElementById("targetEsercizio7");
let righeEsercizio7 = 0;
let rigaEsercizio7 = "";
let esercizio7Counter = 0;

function esercizio7(){
    targetEsercizio7.innerHTML = "";
    esercizio7Counter = 0;
    righeEsercizio7 = esercizio7Input.value;
    for(let i = 1; i <= righeEsercizio7; i++ ){
        for(let j = 1; j <= i; j++){
            esercizio7Counter++;
            rigaEsercizio7 += esercizio7Counter + " ";
        }
        targetEsercizio7.innerHTML += rigaEsercizio7 + "<br>";
        rigaEsercizio7 = "";
    }
}

btnEsercizio7.addEventListener("click", esercizio7);
esercizio7Input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        esercizio7();
    }
});

// esercizio 8

let esercizio8Input = document.getElementById("esercizio8Input");
let btnEsercizio8 = document.getElementById("btnEsercizio8");
let targetEsercizio8 = document.getElementById("targetEsercizio8");
let rigaEsercizio8 = "";

function esercizio8(){
    targetEsercizio8.innerHTML = "";
    righeEsercizio8 = esercizio8Input.value;
    for(let i = 1; i <= righeEsercizio8; i++){
        for(let j = 1; j <= i; j++){
            rigaEsercizio8 += "<img src=./rubber_duck_icon.png>";
        }
        targetEsercizio8.innerHTML += rigaEsercizio8  + "<br>"
        rigaEsercizio8 = "";
    }
}

btnEsercizio8.addEventListener("click", esercizio8);
esercizio8Input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        esercizio8();
    }
});

// esercizio 9

// vado a prendere l'input inserito dall'utente
let esercizio9Input = document.getElementById("esercizio9Input");
// il bottone che fa partire il programma
let btnEsercizio9 = document.getElementById("btnEsercizio9");
// dove vado a scrivere nella pagina
let targetEsercizio9 = document.getElementById("targetEsercizio9");
// inizializzo una variabile in cui andrò a mettere l'input inserito
let inputEsercizio9 = 0;
// inizializzo l'array che utilizzerò per la stampa
let risultatoEsercizio9 = [];

function esercizio9(){
    // pulisce la pagina nel momento in cui fai partire nuovamente la funzione (es. se metti un numero e poi ne metti un altro)
    targetEsercizio9.innerHTML = "";
    // recupero e assegno il valore inserito
    inputEsercizio9 = esercizio9Input.value;
    // populo l'array usando lo split dell'input
    risultatoEsercizio9 = inputEsercizio9.split("");   
    // classico ciclo for fino alla lunghezza dell'array 
    for(let i = 0; i < risultatoEsercizio9.length; i++){
        // qua si fa il controllo se due numeri pari sono vicini. quindi se il numero all'indice i è pari e se il numero all'indice i+1 è pari
        if(risultatoEsercizio9[i] % 2 == 0 && risultatoEsercizio9[i+1] % 2 == 0){
            // stampo in caso la condizione sia true il numero aggiungendo il trattino
            targetEsercizio9.innerHTML += risultatoEsercizio9[i] + " - ";
        }else{
            // stampo in caso la condizione sia false solo il numero
            targetEsercizio9.innerHTML += risultatoEsercizio9[i];
        }
    }
};

// faccio partire la funzione se viene cliccato il bottone
btnEsercizio9.addEventListener("click", esercizio9);
// faccio partire la funzione se si preme enter nel campo input
esercizio9Input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        esercizio9();
    }
});

// esercizio 10

let letteraEsercizio10Target = document.getElementById("letteraEsercizio10Target");
let esercizio10NomiInput = document.getElementById("esercizio10NomiInput");
let esercizio10CoseInput = document.getElementById("esercizio10CoseInput");
let esercizio10CittaInput = document.getElementById("esercizio10CittaInput");
let esercizio10AnimaliInput = document.getElementById("esercizio10AnimaliInput");
let esercizio10LibriInput = document.getElementById("esercizio10LibriInput");
let btnEsercizio10NuovaLettera = document.getElementById("btnEsercizio10NuovaLettera");
let btnEsercizio10 = document.getElementById("btnEsercizio10");
let targetEsercizio10 = document.getElementById("targetEsercizio10");

let esercizio10Nomi = "";
let esercizio10Cose = "";
let esercizio10Citta = "";
let esercizio10Animali = "";
let esercizio10Libri = "";

let risultatoEsercizio10 = [];

let lettere = "ABCDEFGHILMNOPQRSTUVZ";
let letteraEsercizio10 = lettere[Math.floor(Math.random() * lettere.length)];
let letteraEsercizio10Temp = "";

letteraEsercizio10Target.innerHTML = "Lettera selezionata: " + letteraEsercizio10;

function esercizio10NuovaLettera(){
    letteraEsercizio10Target.innerHTML = "";
    esercizio10NomiInput.value = "";
    esercizio10CoseInput.value = "";
    esercizio10CittaInput.value = "";
    esercizio10AnimaliInput.value = "";
    esercizio10LibriInput.value = "";

    letteraEsercizio10Temp = lettere[Math.floor(Math.random() * lettere.length)];
    while (letteraEsercizio10Temp == letteraEsercizio10){
        letteraEsercizio10Temp = lettere[Math.floor(Math.random() * lettere.length)];
    }
    letteraEsercizio10 = letteraEsercizio10Temp;

    letteraEsercizio10Target.innerHTML = "Lettera selezionata: " + letteraEsercizio10;
    targetEsercizio10.innerHTML = "";
}

function esercizio10(){
    esercizio10Nomi = esercizio10NomiInput.value;
    esercizio10Cose = esercizio10CoseInput.value;
    esercizio10Citta = esercizio10CittaInput.value;
    esercizio10Animali = esercizio10AnimaliInput.value;
    esercizio10Libri = esercizio10LibriInput.value;

    if(esercizio10Nomi.toUpperCase().charAt(0) == letteraEsercizio10 && esercizio10Cose.toUpperCase().charAt(0) == letteraEsercizio10 && esercizio10Citta.toUpperCase().charAt(0) == letteraEsercizio10 && esercizio10Animali.toUpperCase().charAt(0) == letteraEsercizio10 && esercizio10Libri.toUpperCase().charAt(0) == letteraEsercizio10){

        risultatoEsercizio10[0] = esercizio10Nomi;
        risultatoEsercizio10[1] = esercizio10Cose;
        risultatoEsercizio10[2] = esercizio10Citta;
        risultatoEsercizio10[3] = esercizio10Animali;
        risultatoEsercizio10[4] = esercizio10Libri;

        targetEsercizio10.innerHTML = risultatoEsercizio10.join(" - ") + "<br>Complimenti! :)";
    }else{
        targetEsercizio10.innerHTML = "Non sai giocare :(";
    }
}

btnEsercizio10NuovaLettera.addEventListener("click", esercizio10NuovaLettera);
btnEsercizio10.addEventListener("click", esercizio10);

// esercizio 11

let targetEsercizio11 = document.querySelector("#targetEsercizio11");
let targetEsercizio11Risolto = document.querySelector("#targetEsercizio11Risolto");
let targetEsercizio11Duplicati = document.querySelector("#targetEsercizio11Duplicati");
let btnEsercizio11 = document.querySelector("#btnEsercizio11");

let arrayEsercizio11 = [];
let arrayEsercizio11Risolto = [];
let arrayEsercizio11Duplicati = [];

for(let i = 0; i < 50; i++){
    arrayEsercizio11.push(Math.floor(Math.random() * 25));
}

targetEsercizio11.innerHTML = "Array di partenza:<br>" + arrayEsercizio11.join(" ");

arrayEsercizio11.forEach(numero =>{
    if(!arrayEsercizio11Risolto.includes(numero)){        
        arrayEsercizio11Risolto.push(numero);
    }else{
        arrayEsercizio11Duplicati.push(numero);        
    }
});

targetEsercizio11Risolto.innerHTML = "Array risolto:<br>" + arrayEsercizio11Risolto.join(" ");
targetEsercizio11Duplicati.innerHTML = "Duplicati:<br>" + arrayEsercizio11Duplicati.join(" ");

btnEsercizio11.addEventListener("click", ()=>{
    arrayEsercizio11 = [];
    arrayEsercizio11Risolto = [];
    arrayEsercizio11Duplicati = [];
    for(let i = 0; i < 50; i++){
        arrayEsercizio11.push(Math.floor(Math.random() * 25));
    }
    targetEsercizio11.innerHTML = "Array di partenza:<br>" + arrayEsercizio11.join(" ");
    arrayEsercizio11.forEach(numero =>{
        if(!arrayEsercizio11Risolto.includes(numero)){        
            arrayEsercizio11Risolto.push(numero);
        }else{
            arrayEsercizio11Duplicati.push(numero);        
        }
    });
    targetEsercizio11Risolto.innerHTML = "Array risolto:<br>" + arrayEsercizio11Risolto.join(" ");
    targetEsercizio11Duplicati.innerHTML = "Duplicati:<br>" + arrayEsercizio11Duplicati.join(" ");
});

// esercizio 12

let targetEsercizio12Uno = document.querySelector("#targetEsercizio12Uno");
let targetEsercizio12Due = document.querySelector("#targetEsercizio12Due");
let targetEsercizio12Risolto = document.querySelector("#targetEsercizio12Risolto");

let array1 = [1, 0, 2, 4, 6];
let array2 = [0, 4, 5, 8, 7];

targetEsercizio12Uno.innerHTML = "Array uno:<br>" + array1.join(" ");
targetEsercizio12Due.innerHTML = "Array due:<br>" + array2.join(" ");

let arraySomma = [];

for(let i = 0; i < array1.length; i++){
    arraySomma[i] = array1[i] + array2[i];
}

targetEsercizio12Risolto.innerHTML = "Array Somma:<br>" + arraySomma.join(" ");

// esercizio 13

let targetEsercizio13Uno = document.querySelector("#targetEsercizio13Uno");
let targetEsercizio13Due = document.querySelector("#targetEsercizio13Due");
let targetEsercizio13Risolto = document.querySelector("#targetEsercizio13Risolto");
let btnEsercizio13 = document.querySelector("#btnEsercizio13");

let arrayEsercizio13Uno = [];
let arrayEsercizio13Due = [];
let arrayEsercizio13Risolto = [];

for(let i = 0; i < 10; i++){
    arrayEsercizio13Uno.push(Math.ceil(Math.random() * 10));
    arrayEsercizio13Due.push(Math.ceil(Math.random() * 10));
}

targetEsercizio13Uno.innerHTML = "Array Uno:<br>" + arrayEsercizio13Uno.join(" ");
targetEsercizio13Due.innerHTML = "Array Due:<br>" + arrayEsercizio13Due.join(" ");

arrayEsercizio13Uno.forEach(numero => {
    if(!arrayEsercizio13Due.includes(numero)){
        arrayEsercizio13Risolto.push(numero);
    }
});
arrayEsercizio13Due.forEach(numero => {
    if(!arrayEsercizio13Uno.includes(numero)){
        arrayEsercizio13Risolto.push(numero);
    }
});

targetEsercizio13Risolto.innerHTML = "Array Risolto:<br>" + arrayEsercizio13Risolto.join(" ");

btnEsercizio13.addEventListener("click", ()=>{
    arrayEsercizio13Uno = [];
    arrayEsercizio13Due = [];
    arrayEsercizio13Risolto = [];

    for(let i = 0; i < 10; i++){
        arrayEsercizio13Uno.push(Math.ceil(Math.random() * 10));
        arrayEsercizio13Due.push(Math.ceil(Math.random() * 10));
    }

    targetEsercizio13Uno.innerHTML = "Array Uno:<br>" + arrayEsercizio13Uno.join(" ");
    targetEsercizio13Due.innerHTML = "Array Due:<br>" + arrayEsercizio13Due.join(" ");

    arrayEsercizio13Uno.forEach(numero => {
        if(!arrayEsercizio13Due.includes(numero)){
            arrayEsercizio13Risolto.push(numero);
        }
    });
    arrayEsercizio13Due.forEach(numero => {
        if(!arrayEsercizio13Uno.includes(numero)){
            arrayEsercizio13Risolto.push(numero);
        }
    });

    targetEsercizio13Risolto.innerHTML = "Array Risolto:<br>" + arrayEsercizio13Risolto.join(" ");

});

// esercizio 14