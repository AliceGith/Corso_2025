// ho un sacchetto con 90 numeri
// devo estrarne 10. Attenzione però, i numeri estratti non devono ripetersi
// attenzione: non scrivere un array con 90 numeri

// una soluzione col for
// una soluzione col while
// una soluzione con due for e if
// una soluzione solo con for senza if (l'array dei numeri da estrarre serve solo in questo caso)(farsi popolare l'array da un ciclo for)

let estrazioneFor = document.getElementById("estrazioneFor");
let estrazioneWhile = document.getElementById("estrazioneWhile");
let estrazioneProfio = document.getElementById("estrazioneProfio");

// soluzione uno

let numeriEstratti1 = [];

for(let i = 0; i < 10; i++){
    let numEstratto1 = Math.ceil(Math.random() * 90);  
    if(numeriEstratti1.includes(numEstratto1)){
        i--;
    }else{
        numeriEstratti1.push(numEstratto1);
    }
    estrazioneFor.innerHTML += " " + numeriEstratti1[i];
}

// soluzione due

let numeriEstratti2 = [];

while(numeriEstratti2.length<10){
    let numEstratto2 = Math.ceil(Math.random() * 90)
    if(!numeriEstratti2.includes(numEstratto2)){        
        numeriEstratti2.push(numEstratto2);
    }
}
estrazioneWhile.innerHTML += " " + numeriEstratti2.join(' ');

// soluzione 3

// soluzione 4

// let numeriEstratti3 = [];
// let numeriProfio = [];

// for(i = 0; i < 90; i++){
//     numeriProfio[i] = i+1;
// }
// for(i = 0; i < 10; i++){
//     randomIndex = Math.floor(Math.random() * 90)
    let numEstratto = numeriProfio.splice(randomIndex,1);
    numeriEstratti3.push(numeriProfio[numEstratto])
// }
// estrazioneProfio.innerHTML += " " + numeriEstratti3.join(' ');

// console.log(numeriEstratti3.length);
// sto pushando l'indice invece del numero

let arr = [1,2,3,4,5];
console.log(arr.splice(2,1));
console.log(arr);

