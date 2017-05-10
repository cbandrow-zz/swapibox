import React from 'react'
import './People.css';
const PeopleCard = ({data, addFavorite}) =>{


  return(
    <div className = 'peopleCardInfo'>
      <h2>{data.name}</h2>
      <div className = "favoriteDiv"
           onClick = {()=>addFavorite(data.name)}>
        <p>FAV</p>
      </div>
      <p>{data.homeworld}</p>
      <p>{data.species}</p>
      <p>{data.language}</p>
      <p>{data.population}</p>
    </div>
  )
}
export default PeopleCard
