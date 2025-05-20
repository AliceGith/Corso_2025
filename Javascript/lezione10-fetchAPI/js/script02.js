function creaCard(persona){
    // alt + 96(da tastierino numerico) ``
    // o autobacktick "${"
    let col = document.createElement("div");
    col.setAttribute("class", "col-4 mt-4");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    let img = document.createElement("img");
    img.setAttribute("class", "img-fluid rounded-top");
    img.setAttribute("src", persona.avatar);
    
    let btnCambiaFoto = document.createElement("button");
    btnCambiaFoto.setAttribute("class", "btn btn-primary");
    btnCambiaFoto.textContent = "Cambia Foto";
    btnCambiaFoto.addEventListener("click", ()=>{    
        setTimeout(()=>{
            rigaPersone.removeChild(col);
        }, 2000);
        img.setAttribute("src", "./img/dodo.jpg");        
    });
    
    cardBody.appendChild(img);
    
    let cardTitle = document.createElement("h3");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = `${persona.first_name} ${persona.last_name}`;

    let info = document.createElement("div");
    info.innerHTML = `
                <p class="card-text">Info:</p>
                <ul>
                    <li>Tel: 0000000000</li>
                    <li>Email: ${persona.email}</li>
                    <li>Addr: Via Carlo Albero 22</li>
                </ul>
    `;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(info);
    cardBody.appendChild(btnCambiaFoto);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

let rigaPersone = document.querySelector("#rigaPersone");

function recuperaDati(){
    // const URL = "https://reqres.in/api/users?page=2";
    const URL = "http://localhost:3000/users";
    fetch(URL, {
        method: "GET",
        headers: {
            "x-api-key": "requres-free-vi"
        }
    })
        .then(data =>{
            console.log(data.status);
            return data.json();
        })
        .then(response =>{
            console.log(response);
            // data è la proprietà dell'oggetto response che contiene l'array di persone
            console.log(response.data);
            let persone = response; //in questo caso ricevo direttamente un array di oggetti
            for(let i = 0; i < persone.length; i++){
                rigaPersone.appendChild(creaCard(persone[i]));
            }
        })
        .then()
        .finally()
}

document.addEventListener("DOMContentLoaded", recuperaDati);

// 