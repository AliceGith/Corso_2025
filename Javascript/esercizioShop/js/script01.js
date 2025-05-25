let demo = document.querySelector(".demo");
let filtro = document.querySelector("#filtro");
let filtroSelezionato = filtro.value;

function caricaGiochi(){
    const urlGiochi = "http://localhost:3000/giochi";
    fetch(urlGiochi)
    .then(data => {return data.json()})
    .then(response =>{
        listaGiochi = response;
        filtraByGenere(filtroSelezionato, listaGiochi).forEach(gioco => {
            stampaCard(gioco);
        });       
    })
}

function creaCard(gioco){
    let card = document.createElement("div");
    card.classList.add("card");

    let linkGioco = document.createElement("a");
    linkGioco.setAttribute("href", "./pages/dettagli.html?id="+gioco.id);
    linkGioco.textContent = gioco.titolo;

    // let titolo = document.createElement("h3");
    // titolo.classList.add("titolo");
    // titolo.textContent = gioco.titolo;
    
    let prezzo = document.createElement("p");
    prezzo.classList.add("prezzo");
    prezzo.textContent = gioco.prezzo;
    
    let copertina = document.createElement("img");
    copertina.classList.add("copertina");
    copertina.setAttribute("src", gioco.copertina);
    
    // let dataUscita = document.createElement("p");
    // dataUscita.classList.add("dataUscita");
    // dataUscita.textContent = gioco.data_uscita;

    let btnAdd = document.createElement("button");
    btnAdd.textContent = "Aggiungi al carrello";
    btnAdd.addEventListener("click", ()=>{
        carrello(gioco);
    })
    
    card.appendChild(copertina);
    card.appendChild(linkGioco);
    // card.appendChild(titolo);
    card.appendChild(prezzo);
    // card.appendChild(dataUscita);
    card.appendChild(btnAdd);
    
    // gioco.generi.forEach(genereGioco =>{
    //     let genere = document.createElement("li");
    //     genere.textContent = genereGioco;
    //     card.appendChild(genere);
    // });

    demo.appendChild(card);
}

function stampaCard(gioco){
    creaCard(gioco);
}

function filtraByGenere(genere, giochi){
    if(genere == "Tutti"){        
        return giochi;
    }else{        
        let giochiFiltrati = giochi.filter((listaGiochi) => listaGiochi.generi.includes(genere));        
        return giochiFiltrati;
    }
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

document.addEventListener("DOMContentLoaded", caricaGiochi);
filtro.addEventListener("change", ()=>{
    filtroSelezionato = filtro.value;  
    demo.innerHTML = "";
    filtraByGenere(filtroSelezionato, listaGiochi).forEach(gioco => {
        stampaCard(gioco);
    }); 
})