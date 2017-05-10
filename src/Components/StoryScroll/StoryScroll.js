import React from 'react'
import './StoryScroll.css';

const StoryScroll = ({ scrollData }) =>{

  return(
    <div>
      <h2>{scrollData.title}</h2>
      <h3>{scrollData.crawl}</h3>
      <h4>{scrollData.release}</h4>
    </div>
  )
}
export default StoryScroll
