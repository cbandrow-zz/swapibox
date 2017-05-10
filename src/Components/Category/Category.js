import React from "react";
import "./Category.css";
import PeopleCard from "../People/PeopleCard.js";
import PlanetCard from "../Planets/PlanetCard.js";
import VehicleCard from "../Vehicles/VehicleCard.js";
const Category = ({ selection, displayData }) => {
  console.log(selection)
  console.log(displayData)
  if (selection === "people"){
    return(
      <div>
        {displayData.map((person) =>{
          return(
            <div key={person.name}>
            <PeopleCard data={person}/>
            </div>
          )
        })}
      </div>
    )
  } else if (selection === "planets"){
    return(
      <div>
        {displayData.map((planet) =>{
          return (
            <div key={planet.name}>
              <PlanetCard data={planet}/>
            </div>
          )
        })}
      </div>
    )
  } else if (selection === "vehicles"){
    return(
      <div>
        {displayData.map((vehicle) =>{
          return(
            <div key={vehicle.name}>
              <VehicleCard data = {vehicle}/>
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
