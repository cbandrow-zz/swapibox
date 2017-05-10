import React, { Component } from 'react';
import './App.css';
import StoryScroll from './Components/StoryScroll/StoryScroll.js'
import Helper from './Components/Helpers/helper.js'
import Controls from './Components/Controls/Controls'
import Favorites from './Components/Favorites/Favorites'

class App extends Component {
  constructor(data){
    super()
    this.helper = new Helper(data)
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      crawl: [],
    }
  }

  allPromise(){
    let num = this.helper.randomNumber();
    let people = fetch('http://swapi.co/api/people')
      .then((resp) => resp.json())
    let place = fetch('http://swapi.co/api/planets')
      .then((resp) => resp.json())
    let vehicles = fetch('http://swapi.co/api/vehicles')
      .then((resp) => resp.json())
    let crawl = fetch(`http://swapi.co/api/films/${num}/`)
      .then((resp) => resp.json())

    return Promise.all([people, place, vehicles, crawl])
      .then((promiseArray) => {
          return promiseArray.map((promise)=>{
            return promise
        })
      })
    }

  componentDidMount(){

    this.allPromise().then((data) => {
      let peopleData = this.helper.cleanPeople(data[0])
      let planetData = this.helper.cleanPlanets(data[1])
      let vehicleData = this.helper.cleanVehicles(data[2])
      let crawlData = this.helper.cleanCrawl(data[3])
      this.setState({
        people: peopleData,
        planets: planetData,
        vehicles: vehicleData,
        crawl: crawlData
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Favorites/>
        <StoryScroll scrollData = {this.state.crawl}/>
        <Controls/>
      </div>
    );
  }
}

export default App;
