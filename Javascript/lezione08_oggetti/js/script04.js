let demo = document.getElementById("demo");

let oggi = new Date();
// demo.innerHTML = oggi;

let est = new Date("May 06, 2015, 17:57");

let diff = oggi.getFullYear() - est.getFullYear();

// demo.innerHTML += `Sono trascorsi: ${diff} anni`;

let adesso = "";

// orologio digitale
setInterval(() => {
    let oraEsatta = new Date();
    let ora = (oraEsatta.getHours() < 10 ? '0': '') + oraEsatta.getHours();
    let minuti = (oraEsatta.getMinutes() < 10 ? '0': '') + oraEsatta.getMinutes();
    let secondi =(oraEsatta.getSeconds() < 10 ? '0': '') + oraEsatta.getSeconds();
    demo.innerHTML = `<br> ${ora}:${minuti}:${secondi}`;

    adesso = `${ora}:${minuti}:${secondi}`
}, 1000);

