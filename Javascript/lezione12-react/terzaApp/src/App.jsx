import Card from './components/Card'
import CardForm from './components/CardForm'
import './App.css'
import { useState } from 'react'

function App() {

  const [luoghi, setLuoghi] = useState([
    {
      id:0,
      title: "Mare",
      isScelto: true,
      description: "Com'è bello questo mare",
      imgURL: "https://picsum.photos/200?1"
    },
    {
      id:1,
      title: "Lago",
      isScelto: false,
      description: "Com'è bello questo lago",
      imgURL: "https://picsum.photos/200?2"
    },
    {
      id:2,
      title: "Montagna",
      isScelto: true,
      description: "Com'è bella questa montagna",
      imgURL: "https://picsum.photos/200?3"
    },
    {
      id:3,
      title: "Città",
      isScelto: false,
      description: "Com'è bella questa città",
      imgURL: "https://picsum.photos/200?4"
    }
  ])

  // step 1: creo una funzione per aggiungere un nuovo luogo
  const addLuogo = (nuovoLuogo)=>{
    // luoghi.push(nuovoLuogo);
    // console.log(luoghi);
    setLuoghi([...luoghi, nuovoLuogo]);
  }
  // step 2: questa function verrà però utilizzata dal child usando il principio dei props

  return (
    <>
      <div className="card-container">
        {/* in questo div inserisco il form per l'aggiunta di un luogo */}
        {/* addLuogo lato sinistro è il riferimento del prop nel child, lato destro è il riferimento funzione del parent */}
        <CardForm addLuogo={addLuogo}></CardForm>
      </div>

      <hr style={{marginBottom:'1rem', marginTop:'1rem'}} />

      <div className="card-container">
        {
          luoghi.map(luogo =>(
            <Card
              key={luogo.id}
              title={luogo.title}
              description={luogo.description}
              imgURL={luogo.imgURL}
              isScelto={luogo.isScelto}
            ></Card>
          ))
        }
      </div>
    </>
  )
}

export default App
