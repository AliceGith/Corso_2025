let btnAdd = document.getElementById("btnAdd");
let lista = document.getElementById("lista");

class ToDo{
    constructor(item, ora){
        this.item = item;
        this.ora = ora;
    }

    stampa(){
        return this.item + " - aggiunto alle " + this.ora;
    }
}

let listaTodos = [];

function addTodo(){
    let item = document.getElementById("item").value;

    if(item.trim() != ""){

        // adesso creo un nuovo oggetto di tipo ToDo con item che è il value del campo input e adesso dichiarata nell'altro script
        let todo = new ToDo(item, adesso);
        
        if(listaTodos.length == 5){
            listaTodos.shift();
        };
        listaTodos.push(todo);
        // inserisco ogni singolo oggetto all'interno dell'array
        console.log(todo);
        stampaLista();
        document.getElementById("feed").innerHTML = "";
    }else{
    document.getElementById("feed").innerHTML = "Amico, inserisci qualcosa";
    }
    document.getElementById("item").value = "";
}

function stampaLista(){
    lista.innerHTML = "";
    for(let i = 0; i < listaTodos.length; i++){
        lista.innerHTML += "<li>" + listaTodos[i].stampa() + "</li>";
    }
}

btnAdd.addEventListener("click", addTodo);