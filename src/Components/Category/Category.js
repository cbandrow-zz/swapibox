import React from "react";
import "./Category.css";
import PeopleCard from "../People/PeopleCard.js";
import PlanetCard from "../Planets/PlanetCard.js";
import VehicleCard from "../Vehicles/VehicleCard.js";
import PropTypes from 'prop-types'

const Category = ({ selection, displayData, addFavorite, favorites }) => {
  if (selection === "favorites"){
    return(
      <div className = "category">
        {displayData.map((favorite) =>{
          if(favorite.type === "person"){
            return(
              <div key = {favorite.name}>
                <PeopleCard data={favorite}
                            addFavorite = {addFavorite}
                            favorites = {favorites}/>
              </div>
            )
          } else if (favorite.type === "planet"){
            return(
              <div key = {favorite.name}>
                <PlanetCard data={favorite}
                            addFavorite = {addFavorite}
                            favorites = {favorites}/>
              </div>
            )
          } else if(favorite.type === "vehicle"){
            return(
              <div key = {favorite.name}>
                <VehicleCard data = {favorite}
                             addFavorite = {addFavorite}
                             favorites = {favorites}/>
              </div>
            )
          } else if (selection === "favorites" && displayData.length === 0) {
            return (
              <div>
                <h3>You currently have no favorites.</h3>
              </div>
            )
          }
      })}
      </div>
    )
  } else if (selection === "people"){
    return(
      <div className = "category">
        {displayData.map((person) =>{
          return(
            <div key={person.name}>
            <PeopleCard data={person}
                        addFavorite = {addFavorite}
                        favorites = {favorites}/>
            </div>
          )
        })}
      </div>
    )
  } else if (selection === "planets"){
    return(
      <div className = "category">
        {displayData.map((planet) =>{
          return (
            <div key={planet.name}>
              <PlanetCard data={planet}
                          addFavorite = {addFavorite}
                          favorites = {favorites}/>
            </div>
          )
        })}
      </div>
    )
  } else if (selection === "vehicles"){
    return(
      <div className = "category">
        {displayData.map((vehicle) =>{
          return(
            <div key={vehicle.name}>
              <VehicleCard data = {vehicle}
                           addFavorite = {addFavorite}
                           favorites = {favorites}/>
            </div>
          )
        })}
      </div>
    )
  }
  return(
    <div>Select a Category</div>
  )
};

Category.propTypes = {
  selection: PropTypes.string,
  displayData: PropTypes.array,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array,
}
export default Category
