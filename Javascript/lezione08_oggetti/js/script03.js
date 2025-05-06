let demo = document.getElementById("demo");

// la notazione con costruttore è molto utile nel caso in cui ho tanti oggetti dello stesso tipo

// usare la lettera maiuscola
// class Studente {
//     constructor(nomeStu, cognomeStu, matricolaStu) {
//         // this(obbligatorio).nomeproprieta = parametro
//         this.nome = nomeStu;
//         this.cognome = cognomeStu;
//         this.matricola = matricolaStu;
//     }
// }

// se ci si va sopra da l'opzione di convertire in class
// function Studente(nome, cognome, matricola){
//     this.nome = nome;
//     this.cognome = cognome;
//     this.matricola = matricola;
// }

class Studente {
    constructor(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
}
// new è una keyword che permette di invocare il costruttore dell'oggetto
let studente1 = new Studente("Pippo", "Rossi", 1);
let studente2 = new Studente("Paola", "Verdi", 2);

let aula = [
    new Studente("Anna", "Gialli", 1),
    new Studente("Paolo", "Paoli", 2)
]

let dataOggi = new Date();

demo.innerHTML = studente1.nome;

class Docente {
    constructor(nome, cognome, corso){
        this.nomeDocente = nome;
        this.cognomeDocente = cognome;
        this.corsoAssegnato = corso;
        this.scuola = "Immaginazione e lavoro"; //questa proprietà non varia, vuol dire che tutti i docenti che creo hanno questa scuola come proprietà
    }

    presentati() {
        return `Sono ${this.nomeDocente} ${this.cognomeDocente} e insegno nel corso di ${this.corsoAssegnato} a ${this.scuola}`
    }
}

// stampo le proprietà del docente facendo riferimento alla denominazione delle stesse
let docente1 = new Docente("Pier", "Profio", "JS");
let docente2 = new Docente("Luca", "Ceroni", "Comunicazione");

demo.innerHTML += "<br>" + docente1.nomeDocente;
// demo.innerHTML += "<br>" + aula[0].nome + "<br>" + aula[1].nome;
aula.forEach(stud => {    
    demo.innerHTML += `<br>${stud.nome} ${stud.cognome}`;
});

demo.innerHTML += "<br>" + docente1.presentati();
demo.innerHTML += "<br>" + docente2.presentati();