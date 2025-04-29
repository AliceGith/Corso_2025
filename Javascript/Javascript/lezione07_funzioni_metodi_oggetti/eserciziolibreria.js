let titoloInput = document.getElementById("titoloInput");
let btnAdd = document.getElementById("btnAdd");
let btnMostra = document.getElementById("btnMostra");
let libreria = document.getElementById("libreria");

let libri = [
    "Shogun",
    "Il piccolo principe",
    "Le cronache di Narnia",
    "Monte di Dio",
    "Montecristo",
    "Il rosso e il nero",
    "Il nome della rosa",
    "Maradona la mano de dios"
];


function aggiungiLibri(){
    let libro = titoloInput.value.trim();
    if(libro){
        libri.push(libro);
    }
    libro = "";
    titoloInput.value = "";
    
    if(libreria.style.display == "block"){
        libreria.innerHTML = "";
        for(let i = 0; i < libri.length; i++){
            libreria.innerHTML += libri[i] + "<br>";
        }
    }
}

function mostraLibri(){
    libreria.innerHTML = "";
    for(let i = 0; i < libri.length; i++){
        libreria.innerHTML += libri[i] + "<br>";
    }
    if(libreria.style.display == "none"){
        libreria.style.display = "block";
    }else{
        libreria.style.display = "none"
    }
}

btnAdd.addEventListener("click", aggiungiLibri);
titoloInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        aggiungiLibri();
    }
});

btnMostra.addEventListener("click", mostraLibri)