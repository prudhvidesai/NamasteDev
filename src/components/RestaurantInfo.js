import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import {RINFO_API} from '../../utils/constants'

const RestaurantInfo = ()=>{

    const [rlist,setRlist]=useState(null)
    const{resId}=useParams()
    const url = RINFO_API+resId
    //console.log(url)
    //console.log(resId)
    useEffect(()=>{
        getRestaurantInfo()
    },[])
    const getRestaurantInfo = async()=>{
     const inf = await fetch(url)
     const data = await inf.json()
     //console.log(data)
     setRlist(data)
    }
    //console.log(rlist.data.cards[0].card.card.info);
    //data.cards[0].card.card.info
    //const{name,cuisines,costForTwoMessage}=rlist.data.cards[0].card.card.info
   
    if(rlist===null) return <Shimmer/>
    //console.log(rlist.data.cards[0].card.card.info)
    const{name,costForTwoMessage,cuisines}=rlist.data.cards[0].card.card.info
    return (
      <div className="info-cont">
        <h1>Restaurant Info...</h1>
        <h2>{name}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
    )
}
export default RestaurantInfo