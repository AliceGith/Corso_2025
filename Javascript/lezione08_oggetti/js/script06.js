class Pokemon {
    constructor(id, nome, tipo, abilita, IV, genere, evoluzione){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.abilita = abilita;
        this.IV = IV;
        this.genere = genere;
        this.evoluzione = evoluzione;
    }
}

let mioPoke = new Pokemon(1, "Bulbasaur", "Erba", "Erbaiuto", 23, "M", "Ivysaur");

let pokedex = [
    new Pokemon(4, "Charmander", "Fuoco", "Fuocoaiuto", 9, "F", "Charmeleon"),
    new Pokemon(25, "Pikachu", "Elettro", "Statico", 10, "F", "Raichu"),
    new Pokemon(132, "Ditto", "Normale", "Sosia", 21, undefined, null),
    new Pokemon(151, "Mew", "Psico", "Sincronismo", 31, undefined, null),
    new Pokemon(145, "Zapdos", "Elettro", "Parafulmine", 28, undefined, null)
];

// inserisco bulbasaur nel pokedex
pokedex.push(mioPoke);

// con questa funzione filtro per genere
function filtraPerGenere(genere){
    // ()=>{} funzione anonima
    // filter restituisce un altro array sulla base di una funzione di callback anonima che valuta un boolean
    let pokemonFiltrati = pokedex.filter(pokemons => pokemons.genere == genere);
    // console.log(pokemonFiltrati);   
}
filtraPerGenere("F");

let filtro = document.getElementById("filtro");
let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

/**
 * 
 * @param {String} tipo 
 * @returns Pokemon[]
 */
function filtraPerTipo(tipo){ //tipo è il value di filtro (HTML object)
    let pokemonsFiltrati = pokedex.filter(pokemons => pokemons.tipo == tipo); //questo è un array di oggetti di tipo pokemon
    return pokemonsFiltrati;
}

function stampaPokemon(){
    demo.innerHTML = "";
    // vado a prendere il value del filtro
    let tipo = filtro.value.charAt(0).toLocaleUpperCase() + filtro.value.substring(1);

    if(tipo == "Tutti"){
        console.log(tipo);
        
        pokedex.forEach(pokemon =>{
            demo.innerHTML += `<li>${pokemon.nome} - ${pokemon.tipo}</li>`;
        });
    }else if(tipo == ""){
        demo.innerHTML = "Non hai selezionato nessun tipo";
    }else{
        
        let pokemonFiltrati = filtraPerTipo(tipo);
        
        pokemonFiltrati.forEach(pokemon =>{
            demo.innerHTML += `<li>${pokemon.nome}</li>`;
        });
    }
    filtro.value = "";
}

btn.addEventListener("click", stampaPokemon);

// JSON (Javascript Object Notation)
// trasformo un array di oggetti in stringhe, ovvero in JSON
let pokedexJSON = JSON.stringify(pokedex);
console.log(pokedexJSON);
console.log(pokedex);

