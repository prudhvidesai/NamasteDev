import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
//import { restaurants } from "../../utils/api"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const Body = ()=>{

    const[list,setList]=useState([]) 

    const[flist,setFList] = useState([]) 

    const[searchInput,setSearchInput]=useState("")

    

    const handleClick = ()=>{
        const updatedList = list.filter(item=>item.info.avgRating<4.4)
        //console.log(updatedList)
        setList(updatedList)
    }

    useEffect(()=>{
        getApiData()
    },[])

    const getApiData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res = await data.json()
        //console.log(res)
        //console.log(res.data.cards[3].card.card.gridElements.infoWithStyle.restaurants)
        setList(res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFList(res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearch = ()=>{
       const filteredList = flist.filter(item=>item.info.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))
       setList(filteredList)
    }

    

    return list.length===0? <Shimmer/> :(
        <div>
            <div className="filter">
            <div className="serach-cont">
                <input type="text" placeholder="search" value={searchInput} onChange={(e)=>{
                    setSearchInput(e.target.value)
                }}/>
                <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>    
            <button className="filter-btn" onClick={handleClick}>Filter By Rating</button>
            </div>
            <div className="resto-cont">
          
          {list.map(each=>(<Link key={each.info.id} to={"/restaurant/"+each.info.id}><RestaurantCard resData={each} /></Link>))}
          
           
       </div>
        </div>
        
    )
}

export default Body