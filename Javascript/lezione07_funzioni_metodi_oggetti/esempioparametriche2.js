// let inputRaggio = document.getElementById("inputRaggio");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function calcolaArea(raggio){
    let areaCerchio = Math.PI * Math.pow(raggio, 2);
    return areaCerchio;
}

// console.log(areaCerchio); quessto non funziona
// console.log((calcolaArea(6))); questo funziona



function calcolaVolume(raggio){
    let volume = (4/3) * Math.PI * Math.pow(raggio, 3);
    return volume;
}

function prendiRaggio(){
    // let raggio = inputRaggio.value;
    let raggio = Number(document.getElementById("inputRaggio").value);

    let area = calcolaArea(raggio).toFixed(3);
    let volume = calcolaVolume(raggio).toFixed(3);

    if(raggio == 0 || raggio < 0){
        demo.innerHTML = "<br>Inserisci un numero!"
    }else{
        demo.innerHTML = `<p>L'area vale: ${area}</p><p>Il volume vale: ${volume}</p>`;
    }
}

btn.addEventListener("click", prendiRaggio);

// esempio operatore ternario con funzioni
let accesa = true;

function spegni(){
    accesa = false;
}

function accendi(){
    accesa = true;
}

// if(accesa){
//     spegni();
// }else{
//     accendi();
// }

accesa ? spegni(): accendi();