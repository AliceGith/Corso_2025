let stringa = "Ciao";
console.log(stringa[0]);
console.log(stringa[stringa.length-1]);
console.log(stringa.length);

let stringa2 = "Ciao, come stai?";
console.log(stringa2.length);
console.log(stringa2[stringa2.length-1]);

let stringa3 = "Mi piace Javascript!";
let search1 = stringa3.indexOf("ascr");
console.log(search1);

let search2 = stringa3.indexOf("a");
console.log(search2);

let search3 = stringa3.lastIndexOf("a");
console.log(search3);

let search4 = stringa3.charCodeAt(1); //codice ASCII
console.log(search4);

let search5 = stringa3.charAt(1);
console.log(search5);

// metodi per taglio
let stringa4 = "Tra poco impariamo gli IF";
let sl = stringa4.slice(2,10);
console.log(sl);

let sub = stringa4.substring(2,10);
console.log(sub);

// metodi per sostistuzione
let stringa5 = "Javascript è meglio di Python";
let rep = stringa5.replace("Javascript","Typescript");
console.log(rep);

console.log(rep.toLocaleUpperCase());
console.log(rep.toLocaleLowerCase());

// metodo split
let stringaFinale = "Ho visto cose che voi umani non potreste immaginare.";
// splitta la stringa ogni volta che trova il pattern passato al metodo e crea un array
let split = stringaFinale.split(" ");
console.log(split);
let split2 = stringaFinale.split("o");
console.log(split2);

let nomeFile = "CV_Dario_Mennillo.pdf";
let estensione = nomeFile.split(".");
let est = estensione[estensione.length-1];
console.log(estensione);
console.log(est);
let cv = nomeFile.split("_");
console.log(cv);


