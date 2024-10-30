import placeholderPhoto from '../../assets/profile-placeholder.jpg'

function EmployeeCard({ employee }) {

    return (
        <div className="card">
            <img src={ employee.image || placeholderPhoto } />
            <p>ID# {employee.id}</p>
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Start Date: {employee.startDate}</p>
        </div>
    )

}

export default EmployeeCard