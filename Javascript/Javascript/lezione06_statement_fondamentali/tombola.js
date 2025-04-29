// ho un sacchetto con 90 numeri
// devo estrarne 10. Attenzione però, i numeri estratti non devono ripetersi
// attenzione: non scrivere un array con 90 numeri

// una soluzione col for
// una soluzione col while
// una soluzione con due for e if
// una soluzione solo con for senza if (l'array dei numeri da estrarre serve solo in questo caso)(farsi popolare l'array da un ciclo for)

let estrazioneFor = document.getElementById("estrazioneFor");
let estrazioneWhile = document.getElementById("estrazioneWhile");
let estrazioneFor2 = document.getElementById("estrazioneFor2");
let estrazioneProfio = document.getElementById("estrazioneProfio");

// soluzione uno

let numeriEstratti1 = [];

for(let i = 0; i < 10; i++){
    let numEstratto1 = Math.ceil(Math.random() * 90);  
    if(numeriEstratti1.includes(numEstratto1)){
        i--;
    }else{
        numeriEstratti1.push(numEstratto1);
        estrazioneFor.innerHTML += " " + numeriEstratti1[i];
    }
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

let numeriEstratti3 = [];
let giri = 0;

for(i = 0; i < 10; i++){
    let numEstratto3 = Math.ceil(Math.random() * 90);
    for(let j = 0; j < numeriEstratti3.length; j++){
        if(numeriEstratti3[j] == numEstratto3){
            continue;
        }
    }
    numeriEstratti3.push(numEstratto3);
}

estrazioneFor2.innerHTML += " " + numeriEstratti3.join(' ');

// soluzione 4

let numeriEstratti4 = [];
let numeriProfio = [];

for(i = 0; i < 90; i++){
    numeriProfio[i] = i+1;
}
for(i = 0; numeriEstratti4.length < 10; i++){
    let randomIndex = Math.floor(Math.random() * numeriProfio.length);
    let numEstratto4 = numeriProfio.splice(randomIndex,1)[0];
    numeriEstratti4.push(numEstratto4);
}
estrazioneProfio.innerHTML += " " + numeriEstratti4.join(' ');
