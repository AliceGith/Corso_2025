let nome = document.getElementById("nome");
let sprite = document.getElementById("sprite");
let btnCatch = document.getElementById("btnCatch");
let demo = document.getElementById("demo");

let pokemon = {
    pkm: [
        {number: 1, nome: "Bulbasaur", sprite: "./img/bulbasaur.png", sprite_shiny: "./img/bulbasaur_shiny.png", rarity: 4},
        {number: 2, nome: "Ivysaur", sprite: "./img/ivysaur.png", sprite_shiny: "./img/ivysaur_shiny.png", rarity: 4},
        {number: 3, nome: "Venusaur", sprite: "./img/venusaur.png", sprite_shiny: "./img/venusaur_shiny.png", rarity: 4},
        {number: 4, nome: "Charmander", sprite: "./img/charmander.png", sprite_shiny: "./img/charmander_shiny.png", rarity: 4},
        {number: 5, nome: "Charmeleon", sprite: "./img/charmeleon.png", sprite_shiny: "./img/charmeleon_shiny.png", rarity: 4},
        {number: 6, nome: "Charizard", sprite: "./img/charizard.png", sprite_shiny: "./img/charizard_shiny.png", rarity: 4},
        {number: 7, nome: "Squirtle", sprite: "./img/squirtle.png", sprite_shiny: "./img/squirtle_shiny.png", rarity: 4},
        {number: 8, nome: "Wartortle", sprite: "./img/wartortle.png", sprite_shiny: "./img/wartortle_shiny.png", rarity: 4},
        {number: 9, nome: "Blastoise", sprite: "./img/blastoise.png", sprite_shiny: "./img/blastoise_shiny.png", rarity: 4},
        {number: 10, nome: "Caterpie", sprite: "./img/caterpie.png", sprite_shiny: "./img/caterpie_shiny.png", rarity: 1},
        {number: 11, nome: "Metapod", sprite: "./img/metapod.png", sprite_shiny: "./img/metapod_shiny.png", rarity: 1},
        {number: 12, nome: "Butterfree", sprite: "./img/butterfree.png", sprite_shiny: "./img/butterfree_shiny.png", rarity: 2},
        {number: 13, nome: "Weedle", sprite: "./img/weedle.png", sprite_shiny: "./img/weedle_shiny.png", rarity: 1},
        {number: 14, nome: "Kakuna", sprite: "./img/kakuna.png", sprite_shiny: "./img/kakuna_shiny.png", rarity: 1},
        {number: 15, nome: "Beedrill", sprite: "./img/beedrill.png", sprite_shiny: "./img/beedrill_shiny.png", rarity: 2},
        {number: 16, nome: "Pidgey", sprite: "./img/pidgey.png", sprite_shiny: "./img/pidgey_shiny.png", rarity: 1},
        {number: 17, nome: "Pidgeotto", sprite: "./img/pidgeotto.png", sprite_shiny: "./img/pidgeotto_shiny.png", rarity: 1},
        {number: 18, nome: "Pidgeot", sprite: "./img/pidgeot.png", sprite_shiny: "./img/pidgeot_shiny.png", rarity: 2},
        {number: 19, nome: "Rattata", sprite: "./img/rattata.png", sprite_shiny: "./img/rattata_shiny.png", rarity: 1},
        {number: 20, nome: "Raticate", sprite: "./img/raticate.png", sprite_shiny: "./img/raticate_shiny.png", rarity: 2},
        {number: 21, nome: "Spearow", sprite: "./img/spearow.png", sprite_shiny: "./img/spearow_shiny.png", rarity: 1},
        {number: 22, nome: "Fearow", sprite: "./img/fearow.png", sprite_shiny: "./img/fearow_shiny.png", rarity: 2},
        {number: 23, nome: "Ekans", sprite: "./img/ekans.png", sprite_shiny: "./img/ekans_shiny.png", rarity: 1},
        {number: 24, nome: "Arbok", sprite: "./img/arbok.png", sprite_shiny: "./img/arbok_shiny.png", rarity: 2},
        {number: 25, nome: "Pikachu", sprite: "./img/pikachu.png", sprite_shiny: "./img/pikachu_shiny.png", rarity: 2},
        {number: 26, nome: "Raichu", sprite: "./img/raichu.png", sprite_shiny: "./img/raichu_shiny.png", rarity: 3},
        {number: 27, nome: "Sandshrew", sprite: "./img/sandshrew.png", sprite_shiny: "./img/sandshrew_shiny.png", rarity: 1},
        {number: 28, nome: "Sandslah", sprite: "./img/sandslash.png", sprite_shiny: "./img/sandslash_shiny.png", rarity: 2},
        {number: 29, nome: "Nidoran♀", sprite: "./img/nidoran♀.png", sprite_shiny: "./img/nidoran♀_shiny.png", rarity: 1},
        {number: 30, nome: "Nidorina", sprite: "./img/nidorina.png", sprite_shiny: "./img/nidorina_shiny.png", rarity: 2},
        {number: 31, nome: "Nidoqueen", sprite: "./img/nidoqueen.png", sprite_shiny: "./img/nidoqueen_shiny.png", rarity: 3},
        {number: 32, nome: "Nidoran♂", sprite: "./img/nidoran♂.png", sprite_shiny: "./img/nidoran♂_shiny.png", rarity: 1},
        {number: 33, nome: "Nidorino", sprite: "./img/nidorino.png", sprite_shiny: "./img/nidorino_shiny.png", rarity: 2},
        {number: 34, nome: "Nidoking", sprite: "./img/nidoking.png", sprite_shiny: "./img/nidoking_shiny.png", rarity: 3},
    ]
}

class Catch {
    constructor(number, hpIV, shinyFlag){
        this.number = number;
        this.hpIV = hpIV;
        this.shinyFlag = shinyFlag;
    }
}

function nuovoPkm() {
    // recupero la rarity del pkm da selezionare
    let rarity = [1,1,2,1,2,3,1,2,3,4,1,2,3,4,5];
    let rngRarity = rarity[Math.floor(Math.random() * rarity.length)];
    console.log("Rarity: " + rngRarity);

    // crea un array con solo i pokemon che hanno la rarity selezionata
    let rngPokemon = pokemon.pkm.filter((pokemon) => pokemon.rarity == rngRarity);
    console.log(rngPokemon);
    
    // seleziono il numero del pokemon dall'array dei soli pokemon con la rarity giusta
    let number = rngPokemon[Math.floor(Math.random() * rngPokemon.length)].number;
    console.log("Number: " + number);
    
    let hpIV = Math.floor(Math.random() * 31);

    let shinyFlag = false;
    if((Math.ceil(Math.random() * 10) == 10)){
        shinyFlag = true;
    }

    let pkm = new Catch(number, hpIV, shinyFlag);
    let pkmSelezionato = pokemon.pkm.find(pokemon => pokemon.number == pkm.number);
    if(shinyFlag == true){
        demo.innerHTML = pkmSelezionato.nome + "<img src="+pkmSelezionato.sprite_shiny+">" + hpIV;
        // console.log(shinyFlag);
    }else{
        demo.innerHTML = pkmSelezionato.nome + "<img src="+pkmSelezionato.sprite+">" + hpIV;
        // console.log(shinyFlag);
    }
}

sprite.innerHTML = "<img src="+pokemon.pkm[0].sprite+">";
nome.innerHTML = pokemon.pkm[0].nome;

btnCatch.addEventListener("click", nuovoPkm);
