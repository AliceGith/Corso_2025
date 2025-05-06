let demo = document.getElementById("demo");

let societaSportiva = {
    nome: "SSC Javascript",
    presidente: {
        nome: "Pierluigi",
        cognome: "Pierantola",
        incarico: 2015
    },
    stadio: {
        nome: "Immaginazione e Pallone",
        capienza: 50000,
        indirizzo: {
            via: "Via Tal dei Tali",
            citta: "Torino",
            cap: "10100"
        }
    },
    allenatore: {
        nome: "Egle",
        cognome: "Risola",
        incarico: 2024
    },
    giocatori: [
        {nome: "Agustina", cognome: "Fredes", contratto: true, numero: 21},
        {nome: "Tommaso", cognome: "Cassolo", contratto: true, numero: 8},
        {nome: "Davide", cognome: "Vasi", contratto: true, numero: 7},
        {nome: "Valeria", cognome: "Torretti", contratto: true, numero: 3},
        {nome: "Dario", cognome: "Mennillo", contratto: true, numero: 404},
        {nome: "Leonardo", cognome: "Ore", contratto: true, numero: 20},
        {nome: "Alessia", cognome: "Mastrogiovanni", contratto: true, numero: 10},
        {nome: "Pietro", cognome: "Alvarez", contratto: true, numero: 9},
        {nome: "Angel", cognome: "Cocco", contratto: true, numero: 666},
        {nome: "Alice", cognome: "D'Alessandro", contratto: true, numero: 5},
        {nome: "Nicola", cognome: "Costanzo", contratto: true, numero: 69},
        {nome: "Gabriele", cognome: "Taurisani", contratto: true, numero: 1},
    ],

    // forma compatta di presentaSquadra: function(){}
    presentaSquadra(){
        let msg = `${this.nome} è lieta di partecipare al campionato di calcio 2025/2026.<br>
        Presidente: ${this.presidente.nome} ${this.presidente.cognome}.<br>
        Allenatore: ${this.allenatore.nome} ${this.allenatore.cognome}.<br>
        Stadio: ${this.stadio.nome} in ${this.stadio.indirizzo.via} ${this.stadio.indirizzo.citta}
        I nostri campioni: `;

        for(let i = 0; i < this.giocatori.length; i++){
            msg += `<li> ${this.giocatori[i].nome} ${this.giocatori[i].cognome} con il numero ${this.giocatori[i].numero}!`;
        }
        return msg;
    }
}

demo.innerHTML = societaSportiva.presentaSquadra();