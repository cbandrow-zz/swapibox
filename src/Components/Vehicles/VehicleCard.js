import React from 'react'
import './Vehicles.css';
const VehicleCard = ({data, addFavorite}) =>{


  const favoritesUpdate = (data)=>{
    addFavorite(data)
  }

  return(
    <div className = "vehicleCardInfo">
      <h2>{data.name}</h2>
      <div className = "favoriteDiv"
           onClick = {()=>favoritesUpdate(data)}>
        <p>FAV</p>
      </div>
      <p>{data.model}</p>
      <p>{data.class}</p>
      <p>{data.passengers}</p>
    </div>
  )
}
export default VehicleCard
