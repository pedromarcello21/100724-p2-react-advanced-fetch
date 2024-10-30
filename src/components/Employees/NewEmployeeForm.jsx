import { useState } from 'react'

function NewEmployeeForm() {


    return (
        <div className="form-container">

            <form className="new-item-form">

                <h2>Submit Newly Hired Employees Here:</h2>

                <label htmlFor="name">Name: </label>
                <input required={true} name="name" />

                <br/>

                <label htmlFor="email">Email Address: </label>
                <input type="email" required={true} name="email" />

                <br/>

                <label htmlFor="start-date">Start Date: </label>
                <input type="date" name="start-date" />

                <br/>

                <input type="submit" value="Submit Employee" />

            </form>

            <button>Reset Form</button>

        </div>
    )
}

export default NewEmployeeForm