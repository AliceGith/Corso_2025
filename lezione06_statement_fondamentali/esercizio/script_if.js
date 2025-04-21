let orario_target = document.getElementById("orario");
let orario_saluto = document.getElementById("saluto");

function update_orario(){
    let orario = new Date();
    let orario_ore = orario.getHours();
    let orario_minuti = orario.getMinutes();
    let orario_secondi = orario.getSeconds();
    let orario_corrente = orario_ore + ":" + orario_minuti + ":" + orario_secondi;
    orario_target.innerHTML = "L'orario corrente è: " + orario_corrente;

    controllo_orario(orario_ore);
}
    
function controllo_orario(orario_ore){
    if(orario_ore >= 0 && orario_ore <= 6){
        orario_saluto.innerHTML = "Buonmattino!";
    }else if(orario_ore > 6 && orario_ore <= 12){
        orario_saluto.innerHTML = "Buongiorno!";
    }else if(orario_ore > 12 && orario_ore <= 18){
        orario_saluto.innerHTML = "Buon pomeriggio!"
    }else{
        orario_saluto.innerHTML = "Buonasera!"
    }
}

setInterval(update_orario, 1000);


