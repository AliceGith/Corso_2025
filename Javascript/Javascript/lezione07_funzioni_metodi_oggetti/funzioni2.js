let studenti = [
    "Alice",
    "Nico",
    "Agustina",
    "Gabriele",
    "Leo",
    "Pietro",
    "Alessia",
    "Angel",
    "Davide",
    "Tommaso",
    "Valeria"
];

let demo = document.getElementById("demo");

function stampaListaStudenti(){
    demo.innerHTML = "";
    studenti.forEach(studente => {
        console.log(`Ciao, ${studente}`);
        demo.innerHTML += `<li>${studente}</li>`;
    });

    let numeroStudenti = studenti.length;

    demo.innerHTML += `<h3> Studenti in aula: ${numeroStudenti} </h3>`;

    demo.innerHTML += `<h3> Numero docenti del corso: ${numeroDocenti};`
}

// console.log(numeroStudenti);

let numeroDocenti = 4;

// stampaListaStudenti();