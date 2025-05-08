let demo = document.getElementById("demo");

class Film {
    constructor(titolo, regista, anno, genere, attori, locandina){
        this.titolo = titolo;
        this.regista = regista;
        this.anno = anno;
        this.genere = genere;
        this.attori = attori;
        this.locandina = locandina;
    }
}

let listaFilm = [
    new Film("Guida galattica per autospottisti", "Hammer & Tongs", "2005", "Fantascienza", ["Martin Freeman", "Sam Rockwell", "Zooey Deshanel"], "./img/guida.jpg" ),
    new Film("Everything Everywhere All At Once"),
    new Film("La solitudine dei numeri primi"),
    new Film("Get Out"),
    new Film("Barbie"),
    new Film("Mew vs Mewtwo"),
    new Film("Inception"),
    new Film("Ocean's Eleven"),
    new Film("Shrek"),
    new Film("Dungeons & Dragons - L'onore dei ladri")
]

// for in
for (const titolo in listaFilm) {
        const element = object;
        demo.innerHTML += element;
}

