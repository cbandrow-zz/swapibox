import React from 'react'
import './StoryScroll.css';

const StoryScroll = ({ scrollData }) =>{


  return(
    <div className = 'movieText'>
      <h2>{scrollData}</h2>
    </div>
  )
}
export default StoryScroll
