const UserCard = (props)=>{
    const{name,role}=props
    return(
        <div className="user-card">
        <h1>Name: {name} Desai</h1>
        <h3>Designation: {role} Developer</h3>
        <h4>Location: Bangalore</h4>
        </div>
    )
}
export default UserCard