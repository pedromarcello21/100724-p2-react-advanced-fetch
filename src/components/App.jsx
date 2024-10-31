import { useState } from 'react'
import EmployeesContainer from "./Employees/EmployeesContainer"
import NewEmployeeForm from "./Employees/NewEmployeeForm"
import SandwichContainer from "./Sandwiches/SandwichContainer"
import NewSandwichForm from "./Sandwiches/NewSandwichForm"
// in the future we will get our data in a different way from the database...
import { employeesArray } from "../data/employees-array"

function App() {

  const [employees, setEmployees] = useState( employeesArray )

  return (
    <div className="App">

      <h1>ASA: Authoritative Sandwich Authority</h1>

      <NewEmployeeForm employees={employees} setEmployees={setEmployees} />

      <EmployeesContainer employees={employees} setEmployees={setEmployees} />

      <NewSandwichForm />

      <SandwichContainer />

    </div>
  )
}

export default App