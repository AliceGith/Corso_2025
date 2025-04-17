//ARRAY: contenitore di element simili tra loro (elementi dello stesso tipo). Sono delle strutture che fanno parte della famiglia degli  Enumerable e sono 0-based
//AMMESSO E NON CONESSO: creare array misti

//              0       1         2        3         4          5
let frutta = ["mela", "pera", "banana", "pesca", "ciliegia", "kiwi"];

//leggo i valori in determinati indici
console.log(frutta[2]); //banana
console.log(frutta[4]); //ciliegia
console.log(frutta[0]); //mela
console.log(frutta[5]); //undefined

//length è una proprietà degli array
let dimensioneArray = frutta.length; //6
console.log("L'array contiene " + dimensioneArray + " elementi");


//Voglio capire qual è l'ultimo frutto inserito 
let ultimoFrutto = frutta[frutta.length - 1]; //frutta[5]
console.log("L'ultimo frutto inserito è " + ultimoFrutto);

//primo frutto
let primoFrutto = frutta[0];
console.log("Il primo frutto è " + primoFrutto);

/////////////////////////////////////////////////
let studenti = ["Augustina", "Amir", "Leo", "Pietro", "Valeria", "Gabriele", "Alessia", "Angel", "Nicola", "Alice", "Tommaso", "Davide"];

let numStudenti = studenti.length; 
console.log("In classe ci sono " + numStudenti + " studenti");

// let ultimoStudente = studenti[studenti.length - 1];
let ultimoStudente = studenti[numStudenti - 1];
console.log("L'ultimo studente in elenco è " + ultimoStudente);

//Si aggiunge un nuovo studente di nome Giorgio
//metodo push() serve ad inserire un elemento nell'array
studenti.push("Giorgio"); 

//stampo tutto l'array
console.log(studenti);
console.log("L'ultimo studente inserito: " + studenti[studenti.length - 1]);

//voglio ordinare alfabeticamente l'array
//il metodo sort() mi permette di ordinare l'array
studenti.sort();
console.log(studenti);

//Si aggiungono altre 3 persone
let altrePersone = ["Anna", "Pasquale", "Luisa"];
studenti.push(...altrePersone); //... operatore spread, unisce più array
studenti.sort();

//Inverto l'ordine
studenti.reverse();

//Rimuovo l'ultimo studente
studenti.pop();

//Rimuovo il primo studente
studenti.shift();
console.log(studenti);

//Sostituisco qualche studente con "GENNARO"
//2 -> indice di partenza
//6 -> num di elementi da eliminare partendo dall'indice 2
studenti.splice(2, 6, "GENNARO");

//Sostituisco uno studente a caso (sto sostituendo lo studente di indice 3)
studenti.splice(3, 1, "LAURA");
console.log(studenti);

//Questi metodi sopra modificano l'array

//ADESSO vediamo dei metodi che non modificano l'array
//ricerca degli elementi
//In che posizione si trova Anna
let posizioneStud = studenti.indexOf("Anna"); //questo metodo restituisce la prima occorrenza
console.log("Lo studente si trova in posizione " + posizioneStud);

let posizioneStud2 = studenti.indexOf("Dario"); //In questo caso -1 
console.log("Lo studente si trova in posizione " + posizioneStud2); 

//Voglio gli studenti con il nome maggiore di 6 caratteri
let nomeMag6 = studenti.filter((nome) => nome.length > 6);
console.log(nomeMag6);

//Unire elementi di un array
let saluti = ["Ciao", "come", "stai", "?"];
let frase = saluti.join(" "); //Lo spazio si inserisce tra un elemento e l'altro
console.log(frase);

//Separo le lettere di una stringa
let mioNome = "Dario"; //Le stringhe sono array di caratteri
console.log(mioNome[0]);

let mioNomeArr = mioNome.split("");
console.log(mioNomeArr);

//Inverti il tuo nome
let nomeStudente = "Agustina";
let nomeINV = nomeStudente.split("").reverse().join("").toLocaleUpperCase();
console.log(nomeINV);




