let stampaWallpaper = document.querySelector("#wallpaper");
let stampaMusica = document.querySelector("#musica");
let stampaIcone = document.querySelector("#icone");
let stampaAsset = document.querySelector("#asset");

function caricaWallpaper(){
    const urlWallpaper = "http://localhost:3000/wallpaper";
    fetch(urlWallpaper)
    .then(data => {return data.json()})
    .then(response =>{
        // response.forEach((wallpaper, index) => {
        //     creaCard(stampaWallpaper, wallpaper, index);
        // });    
        response.forEach((wallpaper) => {
            creaCardSwiper(stampaWallpaper, wallpaper);
        });         
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
    swiperSlide.style.backgroundImage = `url(${prodotto.immagine})`;
    console.log(prodotto.immagine);
    
    
    // let immagine = document.createElement("img");
    // // immagine.classList.add("card-img-top");
    // immagine.setAttribute("src", prodotto.immagine);

    // swiperSlide.appendChild(immagine);
    destinazione.appendChild(swiperSlide);
}

document.addEventListener("DOMContentLoaded", caricaWallpaper);
document.addEventListener("DOMContentLoaded", caricaMusica);
document.addEventListener("DOMContentLoaded", caricaIcone);
document.addEventListener("DOMContentLoaded", caricaAsset);

var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });