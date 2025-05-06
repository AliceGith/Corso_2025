let demo = document.getElementById("demo");

// gli oggetti mi permettono di descrivere delle entità presenti nel mondo reale. questa descrizione avviene attraverso le proprietà, i suoi comportamenti invece sono delineati attraverso i metodi

// oggetto notazione letterale
let studente = {
    // proprietà. principio [key: value]
    // nomeproprietà: valore
    nome: "Giangi",
    cognome: "Giangio",
    eta: 25,
    presenza: true,

    // metodo
    saluta: function(){
        // il this fa riferimento all'oggetto contenitore
        // console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome}`);
        let saluto = `Ciao, mi chiamo ${this.nome} ${this.cognome}`;
        return saluto;
    },

    salutaQualcuno: function(nome, cognome){
        let saluto = `Buongiorno signor* ${nome} ${cognome}`
        return saluto;
    },

    // l'overload in js non esiste
    salutaQualcuno: function(qualcuno){
        let saluto = "";
        if(qualcuno != null){
            saluto = `Ciao ${qualcuno}, io mi chiamo ${this.nome}`
        }else{
            saluto = `Ciao, non ricordo il tuo nome. Io mi chiamo ${this.nome}`
        }
        return saluto;
    },

    /** jsdoc: servono alla documentazione ufficiale e per avere i suggerimenti. non implicano nessun contratto col programmatore. un contratto obbligherebbe ad usare il tipo di dato dichiarato
     * 
     * @param {string[]} listanomi 
     * @returns msgSaluto
     */
    salutaTutti: function(listanomi){
        let msgSaluto = "";
        listanomi.forEach(nome => {
            msgSaluto += `<br>Ciao ${nome}`;
        });
        return msgSaluto;
    }
    // salutaQualcuno: function(){
    //     let saluto = "Ciao, non ricordo il tuo nome. Mi dici come ti chiami?";
    //     return saluto;
    // }
}

// leggo una o più proprietà utilizzato la notazione .
// demo.innerHTML = studente.nome + studente.cognome + studente.eta + studente.presenza;

demo.innerHTML = `${studente.nome} ${studente.cognome}, ${studente.eta}, ${studente.presenza} <br> ${studente.saluta()} <br> ${studente.salutaQualcuno("Alice")}`;

demo.innerHTML += `<br>${studente.salutaQualcuno()}`;

// studente.saluta();

// saluto un array di nomi
let personeDaSalutare = ["Anna", "Luisa", "Pasquale", "Giovanni"];

// for(let i = 0; i < personeDaSalutare.length; i++){
//     demo.innerHTML += `<br>${studente.salutaQualcuno(personeDaSalutare[i])}`;
// };

// demo.innerHTML += `<br>${studente.salutaQualcuno()}`;

demo.innerHTML += `<br>${studente.salutaTutti(personeDaSalutare)}`;