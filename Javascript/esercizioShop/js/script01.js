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

    let titolo = document.createElement("h2");
    titolo.classList.add("titolo");
    titolo.textContent = gioco.titolo;
    card.appendChild(titolo);

    let prezzo = document.createElement("p");
    prezzo.classList.add("prezzo");
    prezzo.textContent = gioco.prezzo;
    card.appendChild(prezzo);

    let copertina = document.createElement("img");
    copertina.classList.add("copertina");
    copertina.setAttribute("src", gioco.copertina);
    card.appendChild(copertina);

    gioco.generi.forEach(genereGioco =>{
        let genere = document.createElement("li");
        genere.textContent = genereGioco;
        card.appendChild(genere);
    });

    let dataUscita = document.createElement("p");
    dataUscita.classList.add("dataUscita");
    dataUscita.textContent = gioco.data_uscita;
    card.appendChild(dataUscita);

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

document.addEventListener("DOMContentLoaded", caricaGiochi);
filtro.addEventListener("change", ()=>{
    filtroSelezionato = filtro.value;  
    demo.innerHTML = "";
    filtraByGenere(filtroSelezionato, listaGiochi).forEach(gioco => {
        stampaCard(gioco);
    }); 
})