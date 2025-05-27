class Prodotto{
    constructor(nome, prezzo, immagine, descrizione, disponibilita){
        this.nome = nome;
        this.prezzo = prezzo;
        this.immagine = immagine;
        this.descrizione = descrizione;
        this.disponibilita = disponibilita;
    }
}

// appena atterro sulla home devo leggere i prodotti
let showroom = document.querySelector("#showroom");

// questa funzione si occuperà di eseguire la fetch
function mostraProdotti(){
    // porta 3300 perchè ho già un altro database aperto. modificare la url o la porta all'inizializzazione del db (--port=3300)
    const URL = "http://localhost:3300/prodotti";
    fetch(URL)
        .then(data => {return data.json()})
        .then(response =>{
            console.log(response);
            let prodotti = response;
            prodotti.forEach(prodotto => {
                showroom.appendChild(creaCard(prodotto));
            });
        })
}

// questa funzione crea la singola card
function creaCard(prodotto){
    let col = document.createElement("div");
    col.setAttribute("class", "col-4");

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", prodotto.immagine);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let titolo = document.createElement("h3");
    titolo.setAttribute("class", "card-title");
    titolo.textContent = prodotto.nome;

    let descrizione = document.createElement("p");
    descrizione.setAttribute("class", "card-text");
    descrizione.textContent = prodotto.descrizione;

    let prezzo = document.createElement("p");
    prezzo.setAttribute("class", "card-text");
    prezzo.textContent = "Prezzo: €" + prodotto.prezzo;

    let disponibilita = document.createElement("p");
    disponibilita.setAttribute("class", "card-text");
    disponibilita.textContent = "Disponibilità: " + prodotto.disponibilita;

    let btnAdd = document.createElement("button");
    btnAdd.setAttribute("class", "btn btn-primary bi bi-cart-check");
    if(!prodotto.disponibilita){
        btnAdd.setAttribute("disabled", true);
    }
    btnAdd.addEventListener("click", ()=>{
        // fetch post su carrello
        postInCarrello(prodotto);
    });

    col.appendChild(card);
    card.appendChild(cardImg);
    cardBody.appendChild(titolo);
    cardBody.appendChild(descrizione);
    cardBody.appendChild(prezzo);
    cardBody.appendChild(disponibilita);
    cardBody.appendChild(btnAdd);
    card.appendChild(cardBody);
    
    return col;
}

function postInCarrello(prodotto){
    const URL = "http://localhost:3300/carrello";
    fetch(URL, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(prodotto)
    })
    .then(data =>{return data.json()});
}

document.addEventListener("DOMContentLoaded", mostraProdotti);