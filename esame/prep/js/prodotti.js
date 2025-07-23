let stampaWallpaper = document.querySelector("#wallpaper");
let stampaWallpaper2 = document.querySelector("#wallpaper2");
let stampaMusica = document.querySelector("#musica");
let stampaIcone = document.querySelector("#icone");
let stampaAsset = document.querySelector("#asset");

function caricaWallpaper(){
    const urlWallpaper = "http://localhost:3000/wallpaper";
    fetch(urlWallpaper)
    .then(data => {return data.json()})
    .then(response =>{  
        response.forEach((wallpaper) => {
            creaCardSwiper(stampaWallpaper, wallpaper);
        });         
        swiperWallpaper();
    })
}

function caricaMusica(){
    const urlMusica = "http://localhost:3000/musica";
    fetch(urlMusica)
    .then(data => {return data.json()})
    .then(response =>{
        response.forEach(musica => {
            creaCard(stampaMusica, musica);
        });       
    })
}

function caricaIcone(){
    const urlIcone = "http://localhost:3000/icone";
    fetch(urlIcone)
    .then(data => {return data.json()})
    .then(response =>{
        response.forEach(icone => {
            creaCard(stampaIcone, icone);
        });       
    })
}

function caricaAsset(){
    const urlAsset = "http://localhost:3000/asset";
    fetch(urlAsset)
    .then(data => {return data.json()})
    .then(response =>{
        response.forEach(asset => {
            creaCard(stampaAsset, asset);
        });       
    })
}

// function creaCard(destinazione, prodotto, index){

//     // let row = document.createElement("row");
//     let carouselItem = document.createElement("div");
//     carouselItem.classList.add("carousel-item");
//     if(index == 0){
//         carouselItem.classList.add("active");
//     }

//     let card = document.createElement("div");
//     card.classList.add("card");
//     if(destinazione == stampaWallpaper){
//         card.classList.add("col-lg-12");
//     }else{
//         if(destinazione == stampaMusica){
//             card.classList.add("col-lg-6");
//         }else{
//             card.classList.add("col-lg-4");
//         }
//     }

//     // let linkGioco = document.createElement("a");
//     // linkGioco.setAttribute("href", "./pages/dettagli.html?id="+gioco.id);
//     // linkGioco.textContent = gioco.titolo;

//     let immagine = document.createElement("img");
//     immagine.classList.add("card-img-top");
//     immagine.setAttribute("src", prodotto.immagine);

//     let cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     let nome = document.createElement("h3");
//     nome.classList.add("card-title");
//     nome.textContent = prodotto.nome;

//     let descrizione = document.createElement("p");
//     descrizione.classList.add("card-text");
//     descrizione.textContent = prodotto.descrizione;
    
//     let prezzo = document.createElement("p");
//     prezzo.classList.add("card-text");
//     prezzo.textContent = prodotto.prezzo;
    
//     let disponibilita = document.createElement("p");
//     disponibilita.classList.add("card-text");
//     disponibilita.textContent = prodotto.disponibilita;

//     let btnAdd = document.createElement("button");
//     btnAdd.classList.add("btn");
//     btnAdd.classList.add("btn-primary");
//     btnAdd.textContent = "Aggiungi al carrello";
//     // btnAdd.addEventListener("click", ()=>{
//     //     carrello(gioco);
//     // })
    
//     cardBody.appendChild(nome);
//     cardBody.appendChild(descrizione);
//     cardBody.appendChild(prezzo);
//     cardBody.appendChild(disponibilita);
//     cardBody.appendChild(btnAdd);
//     card.appendChild(immagine);
//     card.appendChild(cardBody);
//     carouselItem.appendChild(card);
//     // row.appendChild(card);

//     destinazione.appendChild(carouselItem);    
// }

function creaCardSwiper(destinazione, prodotto){
    let swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    
    let slideContentWrapper = document.createElement("div");
    slideContentWrapper.classList.add("slide-content-wrapper");
    slideContentWrapper.classList.add("position-relative");

    let slideContentText = document.createElement("div");
    slideContentText.classList.add("slide-content-text", "position-absolute", "bottom-0", "start-0", "w-100", "p-5", "d-flex", "justify-content-between");

    let nome = document.createElement("p");
    nome.textContent = prodotto.nome + " " + prodotto.prezzo + " €";
    
    let swiperSlide2 = document.createElement("div");
    swiperSlide2.classList.add("swiper-slide");   

    let immagine = document.createElement("img");
    immagine.setAttribute("src", prodotto.immagine);

    let btnAdd = document.createElement("button");
    btnAdd.classList.add("btn");
    btnAdd.classList.add("rounded-pill");
    btnAdd.innerHTML = "<i class='bi bi-cart-fill'></i> Aggiungi";

    btnAdd.addEventListener("click",  function(){

        let prodottoCarrello = {
            id: prodotto.id,
            nome: prodotto.nome,
            prezzo: prodotto.prezzo,
            immagine: prodotto.immagine
        }
        aggiungiCarrello(prodottoCarrello);  
        
        // btn.classList.remove("bi");
        // btn.classList.remove("bi-cart");
        // btn.textContent = "Sto aggiungendo al carrello";

        // setTimeout(() => {
        //     btn.classList.add("bi");
        //     btn.classList.add("bi-cart");
        //     btn.textContent = "";
        // }, 2000);
     });

    let immagine2 = document.createElement("img");
    immagine2.setAttribute("src", prodotto.immagine);

    slideContentWrapper.appendChild(immagine);
    swiperSlide.appendChild(slideContentWrapper);
    slideContentText.appendChild(nome);
    slideContentText.appendChild(btnAdd);
    swiperSlide.appendChild(slideContentText);
    swiperSlide2.appendChild(immagine2);
    destinazione.appendChild(swiperSlide);
    stampaWallpaper2.appendChild(swiperSlide2);
}

function swiperWallpaper(){
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        // autoplay: {
        //     delay: 5000,
        // },
    });
}

function aggiungiCarrello(prodotto){
    const URL = "http://localhost:3000/carrello";
    fetch(URL, {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(prodotto)
    })
    .then(data =>{
        console.log("prodotto aggiunto", data);
    })  
}

document.addEventListener("DOMContentLoaded", caricaWallpaper);
// document.addEventListener("DOMContentLoaded", caricaMusica);
// document.addEventListener("DOMContentLoaded", caricaIcone);
// document.addEventListener("DOMContentLoaded", caricaAsset);