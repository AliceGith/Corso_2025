let eventiFuturi = document.querySelector(".eventi-futuri");
let eventiPassati = document.querySelector(".eventi-passati");

let eventiF = [
    {
        titolo: "Mario",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "17-08-2025",
        immagine: "https://picsum.photos/200/300?1"
    },
    {
        titolo: "Fortnite",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "18-08-2025",
        immagine: "https://picsum.photos/200/300?2"
    },
    {
        titolo: "Minecraft",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "19-08-2025",
        immagine: "https://picsum.photos/200/300?3"
    },
    {
        titolo: "Sonic",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "20-08-2025",
        immagine: "https://picsum.photos/200/300?4"
    },
    {
        titolo: "Celeste",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "21-08-2025",
        immagine: "https://picsum.photos/200/300?5"
    },
    {
        titolo: "WoW",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "22-08-2025",
        immagine: "https://picsum.photos/200/300?6"
    }
]

let eventiP = [
    {
        titolo: "Trackmania",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "17-06-2025",
        immagine: "https://picsum.photos/200/300?1"
    },
    {
        titolo: "Starcraft",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "18-06-2025",
        immagine: "https://picsum.photos/200/300?2"
    },
    {
        titolo: "Roblox",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "19-06-2025",
        immagine: "https://picsum.photos/200/300?3"
    },
    {
        titolo: "Speedrun",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "20-06-2025",
        immagine: "https://picsum.photos/200/300?4"
    },
    {
        titolo: "Prince of Persia",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "21-06-2025",
        immagine: "https://picsum.photos/200/300?5"
    },
    {
        titolo: "FFXIV",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, magnam alias quam eum beatae totam ipsum ut consequuntur tempore numquam.",
        data: "22-06-2025",
        immagine: "https://picsum.photos/200/300?6"
    }
]

for(let i = 0; i <3; i++){
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("col-lg-4", "mb-4");

    let card = document.createElement("div");
    card.classList.add("card", "h-100");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", eventiF[i].immagine);
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let titolo = document.createElement("h5");
    titolo.classList.add("card-title");
    titolo.textContent = eventiF[i].titolo;

    let descrizione = document.createElement("p");
    descrizione.classList.add("card-text");
    descrizione.textContent = eventiF[i].descrizione;

    let data = document.createElement("p");
    data.classList.add("card-text");
    data.textContent = eventiF[i].data;

    cardBody.appendChild(titolo);
    cardBody.appendChild(descrizione);
    cardBody.appendChild(data);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);

    eventiFuturi.appendChild(cardContainer);
}

for(let i = 0; i <3; i++){
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("col-lg-4", "mb-4");

    let card = document.createElement("div");
    card.classList.add("card", "h-100");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", eventiP[i].immagine);
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let titolo = document.createElement("h5");
    titolo.classList.add("card-title");
    titolo.textContent = eventiP[i].titolo;

    let descrizione = document.createElement("p");
    descrizione.classList.add("card-text");
    descrizione.textContent = eventiP[i].descrizione;

    let data = document.createElement("p");
    data.classList.add("card-text");
    data.textContent = eventiP[i].data;

    cardBody.appendChild(titolo);
    cardBody.appendChild(descrizione);
    cardBody.appendChild(data);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);

    eventiPassati.appendChild(cardContainer);
}
