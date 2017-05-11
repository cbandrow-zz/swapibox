import React from 'react'
import './Favorites.css';
import PropTypes from 'prop-types'

const Favorites = ({favorite, buttonClick}) =>{

  return(
    <div>
      <button className='favorites'
              onClick = {()=>{buttonClick('favorites')}}>Favorites {favorite.length}</button>
    </div>
  )
}

Favorites.propTypes = {
  favorite: PropTypes.array,
  buttonClick: PropTypes.func,
}

export default Favorites
