import React from 'react'
import './Favorites.css';

const Favorites = ({favorite}) =>{


  console.log(favorite)
  return(
    <div>
      <button className='favorites'>Favorites {favorite.length}</button>


    </div>
  )
}
export default Favorites
