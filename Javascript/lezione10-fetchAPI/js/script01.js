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

function creaSingolaCard(persona){

}

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
