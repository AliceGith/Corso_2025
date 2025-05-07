let nomeStampa = document.getElementById("nomeStampa");
let spriteStampa = document.getElementById("spriteStampa");
let ivStampa = document.getElementById("ivStampa");
let btnCatch = document.getElementById("btnCatch");
// let demo = document.getElementById("demo");

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
        {number: 35, nome: "Clefairy", sprite: "./img/clefairy.png", sprite_shiny: "./img/clefairy_shiny.png", rarity: 1},
        {number: 36, nome: "Clefable", sprite: "./img/clefable.png", sprite_shiny: "./img/clefable_shiny.png", rarity: 2},
        {number: 37, nome: "Vulpix", sprite: "./img/vulpix.png", sprite_shiny: "./img/vulpix_shiny.png", rarity: 2},
        {number: 38, nome: "Ninetales", sprite: "./img/ninetales.png", sprite_shiny: "./img/ninetales_shiny.png", rarity: 3},
        {number: 39, nome: "Jigglypuff", sprite: "./img/jigglypuff.png", sprite_shiny: "./img/jigglypuff_shiny.png", rarity: 1},
        {number: 40, nome: "Wigglytuff", sprite: "./img/wigglytuff.png", sprite_shiny: "./img/wigglytuff_shiny.png", rarity: 2},
        {number: 41, nome: "Zubat", sprite: "./img/zubat.png", sprite_shiny: "./img/zubat_shiny.png", rarity: 1},
        {number: 42, nome: "Golbat", sprite: "./img/golbat.png", sprite_shiny: "./img/golbat_shiny.png", rarity: 2},
        {number: 43, nome: "Oddish", sprite: "./img/oddish.png", sprite_shiny: "./img/oddish_shiny.png", rarity: 1},
        {number: 44, nome: "Gloom", sprite: "./img/gloom.png", sprite_shiny: "./img/gloom_shiny.png", rarity: 2},
        {number: 45, nome: "Vileplume", sprite: "./img/vileplume.png", sprite_shiny: "./img/vileplume_shiny.png", rarity: 3},
        {number: 46, nome: "Paras", sprite: "./img/paras.png", sprite_shiny: "./img/paras_shiny.png", rarity: 1},
        {number: 47, nome: "Parasect", sprite: "./img/parasect.png", sprite_shiny: "./img/parasect_shiny.png", rarity: 2},
        {number: 48, nome: "Venonat", sprite: "./img/venonat.png", sprite_shiny: "./img/venonat_shiny.png", rarity: 1},
        {number: 49, nome: "Venomoth", sprite: "./img/venomoth.png", sprite_shiny: "./img/venomoth_shiny.png", rarity: 2},
        {number: 50, nome: "Diglett", sprite: "./img/diglett.png", sprite_shiny: "./img/diglett_shiny.png", rarity: 1},
        {number: 51, nome: "Dugtrio", sprite: "./img/dugtrio.png", sprite_shiny: "./img/dugtrio_shiny.png", rarity: 2},
        {number: 52, nome: "Meowth", sprite: "./img/meowth.png", sprite_shiny: "./img/meowth_shiny.png", rarity: 2},
        {number: 53, nome: "Persian", sprite: "./img/persian.png", sprite_shiny: "./img/persian_shiny.png", rarity: 2},
        {number: 54, nome: "Psyduck", sprite: "./img/psyduck.png", sprite_shiny: "./img/psyduck_shiny.png", rarity: 1},
        {number: 55, nome: "Golduck", sprite: "./img/golduck.png", sprite_shiny: "./img/golduck_shiny.png", rarity: 2},
        {number: 56, nome: "Mankey", sprite: "./img/mankey.png", sprite_shiny: "./img/mankey_shiny.png", rarity: 1},
        {number: 57, nome: "Primeape", sprite: "./img/primeape.png", sprite_shiny: "./img/primeape_shiny.png", rarity: 2},
        {number: 58, nome: "Growlithe", sprite: "./img/growlithe.png", sprite_shiny: "./img/growlithe_shiny.png", rarity: 2},
        {number: 59, nome: "Arcanine", sprite: "./img/arcanine.png", sprite_shiny: "./img/arcanine_shiny.png", rarity: 3},
        {number: 60, nome: "Poliwag", sprite: "./img/poliwag.png", sprite_shiny: "./img/poliwag_shiny.png", rarity: 1},
        {number: 61, nome: "Poliwhirl", sprite: "./img/poliwhirl.png", sprite_shiny: "./img/poliwhirl_shiny.png", rarity: 2},
        {number: 62, nome: "Poliwrath", sprite: "./img/poliwrath.png", sprite_shiny: "./img/poliwrath_shiny.png", rarity: 3},
        {number: 63, nome: "Abra", sprite: "./img/abra.png", sprite_shiny: "./img/abra_shiny.png", rarity: 3},
        {number: 64, nome: "Kadabra", sprite: "./img/kadabra.png", sprite_shiny: "./img/kadabra_shiny.png", rarity: 3},
        {number: 65, nome: "Alakazam", sprite: "./img/alakazam.png", sprite_shiny: "./img/alakazam_shiny.png", rarity: 4},
        {number: 66, nome: "Machop", sprite: "./img/machop.png", sprite_shiny: "./img/machop_shiny.png", rarity: 1},
        {number: 67, nome: "Machoke", sprite: "./img/machoke.png", sprite_shiny: "./img/machoke_shiny.png", rarity: 2},
        {number: 68, nome: "Machamp", sprite: "./img/machamp.png", sprite_shiny: "./img/machamp_shiny.png", rarity: 4},
        {number: 69, nome: "Bellsprout", sprite: "./img/bellsprout.png", sprite_shiny: "./img/bellsprout_shiny.png", rarity: 1},
        {number: 70, nome: "Weepinbell", sprite: "./img/weepinbell.png", sprite_shiny: "./img/weepinbell_shiny.png", rarity: 2},
        {number: 71, nome: "Victreebel", sprite: "./img/victreebel.png", sprite_shiny: "./img/victreebel_shiny.png", rarity: 3},
        {number: 72, nome: "Tentacool", sprite: "./img/tentacool.png", sprite_shiny: "./img/tentacool_shiny.png", rarity: 1},
        {number: 73, nome: "Tentacruel", sprite: "./img/tentacruel.png", sprite_shiny: "./img/tentacruel_shiny.png", rarity: 2},
        {number: 74, nome: "Geodude", sprite: "./img/geodude.png", sprite_shiny: "./img/geodude_shiny.png", rarity: 1},
        {number: 75, nome: "Graveler", sprite: "./img/graveler.png", sprite_shiny: "./img/graveler_shiny.png", rarity: 2},
        {number: 76, nome: "Golem", sprite: "./img/golem.png", sprite_shiny: "./img/golem_shiny.png", rarity: 4},
        {number: 77, nome: "Ponyta", sprite: "./img/ponyta.png", sprite_shiny: "./img/ponyta_shiny.png", rarity: 2},
        {number: 78, nome: "Rapidash", sprite: "./img/rapidash.png", sprite_shiny: "./img/rapidash_shiny.png", rarity: 3},
        {number: 79, nome: "Slowpoke", sprite: "./img/slowpoke.png", sprite_shiny: "./img/slowpoke_shiny.png", rarity: 1},
        {number: 80, nome: "Slowbro", sprite: "./img/slowbro.png", sprite_shiny: "./img/slowbro_shiny.png", rarity: 2},
        {number: 81, nome: "Magnemite", sprite: "./img/magnemite.png", sprite_shiny: "./img/magnemite_shiny.png", rarity: 1},
        {number: 82, nome: "Magneton", sprite: "./img/magneton.png", sprite_shiny: "./img/magneton_shiny.png", rarity: 3},
        {number: 83, nome: "Farfetch'd", sprite: "./img/farfetchd.png", sprite_shiny: "./img/farfetchd_shiny.png", rarity: 2},
        {number: 84, nome: "Doduo", sprite: "./img/doduo.png", sprite_shiny: "./img/doduo_shiny.png", rarity: 2},
        {number: 85, nome: "Dodrio", sprite: "./img/dodrio.png", sprite_shiny: "./img/dodrio_shiny.png", rarity: 3},
        {number: 86, nome: "Seel", sprite: "./img/seel.png", sprite_shiny: "./img/seel_shiny.png", rarity: 1},
        {number: 87, nome: "Dewgong", sprite: "./img/dewgong.png", sprite_shiny: "./img/dewgong_shiny.png", rarity: 2},
        {number: 88, nome: "Grimer", sprite: "./img/grimer.png", sprite_shiny: "./img/grimer_shiny.png", rarity: 1},
        {number: 89, nome: "Muk", sprite: "./img/muk.png", sprite_shiny: "./img/muk_shiny.png", rarity: 2},
        {number: 90, nome: "Shellder", sprite: "./img/shellder.png", sprite_shiny: "./img/shellder_shiny.png", rarity: 1},
        {number: 91, nome: "Cloyster", sprite: "./img/cloyster.png", sprite_shiny: "./img/cloyster_shiny.png", rarity: 2},
        {number: 92, nome: "Gastly", sprite: "./img/gastly.png", sprite_shiny: "./img/gastly_shiny.png", rarity: 1},
        {number: 93, nome: "Haunter", sprite: "./img/haunter.png", sprite_shiny: "./img/haunter_shiny.png", rarity: 2},
        {number: 94, nome: "Gengar", sprite: "./img/gengar.png", sprite_shiny: "./img/gengar_shiny.png", rarity: 4},
        {number: 95, nome: "Onix", sprite: "./img/onix.png", sprite_shiny: "./img/onix_shiny.png", rarity: 2},
        {number: 96, nome: "Drowzee", sprite: "./img/drowzee.png", sprite_shiny: "./img/drowzee_shiny.png", rarity: 1},
        {number: 97, nome: "Hypno", sprite: "./img/hypno.png", sprite_shiny: "./img/hypno_shiny.png", rarity: 2},
        {number: 98, nome: "Krabby", sprite: "./img/krabby.png", sprite_shiny: "./img/krabby_shiny.png", rarity: 1},
        {number: 99, nome: "Kingler", sprite: "./img/kingler.png", sprite_shiny: "./img/kingler_shiny.png", rarity: 2},
        {number: 100, nome: "Voltorb", sprite: "./img/voltorb.png", sprite_shiny: "./img/voltorb_shiny.png", rarity: 1},
        {number: 101, nome: "Electrode", sprite: "./img/electrode.png", sprite_shiny: "./img/electrode_shiny.png", rarity: 2},
        {number: 102, nome: "Exeggcute", sprite: "./img/exeggcute.png", sprite_shiny: "./img/exeggcute_shiny.png", rarity: 2},
        {number: 103, nome: "Exeggutor", sprite: "./img/exeggutor.png", sprite_shiny: "./img/exeggutor_shiny.png", rarity: 3},
        {number: 104, nome: "Cubone", sprite: "./img/cubone.png", sprite_shiny: "./img/cubone_shiny.png", rarity: 2},
        {number: 105, nome: "Marowak", sprite: "./img/marowak.png", sprite_shiny: "./img/marowak_shiny.png", rarity: 3},
        {number: 106, nome: "Hitmonlee", sprite: "./img/hitmonlee.png", sprite_shiny: "./img/hitmonlee_shiny.png", rarity: 4},
        {number: 107, nome: "Hitmonchan", sprite: "./img/hitmonchan.png", sprite_shiny: "./img/hitmonchan_shiny.png", rarity: 4},
        {number: 108, nome: "Lickitung", sprite: "./img/lickitung.png", sprite_shiny: "./img/lickitung_shiny.png", rarity: 2},
        {number: 109, nome: "Koffing", sprite: "./img/koffing.png", sprite_shiny: "./img/koffing_shiny.png", rarity: 1},
        {number: 110, nome: "Weezing", sprite: "./img/weezing.png", sprite_shiny: "./img/weezing_shiny.png", rarity: 2},
        {number: 111, nome: "Rhyhorn", sprite: "./img/rhyhorn.png", sprite_shiny: "./img/rhyhorn_shiny.png", rarity: 2},
        {number: 112, nome: "Rhydon", sprite: "./img/rhydon.png", sprite_shiny: "./img/rhydon_shiny.png", rarity: 3},
        {number: 113, nome: "Chansey", sprite: "./img/chansey.png", sprite_shiny: "./img/chansey_shiny.png", rarity: 5},
        {number: 114, nome: "Tangela", sprite: "./img/tangela.png", sprite_shiny: "./img/tangela_shiny.png", rarity: 2},
        {number: 115, nome: "Kangaskhan", sprite: "./img/kangaskhan.png", sprite_shiny: "./img/kangaskhan_shiny.png", rarity: 4},
        {number: 116, nome: "Horsea", sprite: "./img/horsea.png", sprite_shiny: "./img/horsea_shiny.png", rarity: 1},
        {number: 117, nome: "Seadra", sprite: "./img/seadra.png", sprite_shiny: "./img/seadra_shiny.png", rarity: 2},
        {number: 118, nome: "Goldeen", sprite: "./img/goldeen.png", sprite_shiny: "./img/goldeen_shiny.png", rarity: 1},
        {number: 119, nome: "Seaking", sprite: "./img/seaking.png", sprite_shiny: "./img/seaking_shiny.png", rarity: 2},
        {number: 120, nome: "Staryu", sprite: "./img/staryu.png", sprite_shiny: "./img/staryu_shiny.png", rarity: 1},
        {number: 121, nome: "Starmie", sprite: "./img/starmie.png", sprite_shiny: "./img/starmie_shiny.png", rarity: 2},
        {number: 122, nome: "Mr. Mime", sprite: "./img/mr-mime.png", sprite_shiny: "./img/mr-mime_shiny.png", rarity: 2},
        {number: 123, nome: "Scyther", sprite: "./img/scyther.png", sprite_shiny: "./img/scyther_shiny.png", rarity: 3},
        {number: 124, nome: "Jynx", sprite: "./img/jynx.png", sprite_shiny: "./img/jynx_shiny.png", rarity: 2},
        {number: 125, nome: "Electabuzz", sprite: "./img/electabuzz.png", sprite_shiny: "./img/electabuzz_shiny.png", rarity: 3},
        {number: 126, nome: "Magmar", sprite: "./img/magmar.png", sprite_shiny: "./img/magmar_shiny.png", rarity: 3},
        {number: 127, nome: "Pinsir", sprite: "./img/pinsir.png", sprite_shiny: "./img/pinsir_shiny.png", rarity: 3},
        {number: 128, nome: "Tauros", sprite: "./img/tauros.png", sprite_shiny: "./img/tauros_shiny.png", rarity: 3},
        {number: 129, nome: "Magikarp", sprite: "./img/magikarp.png", sprite_shiny: "./img/magikarp_shiny.png", rarity: 1},
        {number: 130, nome: "Gyarados", sprite: "./img/gyarados.png", sprite_shiny: "./img/gyarados_shiny.png", rarity: 3},
        {number: 131, nome: "Lapras", sprite: "./img/lapras.png", sprite_shiny: "./img/lapras_shiny.png", rarity: 4},
        {number: 132, nome: "Ditto", sprite: "./img/ditto.png", sprite_shiny: "./img/ditto_shiny.png", rarity: 5},
        {number: 133, nome: "Eevee", sprite: "./img/eevee.png", sprite_shiny: "./img/eevee_shiny.png", rarity: 3},
        {number: 134, nome: "Vaporeon", sprite: "./img/vaporeon.png", sprite_shiny: "./img/vaporeon_shiny.png", rarity: 3},
        {number: 135, nome: "Jolteon", sprite: "./img/jolteon.png", sprite_shiny: "./img/jolteon_shiny.png", rarity: 3},
        {number: 136, nome: "Flareon", sprite: "./img/flareon.png", sprite_shiny: "./img/flareon_shiny.png", rarity: 3},
        {number: 137, nome: "Porygon", sprite: "./img/porygon.png", sprite_shiny: "./img/porygon_shiny.png", rarity: 3},
        {number: 138, nome: "Omanyte", sprite: "./img/omanyte.png", sprite_shiny: "./img/omanyte_shiny.png", rarity: 3},
        {number: 139, nome: "Omastar", sprite: "./img/omastar.png", sprite_shiny: "./img/omastar_shiny.png", rarity: 4},
        {number: 140, nome: "Kabuto", sprite: "./img/kabuto.png", sprite_shiny: "./img/kabuto_shiny.png", rarity: 3},
        {number: 141, nome: "Kabutops", sprite: "./img/kabutops.png", sprite_shiny: "./img/kabutops_shiny.png", rarity: 4},
        {number: 142, nome: "Aerodactyl", sprite: "./img/aerodactyl.png", sprite_shiny: "./img/aerodactyl_shiny.png", rarity: 4},
        {number: 143, nome: "Snorlax", sprite: "./img/snorlax.png", sprite_shiny: "./img/snorlax_shiny.png", rarity: 4},
        {number: 144, nome: "Articuno", sprite: "./img/articuno.png", sprite_shiny: "./img/articuno_shiny.png", rarity: 5},
        {number: 145, nome: "Zapdos", sprite: "./img/zapdos.png", sprite_shiny: "./img/zapdos_shiny.png", rarity: 5},
        {number: 146, nome: "Moltres", sprite: "./img/moltres.png", sprite_shiny: "./img/moltres_shiny.png", rarity: 5},
        {number: 147, nome: "Dratini", sprite: "./img/dratini.png", sprite_shiny: "./img/dratini_shiny.png", rarity: 3},
        {number: 148, nome: "Dragonair", sprite: "./img/dragonair.png", sprite_shiny: "./img/dragonair_shiny.png", rarity: 4},
        {number: 149, nome: "Dragonite", sprite: "./img/dragonite.png", sprite_shiny: "./img/dragonite_shiny.png", rarity: 5},
        {number: 150, nome: "Mewtwo", sprite: "./img/mewtwo.png", sprite_shiny: "./img/mewtwo_shiny.png", rarity: 5},
        {number: 151, nome: "Mew", sprite: "./img/mew.png", sprite_shiny: "./img/mew_shiny.png", rarity: 5}
    ]
}

