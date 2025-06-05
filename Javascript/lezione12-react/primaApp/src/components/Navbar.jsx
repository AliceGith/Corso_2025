import Link from "./Link";
import "./Navbar.css"

function Navbar(){
    // qui parlo in js
    // inizializzo una variabile
    let miaVariabile = "Dario";
    miaVariabile = "Alice";

    // posso anche utilizzare gli oggetti
    let mioStyle = {
        height: "100px",
        width: "100px"
    }

    let x = 42;

    let myStyleDiv = {
        height: x >= 42? "420px": "100px"
    }

    return(
        // qui parlo in jsx
        <>
        <ul>
            {/* uso la mia variabile */}
            <li><a href="#">Ciao </a>{miaVariabile}</li>
            {/* posso richiamare quante volte mi pare un component dentro l'altro */}
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            {/* questa roba non funziona */}
            {/* <li><Link>Ciao Carissimi Studenti</Link></li> */}
            <li><a href="#">Stai</a></li>
            <li><a href="#">Grazie</a></li>
        </ul>

        <hr />

        <h3>{miaVariabile == "Dario" ? "Ciao " + miaVariabile : "Non ti conosco"}</h3>
        
        <img style={mioStyle} src="./vite.svg" alt="" />
        <img style={myStyleDiv} src="./vite.svg" alt="" />
        
        {/* attenzione: la parola class è vietata. usare classname */}
        {/* <div className="stileDiv"></div> */}

        {/* voglio aggiungere delle classi dinamicamente passando un'espressione jsx */}
        <div className={`stileDiv ${x>42?"rotated":""}`}></div>
        </>
    )
}

export default Navbar