let carrelloWrapper = document.querySelector(".carrelloWrapper");
let totale = document.querySelector(".totale");

function carrello(gioco){    
    let arrayCarrello = localStorage.getItem("listaCarrello");
    
    arrayCarrelloParsed = JSON.parse(arrayCarrello);
    
    let totaleCarrello = 0;
    
    arrayCarrelloParsed.forEach(gioco => {
        let li = document.createElement("li");
        let copertina = document.createElement("img");
        let dati = document.createElement("i");

        copertina.setAttribute("src", "../"+gioco.copertina);
        copertina.classList.add("copertina");

        dati.textContent = gioco.titolo + " " + gioco.prezzo;

        let btnRemove = document.createElement("button");
        btnRemove.textContent = "Rimuovi";
        btnRemove.addEventListener("click", ()=>{
            let idGioco = arrayCarrelloParsed.indexOf(gioco);            
            arrayCarrelloParsed.splice(idGioco, 1);
            let arrayCarrelloStringified = JSON.stringify(arrayCarrelloParsed);
            localStorage.setItem("listaCarrello", arrayCarrelloStringified);
            carrelloWrapper.removeChild(li);

            let prezzoNumerico = gioco.prezzo.replace("€", "");
            let prezzoNumericoNumber = parseFloat(prezzoNumerico);
            totaleCarrello -= prezzoNumericoNumber;
            totaleDaStampare.textContent = "€"+totaleCarrello.toFixed(2);
            totale.appendChild(totaleDaStampare);
            console.log(totaleCarrello);
            
        });

        li.appendChild(copertina);
        li.appendChild(dati);
        li.appendChild(btnRemove);
        carrelloWrapper.appendChild(li);
        
        let prezzoNumerico = gioco.prezzo.replace("€", "");
        let prezzoNumericoNumber = parseFloat(prezzoNumerico);
        totaleCarrello += prezzoNumericoNumber;
        
    });
    let totaleDaStampare = document.createElement("p");
    totaleDaStampare.textContent = "€"+totaleCarrello.toFixed(2);
    totale.appendChild(totaleDaStampare);
}

document.addEventListener("DOMContentLoaded", carrello);
