import React from 'react'

const Card = ({selection, displayData}) =>   {
  console.log(selection, displayData)
  if(!displayData && !selection){
    return(
      <div>
        <h2>Press a button</h2>
      </div>
    )
  } else if (selection === "people"){
    return(
      <div>
        <h2>{displayData[0].name}</h2>
        <p>{displayData[0].homeworld}</p>
        <p>{displayData[0].population}</p>
        <p>{displayData[0].species}</p>
        <p>{displayData[0].language}</p>
      </div>
    )
  } else if (selection === "planets"){
    return (
      <div>
        <h2>{displayData[0].name}</h2>
        <p>{displayData[0].terrain}</p>
        <p>{displayData[0].climate}</p>
        <p>{displayData[0].population}</p>
        <p>{displayData[0].residents}</p>
      </div>
    )
  } else if (selection === "vehicles"){
    return (
      <div>
        <h2>{displayData[0].name}</h2>
        <p>{displayData[0].model}</p>
        <p>{displayData[0].passengers}</p>
        <p>{displayData[0].class}</p>
      </div>
    )
  }
}

export default Card
