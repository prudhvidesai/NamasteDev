import {useState,useEffect} from 'react'

const UserCard = (props)=>{
    const[count,setCount]=useState(0)

    const{name,role}=props

    useEffect(()=>{
      let timer = setInterval(()=>{
        console.log("this is useEffect Timer");
      },1000)  
      
      return ()=>{
        clearInterval(timer)
    }

    },[],)

    return(
        <div className="user-card">
        <h1>count: {count}</h1>    
        <h1>Name: {name} Desai</h1>
        <h3>Designation: {role} Developer</h3>
        <h4>Location: Bangalore</h4>
        </div>
    )
}
       


export default UserCard