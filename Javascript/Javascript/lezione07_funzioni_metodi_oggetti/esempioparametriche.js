let demo = document.getElementById("demo");

function calcolaArea(base, altezza){
    let area = base * altezza;
    demo.innerHTML += `Base: ${base} - Altezza: ${altezza}.<br>L'area vale: ${area}`;

    // con questa parola chiave mi faccio restituire il valore della variabile area
    // si può pensare come un parametro d'uscita
    // se una funzione mi restituisce un valore dovrò raccoglierlo da qualche parte
    return area;
}

// calcolaArea(4,6);

function calcolaVolume(base, altezza, profondita){
    // let volume = base * altezza * profondita;
    
    // salvo il valore di restituzione della funzione calcolaArea all'interno della variabile miaArea
    let miaArea = calcolaArea(base, altezza);
    let volume = miaArea * profondita;
    
    demo.innerHTML += `<br>Il volume vale: ${volume}<br>`;
}

calcolaVolume(4,6,8);

function calcolaVolume2(area, profondita){
    let volume = area * profondita;
    demo.innerHTML += (`<br>Il volume2 vale: ${volume}<br>`);   
}

let area = calcolaArea(5,6);

calcolaVolume2(area, 9);

calcolaVolume2(calcolaArea(7,8), 9);