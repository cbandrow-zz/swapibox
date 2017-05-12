import React from 'react'
import './Planets.css';
import PropTypes from 'prop-types'
const PlanetCard = ({data, addFavorite, favorites}) =>{

const favoritesUpdate = (data) =>{
  addFavorite(data)
}

  return(
    <div className = "planetCardInfo">
      <div className = {`favoriteDiv ${favoriteCss(data, favorites)}`}
        onClick = {()=>favoritesUpdate(data)}>
      </div>
      <h2>Name: {data.name}</h2>
      <p>Terrain: {data.terrain}</p>
      <p>Population: {data.population}</p>
      <p>Climate: {data.climate}</p>
      <p>Famous Folk: {`${data.residents} `}</p>
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
