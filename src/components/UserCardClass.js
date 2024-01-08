import React from "react"
class UserCardClass extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        const{name,role}=this.props
        return(
            <div className="user-card">
                <h1>Name: {name} Mahesh</h1>
                <h2>Designation: {role} Developer</h2>
                <h3>Location: Bangalore</h3>

            </div>
        )
    }
}
export default UserCardClass