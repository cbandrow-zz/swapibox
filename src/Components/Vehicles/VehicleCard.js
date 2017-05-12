import React from 'react'
import './Vehicles.css';
import PropTypes from 'prop-types'

const VehicleCard = ({data, addFavorite, favorites}) =>{
  const favoritesUpdate = (data)=>{
    addFavorite(data)
  }
  return(
    <div className = "vehicleCardInfo">
      <div className = {`favoriteDiv ${favoriteCss(data, favorites)}`}
        onClick = {()=>favoritesUpdate(data)}>
      </div>
      <h2>{data.name}</h2>
      <p>Model: {data.model}</p>
      <p>Class: {data.class}</p>
      <p>Passengers: {data.passengers}</p>
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

VehicleCard.propTypes = {
  data: PropTypes.object,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array
}

export default VehicleCard
