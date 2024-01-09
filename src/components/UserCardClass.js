import React from "react"
class UserCardClass extends React.Component{
    constructor(props){
      super(props)
      this.state={
        count:0,
        count2:2,
      }
      console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("Child CompDidMount ");
    }

    render(){
        console.log("Child Render");
        const{name,role}=this.props
        const{count}=this.state
        return(
            <div className="user-card">
                <h1>count: {count}</h1>
                <button onClick={()=>{
                    this.setState({count:count+1})
                }}>Increase Count</button>
                <h1>Name: {name} </h1>
                <h2>Designation: {role} Developer</h2>
                <h3>Location: Bangalore</h3>

            </div>
        )
    }
}
export default UserCardClass