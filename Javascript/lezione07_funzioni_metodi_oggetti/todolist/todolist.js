let stampaOrologio = document.getElementById("stampaOrologio");
let input = document.getElementById("input");
let inserisciAttivita = document.getElementById("inserisciAttivita");
let attivitaDaFareStampa = document.getElementById("attivitaDaFareStampa");
let attivitaFatteStampa = document.getElementById("attivitaFatteStampa");
let attivitaCancellateStampa = document.getElementById("attivitaCancellateStampa");
let btnSvuotaAttivita = document.getElementById("svuotaAttivita");
let btnSvuotaAttivitaFatte = document.getElementById("svuotaAttivitaFatte");
let btnSvuotaAttivitaCancellate = document.getElementById("svuotaAttivitaCancellate");

let attivitaDaFareArray = [];
let attivitaDaFareArrayOrario = [];

let attivitaFatteArray = [];
let attivitaFatteArrayOrario = [];

let attivitaCancellateArray = [];
let attivitaCancellateArrayOrario = [];

function prendiOra() {
    let ora = new Date();
    let ora_ore = ora.getHours();
    if(ora_ore < 10){
        ora_ore = "0" + ora_ore;
    }
    let ora_minuti = ora.getMinutes();
    if(ora_minuti < 10){
        ora_minuti = "0" + ora_minuti;
    }
    let ora_secondi = ora.getSeconds();
    if(ora_secondi < 10){
        ora_secondi = "0" + ora_secondi;
    }
    ora_corrente = ora_ore + ":" + ora_minuti + ":" + ora_secondi;
    return ora_corrente;
}

function orologio() {
    let orologio = prendiOra();
    stampaOrologio.innerHTML = orologio;
}

function prendiAttivita() {
    if(input.value.trim() != ""){
        let orarioCorrente = prendiOra();
        attivitaDaFareArray.push(input.value);
        attivitaDaFareArrayOrario.push(orarioCorrente);
        if(attivitaDaFareArray.length > 5){
            let orarioCorrenteCancellato = prendiOra();
            attivitaCancellateArray.push(attivitaDaFareArray.shift());
            attivitaCancellateArrayOrario.push(orarioCorrenteCancellato);
            attivitaDaFareArrayOrario.shift();
            stampaAttivitaCancellate();
        }
    }  
    input.value = "";
    stampaAttivitaDaFare();
}

function stampaAttivitaDaFare() {
    attivitaDaFareStampa.innerHTML = "";
    attivitaDaFareArray.forEach((element, index) => {
        attivitaDaFareStampa.innerHTML += `<li> ${element} - ${attivitaDaFareArrayOrario[index]} <button class=btnFatto data-index=${index}><img src="./check.png"></button><button class=btnCancellaDaFare data-index=${index}> <img src="./canc.png"></button></li>`;
    });  
    let btnFatto = document.querySelectorAll(".btnFatto");
    btnFatto.forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(this.dataset.index);
            updateAttivitaDaFare(index, "fatto");
        });
    });  
    let btnCancellaDaFare = document.querySelectorAll(".btnCancellaDaFare");
    btnCancellaDaFare.forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(this.dataset.index);
            updateAttivitaDaFare(index, "cancellato");
        });
    });  
}

function stampaAttivitaFatte() {
    attivitaFatteStampa.innerHTML = "";
    attivitaFatteArray.forEach((element, index) => {
        attivitaFatteStampa.innerHTML += `<li> ${element} - ${attivitaFatteArrayOrario[index]} <button class=btnCancellato-fatte data-index=${index}><img src="./canc.png"></button></li>`;
    });
    let btnCancellatoFatte = attivitaFatteStampa.querySelectorAll(".btnCancellato-fatte");
    btnCancellatoFatte.forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(this.dataset.index);
            updateAttivitaFatte(index, "cancellato");
        });
    });  
}

function stampaAttivitaCancellate() {
    attivitaCancellateStampa.innerHTML = "";
    attivitaCancellateArray.forEach((element, index) => {
        attivitaCancellateStampa.innerHTML += "<li>" + element + " - " + attivitaCancellateArrayOrario[index]  + "</li>";
    }); 
}

function svuotaAttivita() {
    attivitaDaFareStampa.innerHTML = "";
    attivitaDaFareArray = [];
    attivitaDaFareArrayOrario = [];
}

function svuotaAttivitaFatte() {
    attivitaFatteStampa.innerHTML = "";
    attivitaFatteArray = [];
    attivitaFatteArrayOrario = [];
}

function svuotaAttivitaCancellate() {
    attivitaCancellateStampa.innerHTML = "";
    attivitaCancellateArray = [];
    attivitaCancellateArrayOrario = [];
}

function updateAttivitaDaFare(index, update) {
    let attivita = attivitaDaFareArray[index];
    let orarioCorrente = prendiOra();

    if(update == "fatto"){
        attivitaFatteArray.push(attivita);
        attivitaFatteArrayOrario.push(orarioCorrente);
        stampaAttivitaFatte();
    }else if(update == "cancellato"){
        attivitaCancellateArray.push(attivita);
        attivitaCancellateArrayOrario.push(orarioCorrente);
        stampaAttivitaCancellate();
    }
    attivitaDaFareArray.splice(index, 1);
    attivitaDaFareArrayOrario.splice(index, 1);
    stampaAttivitaDaFare();
}

function updateAttivitaFatte(index) {
    let attivita = attivitaFatteArray[index];
    let orarioCorrente = prendiOra();
    attivitaCancellateArray.push(attivita);
    attivitaCancellateArrayOrario.push(orarioCorrente);
    stampaAttivitaCancellate();
    attivitaFatteArray.splice(index, 1);
    attivitaFatteArrayOrario.splice(index, 1);
    stampaAttivitaFatte();
}

inserisciAttivita.addEventListener("click", prendiAttivita);
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        prendiAttivita();
    }
});

btnSvuotaAttivita.addEventListener("click", function(){
    setTimeout(svuotaAttivita, 2000);
});
btnSvuotaAttivitaFatte.addEventListener("click", function(){
    setTimeout(svuotaAttivitaFatte, 2000);
});
btnSvuotaAttivitaCancellate.addEventListener("click", function(){
    setTimeout(svuotaAttivitaCancellate, 2000);
});

setInterval(orologio, 100);