import { useState } from 'react'

function NewAnimalForm({ animals, setAnimals }) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeImage = (event) => setImage(event.target.value)

    function handleSubmit(event) {
        event.preventDefault()

        const newAnimal = {
            name,
            image,
            likes: 0
        }

        const updatedAnimals = [...animals, newAnimal]

        setAnimals(updatedAnimals)
    }

    return (
        <div className="form-container">

            <form className="new-item-form" onSubmit={handleSubmit}>

                <h2>Add A New Animal Here:</h2>

                <label htmlFor="name">Name: </label>
                <input required={true} 
                name="name" 
                onChange={handleChangeName} 
                value={name} />

                <br/>

                <label htmlFor="image">Image URL: </label>
                <input type="text" 
                required={true} 
                name="image" 
                onChange={handleChangeImage} 
                value={image} />

                <br/>

                <input type="submit" value="Create Animal" />

            </form>

        </div>
    )
}

export default NewAnimalForm