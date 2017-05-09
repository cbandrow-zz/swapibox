import React, { Component } from 'react';
import './App.css';
import StoryScroll from './Components/StoryScroll/StoryScroll.js'
import Helper from './Components/Helpers/helper.js'

class App extends Component {
  constructor(data){
    super()
    this.helper = new Helper(data)
    this.state = {
      crawl: '',
      crawlTitle: '',
      crawlDate: '',
      people: []
    }
  }

  componentDidMount(){
    this.getPeople()
    this.getScroll()
    this.getPlanets()
  }

  getScroll(){
    let num = this.helper.randomNumber();
    fetch(`http://swapi.co/api/films/${num}/`)
      .then((resp) => resp.json())
      .then((data) =>{
        let cleanData = this.helper.cleanCrawl(data)
        this.setState({
          crawl : cleanData.crawl,
          crawlTitle: cleanData.title,
          crawlRelease: cleanData.release
        })
    })
  }

  getPeople(){
    fetch('http://swapi.co/api/people')
    .then(response => response.json())
    .then((data)=>{
      let cleanedData = this.helper.cleanPeople(data)
      this.setState({people: this.helper.cleanPeople(data)})
    })
  }



  getPlanets(){
    fetch('http://swapi.co/api/planets')
    .then(response => response.json())
    .then((data)=>{
      let cleanedData = this.helper.cleanPlanets(data)
  })
}

  getVehicles(){

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
