let eventWrapper = document.querySelector("#event-wrapper");

let eventi = [
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

eventi.forEach(evento => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("col-lg-4", "mb-4");

    let card = document.createElement("div");
    card.classList.add("card", "h-100");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", evento.immagine);
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let titolo = document.createElement("h5");
    titolo.classList.add("card-title");
    titolo.textContent = evento.titolo;

    let descrizione = document.createElement("p");
    descrizione.classList.add("card-text");
    descrizione.textContent = evento.descrizione;

    let data = document.createElement("p");
    data.classList.add("card-text");
    data.textContent = evento.data;

    cardBody.appendChild(titolo);
    cardBody.appendChild(descrizione);
    cardBody.appendChild(data);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);

    eventWrapper.appendChild(cardContainer);

});