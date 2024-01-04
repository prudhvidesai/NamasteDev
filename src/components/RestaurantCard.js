import API_URL from "../../utils/constants"

const RestaurantCard = (props)=>{
    const {resData}=props
    const{info}=resData
     
     
     const img = resData.info.cloudinaryImageId
     console.log(img)
     
     return(
         <div className="resto-card">
         <img src={API_URL+img}
         className="card-img"
         alt="card-img"
         />
      <h3 style={{paddingLeft:"5px",marginTop:"5px"}}>{info.name}</h3>
     <h5 style={{paddingLeft:"5px",marginTop:"5px",maxWidth:"100px"}}>{info.cuisines.join(",")}</h5>
     <h5 style={{paddingLeft:"5px",marginTop:"5px"}}>{info.avgRating} Stars</h5>
     </div>
     )
 }
 export default RestaurantCard