let titoli = ["Harry Potter e la camera dei segreti","Il signore degli anelli","100 anni di solitudine","La solitudine dei numeri primi","Baudolino","Siddartha","Il barone rampante"];

let autori = ["Rowling", "J.R.R.Tolkien","Marquez","Paolo Giordano","Umbero Eco","Hermann Hesse","Italo Calvino"];

titoli.forEach(titolo =>{
    console.log(titolo);
})

autori.forEach(autore =>{
    console.log(autore);
})

let mieiLibri = document.getElementById("mieiLibri");

titoli.forEach(titolo =>{
    mieiLibri.innerHTML += "<li>" + titolo + "</li>";
})
























console.log(titoli);
console.log(autori);