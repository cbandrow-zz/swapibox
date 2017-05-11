import React from 'react'
import './Favorites.css';
import PropTypes from 'prop-types'

const Favorites = ({favorite, buttonClick}) =>{

  return(
    <div>
              <h1> SwapiBox </h1>
              <button className='favorites'
              onClick = {()=>{buttonClick('favorites')}}>Favorites {favorite.length}</button>
              <hr/>
    </div>
  )
}

Favorites.propTypes = {
  favorite: PropTypes.array,
  buttonClick: PropTypes.func,
}

export default Favorites
