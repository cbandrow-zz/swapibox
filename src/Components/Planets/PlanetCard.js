import React from 'react'
import './Planets.css';
const PlanetCard = ({data}) =>{


  return(
    <div className = "planetCardInfo">
      <h2>{data.name}</h2>
      <div className = "favoriteDiv">
        <p>FAV</p>
      </div>
      <p>{data.terrain}</p>
      <p>{data.population}</p>
      <p>{data.climate}</p>
      <p>{`${data.residents} `}</p>
    </div>
  )
}
export default PlanetCard
