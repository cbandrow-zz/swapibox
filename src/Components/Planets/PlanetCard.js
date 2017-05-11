import React from 'react'
import './Planets.css';
import PropTypes from 'prop-types'
const PlanetCard = ({data, addFavorite, favorites}) =>{

const favoritesUpdate = (data) =>{
  addFavorite(data)
}

  return(
    <div className = "planetCardInfo">
      <h2>{data.name}</h2>
      <div className = {`favoriteDiv ${favoriteCss(data, favorites)}`}
           onClick = {()=>favoritesUpdate(data)}>
        <p>FAV</p>
      </div>
      <p>{data.terrain}</p>
      <p>{data.population}</p>
      <p>{data.climate}</p>
      <p>{`${data.residents} `}</p>
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

PlanetCard.propTypes = {
  data: PropTypes.object,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array
}
export default PlanetCard
