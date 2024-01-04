import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../../utils/api"
import { useState } from "react"

const Body = ()=>{

    const[list,setList]=useState(restaurants) 

    const handleClick = ()=>{
        const updatedList = list.filter(item=>item.info.avgRating>4.3)
        console.log(updatedList)
        setList(updatedList)
    }
    return(
        <div>
            <div className="filter">
            <button className="filter-btn" onClick={handleClick}>Filter By Rating</button>
            </div>
            <div className="resto-cont">
          
          {list.map(each=>(<RestaurantCard resData={each}/>))}
          
           
       </div>
        </div>
        
    )
}

export default Body