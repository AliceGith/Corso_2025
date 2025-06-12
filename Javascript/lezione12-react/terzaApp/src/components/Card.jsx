function Card({title, description, imgURL, isScelto}){

    if(title == undefined){
        title = "Titolo default";
    }

    return(
        <>
        <div className="card">
            <div className="card-image">
                <img src={imgURL} alt="" />
            </div>

            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {isScelto? <span>Luogo selezionato</span> : <span>Luogo non selezionato</span>}

        </div>
        
        </>
    )
}

export default Card