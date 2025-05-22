let demo = document.querySelector(".demo");
let punti = document.querySelector(".punti");
let btnReset = document.querySelector("#btnReset");

let tictactoe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

tictactoe.forEach(array =>{
    let riga = document.createElement("div");
    riga.setAttribute("class", "riga");
    array.forEach(casella =>{
        let cella = document.createElement("div");
        cella.setAttribute("class", "cella");
        cella.textContent = casella;
        riga.appendChild(cella);
        cella.addEventListener("click", ()=>{
            tictactoe[array, casella] = "X";
            cella.textContent = "X";
            console.log(tictactoe);
        })
    });
    demo.appendChild(riga);
});

btnReset.addEventListener("click", () => {
    tictactoe.forEach(array =>{
        array.forEach(casella =>{
            casella.innerHTML = "";
            console.log(tictactoe);
            
        })
    })
});

let punteggio = punti.textContent = "0 - 0";