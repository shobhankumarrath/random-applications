import { useState } from 'react'
import CatFacts from './components/CatFacts'
import './App.css'
import Navbar from './components/Navbar'
import RandomIdentification from './components/RandomIdentification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <RandomIdentification />
      <CatFacts />
    </>
  )
}

export default App
