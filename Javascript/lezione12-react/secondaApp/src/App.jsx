import Card from './components/Card'
import './App.css'

function App() {
  return (
    <>
      <div className="card-container">
        <Card
          title = "Lorem Picsum"
          description = "Lorem ipsum dolor sit amet."
          imgURL = "https://picsum.photos/200?1">
        </Card>
        <Card
          title = "Lorem Picsum"
          description = "Lorem ipsum dolor sit amet."
          imgURL = "https://picsum.photos/200?2">
        </Card>
        <Card
          title = "Lorem Picsum"
          description = "Lorem ipsum dolor sit amet."
          imgURL = "https://picsum.photos/200?3">
        </Card>
        <Card
          title = "Lorem Picsum"
          description = "Lorem ipsum dolor sit amet."
          imgURL = "https://picsum.photos/200?4">
        </Card>
      </div>
    </>
  )
}

export default App