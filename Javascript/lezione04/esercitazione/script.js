let esameProfio = document.getElementById("esameProfio");
let esamePierpier = document.getElementById("esamePierpier");

let esameProfioScritto = "";
let esameProfioOrale = "";
let esamePierpierScritto = "";
let esamePierpierOrale = "";

let sendExam = document.getElementById("sendExam").addEventListener("click",function(e){
    e.preventDefault();
    let esameProfioScritto = document.getElementById("esameProfioScritto").value;
    let esameProfioOrale = document.getElementById("esameProfioOrale").value;
    let esamePierpierScritto = document.getElementById("esamePierpierScritto").value;
    let esamePierpierOrale = document.getElementById("esamePierpierOrale").value;
    if(esameProfioScritto == "" || esameProfioOrale == "" || esamePierpierScritto == "" || esamePierpierOrale == ""){
        alert("Inserisci tutti gli esami!");
    }else{
        if(esameProfioScritto >= 18 && esameProfioOrale >= 18){
            let mediaProfio = ((Number(esameProfioScritto)+Number(esameProfioOrale))/2);        
            esameProfio.innerHTML = "Congratulazioni, hai superato sia lo scritto che l'orale! La tua media è: " + mediaProfio;
        }else{
            esameProfio.innerHTML = "Mi dispiace, non hai superato il mio esame";
        }
        if(esamePierpierScritto >= 18 || esamePierpierOrale >= 18){
            if(Number(esamePierpierScritto) >= Number(esamePierpierOrale)){
                esamePierpier.innerHTML = "Congratulazioni, hai superato l'esame! Il voto è: " + esamePierpierScritto;
            }else{
                esamePierpier.innerHTML = "Congratulazioni, hai superato l'esame! Il voto è: " + esamePierpierOrale;
            }
        }
    }
})