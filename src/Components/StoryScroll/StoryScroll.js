import React from 'react'
import './StoryScroll.css';

const StoryScroll = ({ scrollData }) =>{

  return(
    <section className ="scroll">
      <div id='titles'>
        <div id="titlecontent">
          <h2>{scrollData.title}</h2>
          <h4>{scrollData.release}</h4>
          <h3>{scrollData.crawl}</h3>
        </div>
    </div>
  </section>
  )
}
export default StoryScroll
