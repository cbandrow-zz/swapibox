import React from 'react'
import './StoryScroll.css';
import PropTypes from 'prop-types'

const StoryScroll = ({ scrollData, errorStatus }) =>{
if (scrollData){
    return(
      <section className ="scroll">
        <div id='titles'>
          <div id="titlecontent">
            <h2 className = "movieTitle" >{scrollData.title}</h2>
            <h4 className = "movieRelease">{scrollData.release}</h4>
            <h3 className = "movieCrawl" >{scrollData.crawl}</h3>
          </div>
        </div>
      </section>
    )
  } else if (!scrollData) {
    return (
      <section className = "scroll">
        <div id ='titles'>
          <div id = 'titlecontent'>
            <h4> Have you ever heard the tale of Darth Plagueis the Wise? It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.</h4>
          </div>
        </div>
      </section>
    )
  }
}

// StoryScroll.propTypes = {
//   scrollData: PropTypes.object,
// }

export default StoryScroll
