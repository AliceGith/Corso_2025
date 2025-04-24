function saluta(){
    console.log("Ciao Dario");
    
}

saluta();

///////////////////////
// indipendenza delle funzioni tra dichiarazione e richiamo

salutaStudenti();

function salutaStudenti(){
    console.log("Ciao Alice");
    console.log("Ciao Nico");
    console.log("Ciao Augustina");
    console.log("Ciao Gabriele");
    console.log("Ciao Leo");
    saluta();
}

/////////////////////

function salutaTutti(){
    saluta();
    salutaStudenti();
}

salutaTutti();