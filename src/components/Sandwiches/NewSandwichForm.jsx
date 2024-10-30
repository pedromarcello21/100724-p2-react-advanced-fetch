function NewSandwichForm() {

    return (
        <div className="form-container">

            <form className="new-item-form">

                <h2>Create Your New Sandwiches Here:</h2>

                <label htmlFor="name">Name: </label>
                <input required={true} name="name" />

                <br/>

                <label htmlFor="description">Description: </label>
                <input required={true} name="description" />

                <br/>

                <label htmlFor="rating">Rating: </label>
                <select name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <br/>

                <label>Is it a real sandwich:</label>
                <input type="checkbox" />

                <br/>

                <input type="submit" value="Add Sandwich" />

            </form>
        
        </div>
    )
}

export default NewSandwichForm