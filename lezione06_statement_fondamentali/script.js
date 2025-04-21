// ho un numero. Voglio capire se questo numero è multiplo di 3 o un multiplo di 5 o un multiplo di 3 e 5
let numero = 6;

if(numero % 3 == 0 && numero % 5 == 0){
    console.log("Il numero " + numero + " è divisibile per 3 e 5");    
}else if(numero % 3 == 0){
    console.log("Il numero " + numero + " è divisibile solo per 3");    
}else if(numero % 5 == 0){
    console.log("Il numero " + numero + " è divisibile solo per 5");    
}else{
    console.log("Il numero " + numero + " non è divisibile nè per 3 nè per 5 nè per entrambi");    
}

/////////////////////////

// festa +18 e invito

let eta = 18;
let invito = true;

if(eta >= 18 && invito == true){
    console.log("Benvenuto alla festa");
}else if(eta >= 18){
    console.log("Mi spiace, non hai l'invito");
}else if(invito == true){
    console.log("Mi spiace, sei troppo piccolo");
}else{
    console.log("Mi spiace, non hai nè l'invito nè l'età");
}

if(eta >= 18 && invito){
    console.log("Benvenuto, puoi entrare!");
}else if(eta < 18 && invito){
    console.log("Mi spiace, sei troppo piccolo anche se hai l'invito");
}else if(eta >= 18 && !invito){
    console.log("Mi spiace, non hai un invito");
}else{
    console.log("Torna fra qualche anno con un invito");
}

// operatore ternario - funziona quando la condizione è binaria
// condizione ? esegui se true : esegui se false

let pioggia = true;
let msg = pioggia ? "Porta un ombrello" : "Non portare l'ombrello";
console.log(msg);

let msg2 = !pioggia ? "Non portare l'ombrello" : "Porta l'ombrello";
console.log(msg2);
