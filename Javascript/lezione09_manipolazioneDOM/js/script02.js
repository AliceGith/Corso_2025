// let miaLista = document.getElementById("miaLista");
// miaLista.innerHTML += "<li>Penna</li>";

let miaLista = document.querySelector("#miaLista");

//1. Creo un nodo elemento HTML (OGGETTO)
let li = document.createElement("li"); //<li></li>
li.textContent = "Penna";
li.setAttribute("class", "red");

//2.dato che li è un Object lo assegno come figlio
miaLista.appendChild(li);

let btnDel = document.querySelector("#btnDel");
btnDel.addEventListener("click", ()=>{
    miaLista.removeChild(li); //rimuove questo oggetto li dal parent
});


let persone = [
    "Laura",
    "Paolo",
    "Gennaro"
];

//Scopo: creare un li per ogni singola persona
let listaPersone = document.querySelector("#listaPersone");

//Creo un ciclo for per creare un li per ogni nome
persone.forEach(pers =>{
    //listaPersone.innerHTML += "<li>" + pers + "</li>";
    let li = document.createElement("li");
    li.textContent = pers;
    listaPersone.appendChild(li);

    li.addEventListener("click", ()=>{
        listaPersone.removeChild(li);         
    })
})