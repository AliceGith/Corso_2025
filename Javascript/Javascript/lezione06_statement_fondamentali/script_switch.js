// lo switch permette di valutare il valore di una variable stabilendo dei punti in cui far accadere qualcosa

let msg = "";
let livello = 0;

switch(livello){
    
    case 1:
        msg = "Ciao giocatore, sei al primo livello";
    break; //interrompe l'esecuzione del costrutto

    case 2:
        msg = "Ciao giocatore, questo è solo il secondo livello";
    break;

    case 3:
        msg = "Ciao giocatore, sei all'ultimo livello. Vediamo come te la cavi con il boss finale!";
    break;

    default:
        msg = "Ciao giocatore";
    break;
}

console.log(msg);

let tipoAbbonamento = "mensile";

switch(tipoAbbonamento){

    case "mensile":
        console.log("Paga 12 euro al mese");
    break;

    case "annuale":
        console.log("Paga 120 euro all'anno");
    break;

    default:
        console.log("Abbonamento non selezionabile");
    break;
}