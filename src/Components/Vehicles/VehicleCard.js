import React from 'react'
import './Vehicles.css';
const VehicleCard = ({data}) =>{


  return(
    <div className = "vehicleCardInfo">
      <h2>{data.name}</h2>
      <div className = "favoriteDiv">
        <p>FAV</p>
      </div>
      <p>{data.model}</p>
      <p>{data.class}</p>
      <p>{data.passengers}</p>
    </div>
  )
}
export default VehicleCard
