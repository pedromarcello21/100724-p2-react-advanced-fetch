import EmployeesContainer from "./Employees/EmployeesContainer"
import NewEmployeeForm from "./Employees/NewEmployeeForm"
import SandwichContainer from "./Sandwiches/SandwichContainer"
import NewSandwichForm from "./Sandwiches/NewSandwichForm"

function App() {

  return (
    <div className="App">

      <h1>ASA: Authoritative Sandwich Authority</h1>

      <NewEmployeeForm />

      <EmployeesContainer />

      {/* <NewSandwichForm /> */}

      {/* <SandwichContainer /> */}

    </div>
  )
}

export default App