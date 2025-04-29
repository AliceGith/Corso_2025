let numero1 = 10;
let numero2 = 20;

let condizione = numero1 > numero2;

if(condizione){
    console.log("Numero 1 vale: " + numero1 + " ed è maggiore di Numero 2: " + numero2);
}else{
    console.log("Numero 1 vale: " + numero1 + " ed è minore di Numero 2: " + numero2);
}

// un utente deve fornire un numero maggiore di 100. Avvisalo in caso contrario

// let numeroUser = prompt("Inserisci un numero");

// if(numeroUser>=100){
//     console.log("Grazie, ho acquisito il tuo numero");
// }else{
//     console.log("Hai inserito un numero minore di 100"); 
// }

let nomeUser = "Paolino2";
let pasUser = "stellina58";

// if(nomeUser == "Paolino02" && pasUser == "stellina58"){
//     console.log("Ciao Paolino, ci conosciamo");
// }else{
//     console.log("Mi spiace, non conosco questo username");
// }

if(nomeUser == "Paolino2" || pasUser == "stellina58"){
    console.log("Ciao, puoi entrare anche se dovesse essere sbagliata una delle due condizioni");
}else{
    console.log("Mi spiace, entrambe le condizioni sono sbagliate");
}

