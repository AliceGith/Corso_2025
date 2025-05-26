let demo = document.querySelector(".demo");
let punti = document.querySelector(".punti");
let btnReset = document.querySelector("#btnReset");
let vincita = document.querySelector(".vincita");
let giocatoreInCorso = document.querySelector(".giocatoreInCorso");
let giocatore = true;

let tictactoe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

for(let i = 0; i < tictactoe.length; i++){
    let riga = document.createElement("div");
    riga.setAttribute("class", "riga");
    for(let j = 0; j < tictactoe[i].length; j++){
        let cella = document.createElement("div");
        cella.setAttribute("class", "cella");
        riga.appendChild(cella);
        cella.addEventListener("click", ()=>{
            if(cella.textContent == ""){
                cella.textContent = changePlayer();   
                tictactoe[i][j] = cella.textContent;
                controllaVittoria();
            }
        })
    }
    demo.appendChild(riga);
}

btnReset.addEventListener("click", reset);

function reset(){
    for(let i = 0; i < tictactoe.length; i++){
        for(let j = 0; j < tictactoe[i].length; j++){
            tictactoe[i][j] = "";
        } 
    }
    let celle = document.querySelectorAll(".cella");
    celle.forEach(cella =>{
        cella.textContent = "";
    })
}

function changePlayer(){
    if(giocatore){
        giocatoreInCorso.innerHTML = "Turno del giocatore 1: X"
        let simbolo = "O";
        giocatore = false;        
        return simbolo;
    }else{
        giocatoreInCorso.innerHTML = "Turno del giocatore 2: O"
        let simbolo = "X";
        giocatore = true;
        return simbolo;
    }
}

function controllaVittoria(){

    let arrayControllo = [];
    for(let i = 0; i < tictactoe.length; i++){
        for(let j = 0; j < tictactoe[i].length; j++){
            arrayControllo.push(tictactoe[i][j]);
        } 
    }
    
    if(arrayControllo[0] == arrayControllo[1] && arrayControllo[0] == arrayControllo[2]){
        if(arrayControllo[0] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[0] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[3] == arrayControllo[4] && arrayControllo[3] == arrayControllo[5]){
        if(arrayControllo[3] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[3] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[6] == arrayControllo[7] && arrayControllo[6] == arrayControllo[8]){
        if(arrayControllo[6] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[6] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[0] == arrayControllo[3] && arrayControllo[0] == arrayControllo[6]){
        if(arrayControllo[0] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[0] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[1] == arrayControllo[4] && arrayControllo[1] == arrayControllo[7]){
        if(arrayControllo[1] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[1] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[2] == arrayControllo[5] && arrayControllo[2] == arrayControllo[8]){
        if(arrayControllo[2] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[2] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[0] == arrayControllo[4] && arrayControllo[0] == arrayControllo[8]){
        if(arrayControllo[0] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[0] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    if(arrayControllo[2] == arrayControllo[4] && arrayControllo[2] == arrayControllo[6]){
        if(arrayControllo[2] == "X"){
            vincita.innerHTML = "Vince giocatore 1";
            setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)
        }else if(arrayControllo[2] == "O"){
            vincita.innerHTML = "Vince giocatore 2";
               setTimeout(()=>{
                reset();
                vincita.innerHTML = "";
            }, 2000)           
        }
    }   
    console.log(arrayControllo);
    
}

// let punteggio = punti.textContent = "0 - 0";