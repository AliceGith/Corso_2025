import { useState } from "react"

// idea: passare un nuovo dato al parent attraverso dei "props al contrario"
function CardForm({addLuogo}){
    
    // const handleClick = ()=>{
    //     const luogo = {
    //         id: 4,
    //         title: "Foresta",
    //         isScelto: true,
    //         description: "Nella natura",
    //         imgURL: "https://picsum.photos/200?5"
    //     }
    //     addLuogo(luogo);
    // }

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgURL: "",
        isScelto: false
    });

    const handleSubmit = (event =>{
        event.preventDefault(); //SEMPRE
        const luogo = {
            id: Math.random(),
            title: formData.title,
            description: formData.description,
            imgURL: formData.imgURL,
            isScelto: formData.isScelto
        };
        addLuogo(luogo);
    })

    const handleInputChange = (event =>{
        const {name, value, type, checked} = event.target;
        const inputValue = type == 'checkbox' ? checked: value;
        setFormData({
            ...formData,
            [name]: inputValue
        })
    })

    return(

        // <div className="cardForm">
        //     <h3>Aggiungi un luogo</h3>
        //     <input type="text" placeholder="titolo"/>
        //     <input style={{marginInline:'1rem'}} type="text" placeholder="descrizione" />
        //     <input style={{marginRight:'1rem'}} type="text" placeholder="immagine url" />
        //     <button onClick={handleClick}>Aggiungi Luogo</button>
        // </div>

        <div className="cardForm">
            <form onSubmit={handleSubmit}>
                <h3>Aggiungi veramente</h3>
                <div>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </div>
                <div>
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange}  />
                </div>
                <div>
                    <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Scelto</label>
                    <input type="checkbox" name="isScelto" checked = {formData.isScelto} onChange={handleInputChange} />
                </div>
                <div>
                    <button type="submit">Aggiungi</button>
                </div>
            </form>
        </div>

    )

}

export default CardForm