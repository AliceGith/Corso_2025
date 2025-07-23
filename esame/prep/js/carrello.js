let cartContainer = document.querySelector("#cart-container");

function caricaCarrello(){
    const URL = "http://localhost:3000/carrello";
    fetch(URL)
    .then(data =>{
        return data.json()
    })
    .then(response=>{
        response.forEach(prodotto => {
            let prodottoCarrello = document.createElement("div");
            prodottoCarrello.setAttribute("class", "prodotto-carrello");
            prodottoCarrello.textContent = prodotto.nome + " " + prodotto.prezzo + " € ";
            
            let img = document.createElement("img");
            img.setAttribute("src", prodotto.immagine);
            img.setAttribute("style", "width: 8rem");

            let btnTogli = document.createElement("button");
            btnTogli.innerHTML = "<i class='bi bi-x-circle'></i>";
            btnTogli.addEventListener("click", ()=>{
                let deleteURL = URL+"/"+prodotto.id;
                fetch(deleteURL, {
                    method: "DELETE",
                })
                .then(data =>{
                    // prodottoCarrello.innerHTML = "";
                    cartContainer.removeChild(prodottoCarrello);
                })
            })

            prodottoCarrello.appendChild(img);
            prodottoCarrello.appendChild(btnTogli);

            cartContainer.appendChild(prodottoCarrello);
            // prodottoCarrello.addEventListener("click", function(){
            //     console.log(prod.id);
            //     location.href = `singoloProdotto.html?id=${prod.id}`;
                
            // })
        });
    })
}

document.addEventListener("DOMContentLoaded", caricaCarrello);