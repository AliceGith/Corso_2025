// queryselector("sintassiCSS")
// #id - .class - tagName

// byID
// let myBody = document.querySelector("#myBody");

// byTagName
// let myBody = document.querySelector("body");

// byClass
let myBody = document.querySelector(".dimBody");

// console.log(myBody);
// console.log(typeof(myBody));

let demo = document.querySelector("#demo");
// console.log(demo);

let par = document.querySelector("#par");
// voglio leggere il testo nel par
let testoPar = par.innerHTML; //legge e scrive HTML e testo
// console.log(testoPar);

let soloTestoPar = par.textContent; //legge e scrive solo testo
// console.log(soloTestoPar);

let miaLista = document.querySelector("#miaLista");
// miaLista.innerHTML = "<li>Pane</li><br>";
// miaLista.textContent += "<li>Birra</li>";

// il querySelector restituisce sempre la prima occorrenza
let li = document.querySelector("li");
// console.log(li);

// in questo modo prende tutti gli li esistenzi e li piazza in una NODELIST (parente stretto dell'array)
let lis = document.querySelectorAll("li");
console.log(lis);

// se voglio leggere il contenuto testuale dei miei li mi serve un ciclo for o foreach
// for(let i = 0; i < lis.length; i++){
//     console.log(lis[i].textContent);
// }
lis.forEach(li => {
    console.log(li.textContent);
})

console.log("- Solo cose della todolist -");
let lisTodos = document.querySelectorAll("#mieTodos li");
lisTodos.forEach(li =>{
    console.log(li.textContent);
})
console.log(lisTodos[0].innerHTML);


