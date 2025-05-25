let cardGioco = document.querySelector(".cardGioco");

function caricaGioco(){
    const urlGiochi = "http://localhost:3000/giochi";
    fetch(urlGiochi)
    .then(data => {return data.json()})
    .then(response =>{
        
        const queryString = window.location.search;
        const url = new URLSearchParams(queryString);
        const idGioco = url.get("id");
        const idGiocoParsed = parseInt(idGioco);        
        
        let gioco = response.find(giochi => giochi.id == idGiocoParsed);
        creaCard(gioco);    
    })
}

function creaCard(gioco){
    let card = document.createElement("div");
    card.classList.add("card");

    let titolo = document.createElement("h3");
    titolo.classList.add("titolo");
    titolo.textContent = gioco.titolo;
    
    let prezzo = document.createElement("p");
    prezzo.classList.add("prezzo");
    prezzo.textContent = gioco.prezzo;
    
    let copertina = document.createElement("img");
    copertina.classList.add("copertina");
    copertina.setAttribute("src", "../"+gioco.copertina);
    
    let dataUscita = document.createElement("p");
    dataUscita.classList.add("dataUscita");
    dataUscita.textContent = gioco.data_uscita;

    let btnAdd = document.createElement("button");
    btnAdd.textContent = "Aggiungi al carrello";
    btnAdd.addEventListener("click", ()=>{
        carrello(gioco);
    })
    // btnAdd.addEventListener("click", carrello(gioco));
    
    card.appendChild(copertina);
    card.appendChild(titolo);
    card.appendChild(prezzo);
    card.appendChild(dataUscita);
    
    gioco.generi.forEach(genereGioco =>{
        let genere = document.createElement("li");
        genere.textContent = genereGioco;
        card.appendChild(genere);
    });

    card.appendChild(btnAdd);
    cardGioco.appendChild(card);
}

function carrello(gioco){    
    let arrayCarrello = localStorage.getItem("listaCarrello");
    let arrayCarrelloParsed;

    if(arrayCarrello){
        arrayCarrelloParsed = JSON.parse(arrayCarrello);
    }else{
        arrayCarrelloParsed = [];
    }

    arrayCarrelloParsed.push(gioco);
    
    let arrayCarrelloStringified = JSON.stringify(arrayCarrelloParsed);
    localStorage.setItem("listaCarrello", arrayCarrelloStringified);
}

document.addEventListener("DOMContentLoaded", caricaGioco);