let i = 1;
let msg = "";

while(i <= 10){
    let risultato = i * 7;
    msg = `${i} x 7 = ${risultato}`;
    console.log(msg);
    i++;
}

// lucchetto
// hai un numero indefinito di tentativi per trovare il numero segreto (da 1 a 100)
const NUMERO_SEGRETO = 9;
let tentativo = 0;
let tentativi = 0;

while(tentativo != NUMERO_SEGRETO){
    tentativo = prompt("Inserisci un numero per scoprire se si apre il lucchetto");
    tentativi++;

    if(tentativo == NUMERO_SEGRETO){
        console.log(`Bravo, hai aperto il lucchetto. Hai usato ${tentativi} tentativi`);
        break;
    }else if(tentativo < NUMERO_SEGRETO){
        console.log("Il numero segreto è più grande");
    }else{
        console.log("Il numero segreto è più piccolo");
        
    }
}

// do-while: prima esegue qualcosa, poi la controlla
do{

    tentativo = prompt("Inserisci un numero");
    tentativi++;

    if(tentativo == NUMERO_SEGRETO){
        // ...
    }

}while(tentativo != NUMERO_SEGRETO)