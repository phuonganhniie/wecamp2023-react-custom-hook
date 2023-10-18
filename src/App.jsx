import './App.css'
import Quote from './components/Quote'

const URL = "https://api.quotable.io/random";

function App() {
  return (
    <>
      <Quote url={URL} />
    </>
  )
}

export default App
