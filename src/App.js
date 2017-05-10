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
      crawl: '',
      crawlTitle: '',
      crawlDate: '',
      people: [],
      planets: [],
      vehicles: [],
    }
  }

  //otherfunction with promise.all
  allPromise(){
    let people = fetch('http://swapi.co/api/people')
      .then((resp) => resp.json())
    let place = fetch('http://swapi.co/api/planets')
      .then((resp) => resp.json())
    let vehicles = fetch('http://swapi.co/api/vehicles')
      .then((resp) => resp.json())

    return Promise.all([people, place, vehicles])
      .then((promiseArray) => {
          return promiseArray.map((promise)=>{
            // console.log('promise', promise)
            return promise
        })
      })
    }

  componentDidMount(){
    // this.getPeople()
    // this.getScroll()
    // this.getPlanets()
    // this.getVehicles()
    //other function with .then

    this.allPromise().then((data) => console.log(data))
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
      this.setState({
        people: cleanedData
      })
    })
  }

  getPlanets(){
    fetch('http://swapi.co/api/planets')
    .then(response => response.json())
    .then((data)=>{
      let cleanedData = this.helper.cleanPlanets(data)
      this.setState({
        planets: cleanedData
      })
    })
  }

  getVehicles(){
    fetch('http://swapi.co/api/vehicles')
    .then(response => response.json())
    .then((data)=>{
      let cleanedData = this.helper.cleanVehicles(data)
      this.setState({
        vehicles: cleanedData
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