class Catch {
    constructor(number, hpIV, atkIV, spaIV, defIV, spdefIV, spdIV, shinyFlag){
        this.number = number;
        this.hpIV = hpIV;
        this.atkIV = atkIV;
        this.spaIV = spaIV;
        this.defIV = defIV;
        this.spdefIV = spdefIV;
        this.spdIV = spdIV;
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
    
    let hpIV = Math.floor(Math.random() * 32);
    let atkIV = Math.floor(Math.random() * 32);
    let spaIV = Math.floor(Math.random() * 32);
    let defIV = Math.floor(Math.random() * 32);
    let spdefIV = Math.floor(Math.random() * 32);
    let spdIV = Math.floor(Math.random() * 32);

    let shinyFlag = false;
    if((Math.ceil(Math.random() * 10) == 10)){
        shinyFlag = true;
    }

    let pkm = new Catch(number, hpIV, shinyFlag);
    let pkmSelezionato = pokemon.pkm.find(pokemon => pokemon.number == pkm.number);
    if(shinyFlag == true){
        // demo.innerHTML = pkmSelezionato.nome + "<img src="+pkmSelezionato.sprite_shiny+">" + hpIV + atkIV + spaIV + defIV + spdefIV + spdIV;
        // console.log(shinyFlag);
        nomeStampa.innerHTML = "✨" + pkmSelezionato.nome + "✨";
        spriteStampa.innerHTML = "<img src="+pkmSelezionato.sprite_shiny+">";
        ivStampa.innerHTML = "<li>HP IV: " + hpIV + "<li>ATK IV: " + atkIV + "<li>SPA IV: " + spaIV + "<li>DEF IV: " + defIV + "<li>SPDEF IV: " + spdefIV + "<li>SPD IV: " + spdIV;
    }else{
        // demo.innerHTML = pkmSelezionato.nome + "<img src="+pkmSelezionato.sprite+">" + hpIV + atkIV + spaIV + defIV + spdefIV + spdIV;
        // console.log(shinyFlag);
        nomeStampa.innerHTML = pkmSelezionato.nome;
        spriteStampa.innerHTML = "<img src="+pkmSelezionato.sprite+">";
        ivStampa.innerHTML = "<li>HP IV: " + hpIV + "<li>ATK IV: " + atkIV + "<li>SPA IV: " + spaIV + "<li>DEF IV: " + defIV + "<li>SPDEF IV: " + spdefIV + "<li>SPD IV: " + spdIV;
    }
}

// sprite.innerHTML = "<img src="+pokemon.pkm[0].sprite+">";
// nome.innerHTML = pokemon.pkm[0].nome;

btnCatch.addEventListener("click", nuovoPkm);
