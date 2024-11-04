import { useState, useEffect } from 'react'
import AnimalsContainer from "./Animals/AnimalsContainer"
import NewAnimalForm from "./Animals/NewAnimalForm"

function App() {

  const [animals, setAnimals] = useState( [] )

  async function getAnimals() {
    const res = await fetch('http://localhost:3000/animals')
    const animalData = await res.json()
    setAnimals(animalData)
  }

  useEffect(() =>{
    // fetch('http://localhost:3000/animals')
    // .then(res => res.json())
    // .then(animalData => setAnimals(animalData))

    getAnimals()
  }, [])

  return (
    <div className="App">

      <NewAnimalForm animals={animals} setAnimals={setAnimals} />

      <AnimalsContainer animals={animals} setAnimals={setAnimals} />

    </div>
  )
}

export default App