let mainHeader = document.querySelector("#main-header");
let menuIcon = document.querySelector("#menuIcon");

menuIcon.addEventListener("click", ()=>{
    mainHeader.classList.toggle("is-mobile-open");
    document.documentElement.classList.toggle("no-scroll");
})