let cartContainer = document.querySelector("#cart-container");
let carrelloWrapper = document.querySelector("#carrello-wrapper");
let cartTotal = document.querySelector("#cart-total");
let cartButtons = document.querySelector("#cartButtons");
let carrelloTotale = 0;
let btnForm = document.querySelector("#btnForm");
let btnSvuotaCarrello = document.querySelector("#btnSvuotaCarrello");

let formNome = document.querySelector("#formNome");
let formCognome = document.querySelector("#formCognome");
let formEmail = document.querySelector("#formEmail");
let formCitta = document.querySelector("#formCitta");
let formIndirizzo = document.querySelector("#formIndirizzo");
let formCAP = document.querySelector("#formCAP");

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
        });
        }
    })
}

function carrelloVuoto(){
    carrelloWrapper.innerHTML = "Carrello vuoto";
}

function svuotaCarrello(){    
    const URL = "http://localhost:3000/carrello";
    fetch(URL)
    .then(data =>{
        return data.json()
    })
    .then(response => {
        const deletePromises = response.map(prodotto => {
            let URLDelete = URL + "/" + prodotto.id;
            return fetch(URLDelete, {
                method: "DELETE",
            });
        });
        return Promise.all(deletePromises);
    })
    .then(carrelloVuoto);
}

function controllaNome(){
        formNome = document.querySelector("#formNome").value;
        let formNomeCheck = document.querySelector("#formNomeCheck");
        if(formNome.length == 0){
            formNomeCheck.textContent = "";
        }else if(formNome.length < 2){
            formNomeCheck.textContent = "";
            formNomeCheck.classList.remove("text-success");
            formNomeCheck.classList.add("text-danger");
            formNomeCheck.textContent = "Inserisci almeno due lettere";
            return false;
        }else{
            formNomeCheck.textContent = "";
            formNomeCheck.classList.remove("text-danger");
            formNomeCheck.classList.add("text-success");
            formNomeCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
            return true;
        }      
}

function controllaCognome(){
        formCognome = document.querySelector("#formCognome").value;
        let formCognomeCheck = document.querySelector("#formCognomeCheck");
        if(formCognome.length == 0){
            formCognomeCheck.textContent = "";
        }else if(formCognome.length < 2){
            formCognomeCheck.textContent = "";
            formCognomeCheck.classList.remove("text-success");
            formCognomeCheck.classList.add("text-danger");
            formCognomeCheck.textContent = "Inserisci almeno due lettere";
            return false;
        }else{
            formCognomeCheck.textContent = "";
            formCognomeCheck.classList.remove("text-danger");
            formCognomeCheck.classList.add("text-success");
            formCognomeCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
            return true;
        }      
}

function controllaEmail(){
        formEmail = document.querySelector("#formEmail").value;
        let formEmailCheck = document.querySelector("#formEmailCheck");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(formEmail.length == 0){
            formEmailCheck.textContent = "";
        }else if(!emailRegex.test(formEmail)){
            formEmailCheck.textContent = "";
            formEmailCheck.classList.remove("text-success");
            formEmailCheck.classList.add("text-danger");
            formEmailCheck.textContent = "Formato Email non valido";
            return false;
        }else{
            formEmailCheck.textContent = "";
            formEmailCheck.classList.remove("text-danger");
            formEmailCheck.classList.add("text-success");
            formEmailCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
            return true;
        }      
}

function controllaCitta(){
        formCitta = document.querySelector("#formCitta").value;
        let formCittaCheck = document.querySelector("#formCittaCheck");
        if(formCitta.length == 0){
            formCittaCheck.textContent = "";
        }else if(formCitta.length < 2){
            formCittaCheck.textContent = "";
            formCittaCheck.classList.remove("text-success");
            formCittaCheck.classList.add("text-danger");
            formCittaCheck.textContent = "Inserisci almeno due lettere";
            return false;
        }else{
            formCittaCheck.textContent = "";
            formCittaCheck.classList.remove("text-danger");
            formCittaCheck.classList.add("text-success");
            formCittaCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
            return true;
        }      
}

function controllaIndirizzo(){
        formIndirizzo = document.querySelector("#formIndirizzo").value;
        let formIndirizzoCheck = document.querySelector("#formIndirizzoCheck");
        if(formIndirizzo.length == 0){
            formIndirizzoCheck.textContent = "";
        }else if(formIndirizzo.length < 2){
            formIndirizzoCheck.textContent = "";
            formIndirizzoCheck.classList.remove("text-success");
            formIndirizzoCheck.classList.add("text-danger");
            formIndirizzoCheck.textContent = "Inserisci almeno due lettere";
            return false;
        }else{
            formIndirizzoCheck.textContent = "";
            formIndirizzoCheck.classList.remove("text-danger");
            formIndirizzoCheck.classList.add("text-success");
            formIndirizzoCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
            return true;
        }      
}

function controllaCAP(){
        formCAP = document.querySelector("#formCAP").value;
        let formCAPCheck = document.querySelector("#formCAPCheck");
        const CAPRegex = /^[0-9]{5}$/;
        if(formCAP.length == 0){
            formCAPCheck.textContent = "";
        }else if(!CAPRegex.test(formCAP)){
            formCAPCheck.textContent = "";
            formCAPCheck.classList.remove("text-success");
            formCAPCheck.classList.add("text-danger");
            formCAPCheck.textContent = "Formato CAP non valido";
            return false;
        }else{
            formCAPCheck.textContent = "";
            formCAPCheck.classList.remove("text-danger");
            formCAPCheck.classList.add("text-success");
            formCAPCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
            return true;
        }      
}

function controllaPagamento(){
    if(controllaNome() == true && controllaCognome() == true && controllaEmail() == true && controllaCitta() == true && controllaIndirizzo() == true && controllaCAP() == true){
        alert("Pagamento eseguito");
    }else{
        alert("Pagamento rifiutato");
    }
}

formNome.addEventListener("input", controllaNome);
formCognome.addEventListener("input", controllaCognome);
formEmail.addEventListener("input", controllaEmail);
formCitta.addEventListener("input", controllaCitta);
formIndirizzo.addEventListener("input", controllaIndirizzo);
formCAP.addEventListener("input", controllaCAP);

btnForm.addEventListener("click", controllaPagamento)
btnSvuotaCarrello.addEventListener("click", svuotaCarrello);

document.addEventListener("DOMContentLoaded", caricaCarrello);