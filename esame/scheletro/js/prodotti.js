let stampaWallpaper = document.querySelector("#wallpaper");
let stampaWallpaper2 = document.querySelector("#wallpaper2");

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
        autoplay: {
            delay: 5000,
        },
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