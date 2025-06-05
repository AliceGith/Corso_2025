// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css' //questo è il css definito per questo component
import Navbar from './components/navbar'

// App è un Component
function App() {
  // const [count, setCount] = useState(0)

  return (
    // questo simbolo sotto è un frammento
    <>

    {/* commento di jsx */}
    {/* ricorda sempre di verificare l'import in alto */}
    <Navbar></Navbar>

    <h1>Questa è la mia prima app REACT</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quae provident aperiam accusantium ratione odio quam eos amet est, a quod obcaecati nemo dignissimos explicabo dicta deleniti fuga? Fuga, molestiae.</p>

    </>
    )
}

// export necessario per poter renderizzare l'app dove mi pare
export default App
