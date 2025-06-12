import Card from './components/Card'
import './App.css'
import { useState } from 'react'

function App() {

  // contatore è la proprietà che identifica lo stato
  // setContatore è il metodo che modifica lo stato
  // useStato è il metodo di react
  const [contatore, setContatore] = useState(0);

  function handleClick(event){
    console.log(event);
    console.log(event.target);
  }

  function handleChange(event){
    console.log(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(event);
  }

  const luoghi = [
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
  ]

  return (
    <>
      <div className="card-container">
        {/* <Card
          title = "Lorem Picsum"
          description = "Lorem ipsum dolor sit amet."
          imgURL = "https://picsum.photos/200?1">
        </Card> */}

        {/* uso il metodo map di js per poter renderizzare gli array. utilizzerò la parola chiave key per stabilire un'assegnazione univoca con gli oggeti */}

        {
          luoghi.map(luogo => (
            <Card
              key={luogo.id}
              title={luogo.title}
              description={luogo.description}
              imgURL={luogo.imgURL}
            ></Card>
          ))
        }

        </div>

        <h3>
          Mete scelte per le tue vacanze:
        </h3>

        <div className='card-container'>

        {
          luoghi.filter(luogo => luogo.isScelto).map(luogo =>(
            <Card
            key={luogo.id}
            title={luogo.title}
            description={luogo.description}
            imgURL={luogo.imgURL}
            ></Card>
          ))
        }

      </div>

      <hr />

      <h2>Gestiamo qualche evento</h2>

      {/* gestisco l'evento con funzione anonima e controllo lo state */}
      <button style={{color:'white'}} onClick={()=>{
        console.log("Ciao dal click");
        setContatore((contatore) => contatore+1)
      }}>{contatore}</button>

      {/* gestisco con una function definita */}
      <button style={{color:'white',marginLeft:'1rem'}} onClick={handleClick}>Cliccami</button>

      {/* gestisco il change con un campo input */}
      <br />
      <input style={{marginTop:'1rem'}} type="text" onChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <button style={{marginTop:'1rem',color:'white'}} type='submit'>Sub</button>
      </form>

    </>
  )
}

export default App