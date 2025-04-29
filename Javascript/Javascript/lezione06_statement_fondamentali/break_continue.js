// utilizzo di break
// break permette di uscire anticipatamente da un ciclo

// devo trovare un numero in particolare in una lista di numeri. appena lo trovo interrompi il ciclo anche se potrebbero essercene altri

let listaNumeri = [1,5,6,0,4,3,60,21,3,60];
let numDaCercare = 60;

let trovato = false;

// scorro l'array con un ciclo for
for(let i = 0; i < listaNumeri.length; i++){
    if(listaNumeri[i] == numDaCercare){
        trovato = true;
        console.log(`Trovato il numero ${numDaCercare} in posizione ${i}`);
        break;
    }
}

if(trovato){
    console.log("Ricerca completata");
}else{
    console.log("Nessuna corrispondenza");
}

// continue: salto un'iterazione, la bypasso completamente

// appena incontro un numero pari salta un giro per passare al numero successivo
let numeri = [2,5,6,7,4,1,12,33];

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] % 2 == 0){
        console.log("Salto un numero pari");
        continue; //questo salta un'interazione, un po' come se tornasse in cima al for
    }
    console.log(numeri[i]);
}


let numTrovati = 0;

console.log("MASSIMO 3 NUMERI");


for(let i = 0; i < numeri.length; i++){
    if(numeri[i] % 2 == 0){
        console.log("Trovato");
        numTrovati++;
        if(numTrovati >= 3){
            break;
        }
        console.log(numeri[i]);
    }
}