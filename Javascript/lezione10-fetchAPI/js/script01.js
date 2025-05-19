// voglio prendere i dati dalla seguente API

// 1. utilizzo del metodo fetch - benvenuti nella programmazione asincrona (ajax)
// il metodo fetch sarà sempre l'ultima cosa che verrà eseguita nel vostro codice indipendentemente da dove lo posiziono
let mieiDati = "";

fetch("https://jsonplaceholder.typicode.com/users/")
    .then(data =>{
        return data.json(); //data è la risposta del server. data.json() -> raccoglie il body della mia request e la trasforma da json() ad oggetto
    })
    .then(response =>{
        // qui raccolgo i dati
        console.log(response);
        mieiDati = response;

        console.log(filtraById(5, response));
        stampaCard(response);

    })

console.log("I miei dati sono questi: " + mieiDati);

function filtraById(id, persone){
    for(let i = 0; i < persone.length; i++){
        if(persone[i].id == id){
            return persone[i];
        }
    }
}

function stampaCard(persone){
    persone.forEach(persona => {
        // demo.innerHTML += `<li> ${persona.name}`
        creaSingolaCard(persona);
    });
}

let demo = document.querySelector("#demo");
let body = document.querySelector("#body");

function creaSingolaCard(persona){
    let card = document.createElement("div");
    card.classList.add("card");
    demo.appendChild(card);

    // let id = document.createElement("p");
    // id.textContent = persona.id;
    // card.appendChild(id);

    let foto = document.createElement("img");
    foto.setAttribute("src", "./img/"+persona.id+".png");
    card.appendChild(foto);

    let name = document.createElement("p");
    name.textContent = "Nome: " + persona.name;
    card.appendChild(name);

    let username = document.createElement("p");
    username.textContent = "Username: " + persona.username;
    card.appendChild(username);

    let email = document.createElement("p");
    email.textContent = "Email: " + persona.email;
    card.appendChild(email);

    let address = document.createElement("p");
    address.textContent = `Indirizzo: ${persona.address.street}, ${persona.address.suite} - ${persona.address.city}`;
    card.appendChild(address);  

    let phone = document.createElement("p");
    phone.textContent = "Telefono: " + persona.phone;
    card.appendChild(phone);

    let website = document.createElement("p");
    let websiteLink = document.createElement("a");
    // let space = document.createTextNode(" ");
    websiteLink.setAttribute("href", persona.website);
    websiteLink.textContent = persona.website;
    website.textContent = "Website: ";
    // website.appendChild(space);
    website.appendChild(websiteLink);
    card.appendChild(website);
    
    let company = document.createElement("p");
    let catchPhraseLabel = document.createElement("p")
    let catchPhrase = document.createElement("span");
    company.textContent = "Società: " + persona.company.name;
    catchPhraseLabel.textContent = "Tormentone: ";
    catchPhrase.classList.add("catchphrase");
    catchPhrase.textContent = persona.company.catchPhrase;
    card.appendChild(company);
    card.appendChild(catchPhraseLabel)
    catchPhraseLabel.appendChild(catchPhrase);

    let btnDel = document.createElement("button");
    btnDel.textContent = "Rimuovi";
    card.appendChild(btnDel);

    btnDel.addEventListener("click", ()=>{
        foto.setAttribute("src", "./img/dodo.jpg");
        name.textContent = "Nome: Dodo";
        username.textContent = "Username: Lo Sterminatore";
        email.textContent = "Email: dodo@alberoazzurro.rai";
        address.textContent = "Indirizzo: L'albero azzurro";
        phone.textContent = "Telefono: 800 938 362";
        websiteLink.setAttribute("href", "https://www.raiplay.it/programmi/lalberoazzurro");
        websiteLink.textContent = "https://www.raiplay.it/programmi/lalberoazzurro";
        company.textContent = "Società: RAI";
        catchPhrase.textContent = "Ora prendiamo lo Scatolone Fabbricone e ci rolliamo un bel cannone."
        btnDel.classList.add("nascosto");
        setTimeout(()=>{
            demo.removeChild(card);
        }, 2000);
        setTimeout(()=>{
            if(demo.innerHTML == ""){
                demo.classList.add("fbi");
                body.classList.add("nino");
                demo.innerHTML = "FBI OPEN UP! Sei in arresto per omicidio plurimo";
            }
        }, 3000)
    });
};

// esercizio: crea delle card per ogni singola persona utilizzando i metodi come createElement ecc.
// sotto ogni card inserisci un pulsante "Escludi". Al click sul pulsante escludi rimuovi la card.
// opzionale: quando clicchi sul pulsante escludi per 2 secondi, al posto della foto della persona, compare la foto di Dodò dell'albero azzurro

// fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
//     .then(data =>{
//         return data.json();
//     })
//     .then(response =>{
//         let pokemonList = response.results;
//         let pokemonDetailsPromises = pokemonList.map(pokemon => fetch(pokemon.url).then(detailData => detailData.json()));
//         return Promise.all(pokemonDetailsPromises);
//     })
//     .then(pokemonDetails =>{
//         pokemonDetails.forEach(detail => {
//             let name = detail.name;
//             let type = detail.types.map(typeInfo => typeInfo.type.name).join(", ");
//             let sprite = detail.sprites.front_default;
//             demo.innerHTML += `<br><p>${name} - ${type} <img src="${sprite}"></p>`;
//         });
//     })
