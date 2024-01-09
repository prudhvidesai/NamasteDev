import UserCard from "../UserCard"
import UserCardClass from "./UserCardClass"
import React from "react"

class About extends React.Component{
    constructor(){
        super()
        this.state={

        }
        console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent CompDidMount")
        this.timer=setInterval(()=>{
            //console.log("this is the cwu..");
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }    

    render(){
        console.log("Parent Render");
        return(
            <div>
                <h1>About</h1>
                <h2>Welcome to About Page...</h2>
                
                <UserCard name={"Mahesh"} role={"FrontEnd"}/>
                
            </div>
        )

    }
       
    
}



export default About