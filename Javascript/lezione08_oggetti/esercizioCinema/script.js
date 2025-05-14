let demo = document.getElementById("demo");

class Film {
    constructor(titolo, regista, anno, genere, attori, locandina){
        this.titolo = titolo;
        this.regista = regista;
        this.anno = anno;
        this.genere = genere;
        this.attori = attori;
        this.locandina = locandina;
    }
}

let listaFilm = [
    new Film("Guida galattica per autospottisti", "Hammer & Tongs", 2005, "Fantascienza", ["Martin Freeman", "Sam Rockwell", "Zooey Deshanel"], "./img/guida.jpg" ),
    new Film("Everything Everywhere All At Once", "Daniel Scheinert", 2022, "Commedia", ["Ke Huy Quan", "Michelle Yeoh", "Stephanie Hsu"], "./img/everything.jpg"),
    new Film("Get Out", "Jordan Peele", 2017, "Horror", ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"], "./img/getout.jpg")
    // new Film("Barbie"),
    // new Film("La solitudine dei numeri primi"),
    // new Film("Mew vs Mewtwo"),
    // new Film("Inception"),
    // new Film("Ocean's Eleven"),
    // new Film("Shrek"),
    // new Film("Dungeons & Dragons - L'onore dei ladri")
];

// for in
// for (const titolo in listaFilm) {
//         const element = object;
//         demo.innerHTML += element;
// }

let boxFilms = document.querySelector("#boxFilms");

function stampaFilms(listaFilm){
    boxFilms.innerHTML = "";
    let card = ""; 

    listaFilm.forEach(film => {
        card = `<div id='cardSingola'>
        <h4>${film.titolo}</h4>
        <img src=${film.locandina}>
        <p>Regista: ${film.regista}</p>
        <p>Anno: ${film.anno}</p>
        <p>Genere: ${film.genere}</p>
        Attori: `;
        
        film.attori.forEach(attore => {
            card += `<ul><li>${attore}</li></ul>`;
        });

        card += "</div>";

        boxFilms.innerHTML += card;

    });
};

// stampaFilms();
document.addEventListener("DOMContentLoaded", ()=>{
    stampaFilms(listaFilm);
    mostraSingoloFilm(contatore);
});

// filtro
function filtraFilm(listaFilm, genere){
    if(genere == "Tutti"){
        return listaFilm;
    }else{
        let filmsFiltrati = listaFilm.filter((mieiFilms) => mieiFilms.genere == genere);
        return filmsFiltrati;
    };
};

let genereSel = document.querySelector("#genereSel");
let btnSel = document.querySelector("#btnSel");

btnSel.addEventListener("click", ()=>{
    let genere = genereSel.value;
    let filmsFiltrati = filtraFilm(listaFilm, genere);
    stampaFilms(filmsFiltrati);    
});

let btnJSON = document.querySelector("#btnJSON");
let boxJSON = document.querySelector("#boxJSON");

btnJSON.addEventListener("click", ()=>{
    let filmsJSON = JSON.stringify(listaFilm);
    boxJSON.innerHTML = filmsJSON;
});

// carosello
let boxCarosello = document.querySelector("#boxCarosello");
let btnIndietro = document.querySelector("#btnIndietro");
let btnAvanti = document.querySelector("#btnAvanti");

let cardCarousel = "";
function mostraSingoloFilm(indice){
    let singoloFilm = listaFilm[indice];
    cardCarousel = `<div id='cardSingola'>
        <h4>${singoloFilm.titolo}</h4>
        <img src=${singoloFilm.locandina}>
        <p>Regista: ${singoloFilm.regista}</p>
        <p>Anno: ${singoloFilm.anno}</p>
        <p>Genere: ${singoloFilm.genere}</p>
        Attori: `;
        
        singoloFilm.attori.forEach(attore => {
            cardCarousel += `<ul><li>${attore}</li></ul>`;
        });

        cardCarousel += "</div>";

        boxCarosello.innerHTML = cardCarousel;
};

let contatore = 0;

function scorri (direzione){
    if(direzione == "indietro"){
        if(contatore == 0){
            contatore = listaFilm.length -1;
        }else{
            contatore--;
        }
    }else{
        if(contatore >= listaFilm.length -1){
            contatore = 0;
        }else{
            contatore++;
        }
    };
    
    mostraSingoloFilm(contatore);
};

btnAvanti.addEventListener("click", ()=>{
    scorri("avanti");
});

btnIndietro.addEventListener("click", ()=>{
    scorri("indietro");
});