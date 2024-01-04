import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../../utils/api"

const Body = ()=>{
    return(
        <div className="resto-cont">
          
           {restaurants.map(each=>(<RestaurantCard resData={each}/>))}
           
            
        </div>
    )
}

export default Body