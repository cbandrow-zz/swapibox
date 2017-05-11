import React from 'react'
import './Favorites.css';

const Favorites = ({favorite, buttonClick}) =>{


  console.log(favorite)
  return(
    <div>
              <h1> SwapiBox </h1>
              <button className='favorites'
              onClick = {()=>{buttonClick('favorites')}}>Favorites {favorite.length}</button>
              <hr/>
    </div>
  )
}
export default Favorites
