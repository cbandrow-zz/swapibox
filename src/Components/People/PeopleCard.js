import React from 'react'
import './People.css';
import PropTypes from 'prop-types'
const PeopleCard = ({data, addFavorite, favorites}) =>{

const favoritesUpdate = (data)=>{
  addFavorite(data)
}
  return(
    <div className = 'peopleCardInfo'>
      <h2>{data.name}</h2>
      <div className = {`favoriteDiv ${favoriteCss(data, favorites)}`}
           onClick = {()=>favoritesUpdate(data)}>
        <p>FAV</p>
      </div>
      <p>{data.homeworld}</p>
      <p>{data.species}</p>
      <p>{data.language}</p>
      <p>{data.population}</p>
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

PeopleCard.propTypes = {
  data: PropTypes.object,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array
}

export default PeopleCard
