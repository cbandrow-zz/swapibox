import React from 'react'
import './Planets.css';
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
export default PlanetCard
