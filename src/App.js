import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryScroll from './Components/StoryScroll/StoryScroll.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      crawl: ''
    }
  }

  componentDidMount(){
    let num = Math.floor(Math.random() * (7- 1)) + 1;
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
