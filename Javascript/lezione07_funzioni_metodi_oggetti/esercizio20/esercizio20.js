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
    }else{
        textEsercizio3 = i + " - Boom ";
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