import React from 'react'
import './StoryScroll.css';
import PropTypes from 'prop-types'

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

StoryScroll.propTypes = {
  scrollData: PropTypes.object,
}

export default StoryScroll
