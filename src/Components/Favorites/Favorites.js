import React from 'react'
import './Favorites.css';

const Favorites = ({favorite, buttonClick}) =>{


  console.log(favorite)
  return(
    <div>
      <button className='favorites'
              onClick = {()=>{buttonClick('favorites')}}>Favorites {favorite.length}</button>
    </div>
  )
}
export default Favorites
