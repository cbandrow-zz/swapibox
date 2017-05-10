import React from "react";
import "./People.css";

const PeopleCard = () => {
  return (
    <div>
      <div className="peopleCards">
        <h4 className="personCardName"> Name: <button className="starFavorite"></button></h4>
        <p > Homeworld: </p>
        <p> Species: </p>
        <p> Language: </p>
        <p> Population: </p>
      </div>
    </div>
  );
};
export default PeopleCard;
