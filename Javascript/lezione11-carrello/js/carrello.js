function scaricaDatiCarrello(){
    const URL = "http://localhost:3300/carrello";
    fetch(URL)
    .then(data =>{return data.json()})
    .then(response =>{
        console.log("Nel mio carrello ci sono i seguenti prodotti:", response);
    })
}   

document.addEventListener("DOMContentLoaded", scaricaDatiCarrello);