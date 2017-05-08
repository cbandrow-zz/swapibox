import React, { Component } from 'react';
import './App.css';
import StoryScroll from './Components/StoryScroll/StoryScroll.js'
import Helper from './Components/Helpers/helper.js'

class App extends Component {
  constructor(data){
    super()
    this.helper = new Helper(data)
    this.state = {
      crawl: ''
    }
  }

  componentDidMount(){
    let num = this.helper.randomNumber()
    fetch(`http://swapi.co/api/films/${num}/`)
      .then((resp) => resp.json())
      .then((data) =>{
        this.setState({
          crawl: data.opening_crawl
        })
      })
    }

  render() {
    return (
      <div className="App">
        <StoryScroll scrollData = {this.state.crawl}/>
      </div>
    );
  }
}

export default App;
