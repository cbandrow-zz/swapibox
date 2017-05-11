import React from "react";
import "./Category.css";
import PeopleCard from "../People/PeopleCard.js";
import PlanetCard from "../Planets/PlanetCard.js";
import VehicleCard from "../Vehicles/VehicleCard.js";
const Category = ({ selection, displayData, addFavorite }) => {
  if (selection === "people"){
    return(
      <div className = "category">
        {displayData.map((person) =>{
          return(
            <div key={person.name}>
            <PeopleCard data={person}
                        addFavorite = {addFavorite}/>
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
                          addFavorite = {addFavorite}/>
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
                           addFavorite = {addFavorite}/>
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
export default Category
