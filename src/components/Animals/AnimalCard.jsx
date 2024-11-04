function AnimalCard({ animal }) {

    return (
        <div className="card">
            <img src={ animal.image } />
            <h2>{animal.name}</h2>
            <button>Likes: {animal.likes}</button>
        </div>
    )

}

export default AnimalCard