function SandwichCard({ sandwich }) {

    return (
        <div className="card">
            <h2>{sandwich.name}</h2>
            <p>{sandwich.description}</p>
            <p>Rating: {sandwich.rating}/5</p>
            <p>But is it a sandwich? {sandwich.isRealSandwich ? "Yes" : "No"}</p>
        </div>
    )

}

export default SandwichCard