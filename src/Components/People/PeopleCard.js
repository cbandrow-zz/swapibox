import React from 'react'
import './People.css';
import PropTypes from 'prop-types'
const PeopleCard = ({data, addFavorite, favorites}) =>{

const favoritesUpdate = (data)=>{
  addFavorite(data)
}
  return(
    <div className = 'peopleCardInfo'>
      <div className = {`favoriteDiv ${favoriteCss(data, favorites)}`}
        onClick = {()=>favoritesUpdate(data)}>
      </div>
      <h2>Name: {data.name}</h2>
      <p>Home: {data.homeworld}</p>
      <p>Species: {data.species}</p>
      <p>Language: {data.language}</p>
      <p>Home Population: {data.population}</p>
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
