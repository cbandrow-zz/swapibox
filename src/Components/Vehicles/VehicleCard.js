import React from 'react'
import './Vehicles.css';
const VehicleCard = ({data, addFavorite, favorites}) =>{


  const favoritesUpdate = (data)=>{
    addFavorite(data)
  }

  return(
    <div className = "vehicleCardInfo">
      <h2>{data.name}</h2>
      <div className = {`favoriteDiv ${favoriteCss(data, favorites)}`}
           onClick = {()=>favoritesUpdate(data)}>
        <p>FAV</p>
      </div>
      <p>{data.model}</p>
      <p>{data.class}</p>
      <p>{data.passengers}</p>
    </div>
  )
}

const favoriteCss = (data, favorites) =>{
  if(favorites.includes(data)){
    return 'favorite'
  } else {
    return undefined
  }
}
export default VehicleCard
