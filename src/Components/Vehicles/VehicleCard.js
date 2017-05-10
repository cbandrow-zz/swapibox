import React from 'react'
import './Vehicles.css';
const VehicleCard = ({data}) =>{


  return(
    <div>
      <h2>{data.name}</h2>
      <p>{data.model}</p>
      <p>{data.class}</p>
      <p>{data.passengers}</p>
    </div>
  )
}
export default VehicleCard
