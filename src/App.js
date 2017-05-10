import React, { Component } from 'react';
import './App.css';
import StoryScroll from './Components/StoryScroll/StoryScroll.js'
import Helper from './Components/Helpers/helper.js'
import Controls from './Components/Controls/Controls.js'
import Favorites from './Components/Favorites/Favorites.js'
import PeopleCard from './Components/People/PeopleCard.js'
import Category from './Components/Category/Category.js'


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

  componentDidMount(){
    this.getPeople()
    this.getScroll()
    this.getPlanets()
    this.getVehicles()
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
      this.setState({people: cleanedData})
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
      <Favorites />
        <StoryScroll scrollData = {this.state.crawl}/>
        <Controls />
        <Category peopleData={this.state.people} />
        <PeopleCard />
      </div>
    );
  }
}

export default App;
