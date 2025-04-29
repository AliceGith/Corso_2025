for(let i = 0; i < 3; i++){
    console.log("Ciao Dario. Giro n°: " + (i+1) + ". La i vale: " + i);
}

for(let i = 1; i <= 10; i++){
    console.log("La i vale: " + i);   
}

for(let i = 10; i >= 1; i--){
    console.log("La i vale: " + i);
}

let colori = ["rosso", "giallo", "blu", "rosa", "verde"];
let frutti = ["ciliegia", "banana", "mirtillo", "pompelmo", "mela"];

for(let i = 0; i < colori.length; i++){
    console.log("Indice i: " + i + " - colore: " + colori[i]);
    console.log(frutti[i]);       
}

for(let i = frutti.length - 1; i >= 0; i--){
    console.log(frutti[i]);
    
}