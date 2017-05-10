import React from 'react'
import './Controls.css';


const Controls = ({buttonClick}) =>{
  return(
    <div className = 'buttons'>
    <button className='people'
            onClick={() => buttonClick('people')} >People
    </button>
    <button className='planets'
            onClick={() => buttonClick('planets')} >Planets
    </button>
    <button className='vehicles'
            onClick={() => buttonClick('vehicles')} >Vehicles
    </button>
    </div>
  )
}
export default Controls
