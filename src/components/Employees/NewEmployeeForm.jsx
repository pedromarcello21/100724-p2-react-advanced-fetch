import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewEmployeeForm({ employees, setEmployees }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [startDate, setStartDate] = useState('')

    const badWords = ["heck", "shoot", "chinchilla", "lint licker"]

    const handleChangeName = (event) => {
        let input = event.target.value
        badWords.forEach(word => {
            input = input.replaceAll(word, "****")
        })
        setName(input)
    }
    const handleChangeEmail = (event) => setEmail(event.target.value)
    const handleChangeDate = (event) => setStartDate(event.target.value)

    function resetForm() {
        setName("")
        setEmail("")
        setStartDate("")
    }

    function handleSubmit(event) {
        event.preventDefault()

        const newEmployee = {
            id: uuid(),
            name,
            email,
            startDate,
        }

        const updatedEmployees = [...employees, newEmployee]

        setEmployees(updatedEmployees)

        resetForm()
    }

    return (
        <div className="form-container">

            <form className="new-item-form" onSubmit={handleSubmit}>

                <h2>Submit Newly Hired Employees Here:</h2>

                <p>CURRENT STATE: {name} {email.replaceAll("chinchilla", "**********")} {startDate}</p>

                <label htmlFor="name">Name: </label>
                <input required={true} name="name" onChange={handleChangeName} value={name} />

                <br/>

                <label htmlFor="email">Email Address: </label>
                <input type="email" required={true} name="email" onChange={handleChangeEmail} value={email} />

                <br/>

                <label htmlFor="start-date">Start Date: </label>
                <input type="date" name="start-date" onChange={handleChangeDate} value={startDate} />

                <br/>

                <input type="submit" value="Submit Employee" />

            </form>

            <button onClick={resetForm}>Reset Form</button>

        </div>
    )
}

export default NewEmployeeForm