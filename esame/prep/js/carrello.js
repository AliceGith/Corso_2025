let cartContainer = document.querySelector("#cart-container");
let carrelloWrapper = document.querySelector("#carrello-wrapper");
let cartTotal = document.querySelector("#cart-total");
let cartButtons = document.querySelector("#cartButtons");
let carrelloTotale = 0;

function caricaCarrello(){
    const URL = "http://localhost:3000/carrello";
    fetch(URL)
    .then(data =>{
        return data.json()
    })
    .then(response=>{
        if(response.length == 0){
            carrelloVuoto();
        }else{
        
        response.forEach(prodotto => {
            
            let prodottoCarrello = document.createElement("div");
            prodottoCarrello.classList.add("prodotto-carrello", "row");

            let prodottoCarrelloImmagineContainer = document.createElement("div");
            prodottoCarrelloImmagineContainer.classList.add("col-lg-3");
            let prodottoCarrelloImmagine = document.createElement("img");
            prodottoCarrelloImmagine.setAttribute("src", prodotto.immagine);
            prodottoCarrelloImmagineContainer.appendChild(prodottoCarrelloImmagine);

            let prodottoCarrelloTestoContainer = document.createElement("div");
            prodottoCarrelloTestoContainer.classList.add("col-lg-7");
            let prodottoCarrelloTestoWrapper = document.createElement("div");
            let prodottoCarrelloTitolo = document.createElement("p");
            prodottoCarrelloTitolo.classList.add("carrello-titolo");
            prodottoCarrelloTitolo.textContent = prodotto.nome;
            let prodottoCarrelloElimina = document.createElement("button");
            prodottoCarrelloElimina.innerHTML = "<i class='bi bi-x-circle'></i> Elimina";
            prodottoCarrelloElimina.addEventListener("click", ()=>{
                let deleteURL = URL+"/"+prodotto.id;
                fetch(deleteURL, {
                    method: "DELETE",
                })
                .then(data =>{
                    cartContainer.removeChild(prodottoCarrello);
                    carrelloTotale -= prodotto.prezzo;
                    cartTotal.textContent = "Totale: " + carrelloTotale.toFixed(2)+" €";
                    if(cartContainer.children.length == 0){
                        carrelloVuoto();
                    }
                })
            })
            prodottoCarrelloTestoWrapper.appendChild(prodottoCarrelloTitolo);
            prodottoCarrelloTestoWrapper.appendChild(prodottoCarrelloElimina);
            prodottoCarrelloTestoContainer.appendChild(prodottoCarrelloTestoWrapper);

            let prodottoCarrelloPrezzoContainer = document.createElement("div");
            prodottoCarrelloPrezzoContainer.classList.add("col-lg-2", "text-end");
            let prodottoCarrelloPrezzo = document.createElement("p");
            prodottoCarrelloPrezzo.textContent = prodotto.prezzo+" €";
            prodottoCarrelloPrezzoContainer.appendChild(prodottoCarrelloPrezzo);

            prodottoCarrello.appendChild(prodottoCarrelloImmagineContainer);
            prodottoCarrello.appendChild(prodottoCarrelloTestoContainer);
            prodottoCarrello.appendChild(prodottoCarrelloPrezzoContainer);
            
            cartContainer.appendChild(prodottoCarrello);

            carrelloTotale += prodotto.prezzo;
            cartTotal.textContent = "Totale: " + carrelloTotale.toFixed(2)+" €"; 

            let btnAcquista = document.createElement("button");
        });
        }
    })
}

function carrelloVuoto(){
    carrelloWrapper.innerHTML = "Carrello vuoto";
}

document.addEventListener("DOMContentLoaded", caricaCarrello);