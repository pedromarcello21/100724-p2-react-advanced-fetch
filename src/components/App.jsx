import { useState } from 'react'
import AnimalsContainer from "./Animals/AnimalsContainer"
import NewAnimalForm from "./Animals/NewAnimalForm"

function App() {

  const [animals, setAnimals] = useState( [] )

  return (
    <div className="App">

      <NewAnimalForm animals={animals} setAnimals={setAnimals} />

      <AnimalsContainer animals={animals} setAnimals={setAnimals} />

    </div>
  )
}

export default App