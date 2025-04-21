let numeri_target = document.getElementById("numeri");

for(let i = 1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        numeri_target.innerHTML += "<li>" + i + " BANGARANG";
    }else if(i % 3 == 0){
        numeri_target.innerHTML += "<li>" + i + " BOOM";
    }else if(i % 5 == 0){
        numeri_target.innerHTML += "<li>" + i + " ZOOM";
    }else{
        numeri_target.innerHTML += "<li>" + i;
    }
}