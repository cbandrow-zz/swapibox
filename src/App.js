import React, { Component } from 'react';
import './App.css';
import StoryScroll from './Components/StoryScroll/StoryScroll.js'
import Helper from './Components/Helpers/helper.js'
import Controls from './Components/Controls/Controls'
import Favorites from './Components/Favorites/Favorites'
import Card from './Components/Card/Card'
import Category from './Components/Category/Category.js'

class App extends Component {
  constructor(data){
    super()
    this.helper = new Helper(data)
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      crawl: [],
      selection: ''
    }
  }
  componentDidMount(){
    let num = this.helper.randomNumber();
    fetch(`http://swapi.co/api/films/${num}/`).then((resp) =>  resp.json()).then((data) =>{
        this.setState({
          crawl : this.helper.cleanCrawl(data)
        })
      }).catch((err) => console.log(err))
    this.allPromise().then((data) => {
      this.helper.cleanPeople(data[0]).then((endData) =>{
        this.setState({
          people: endData
        })
      }).catch((err) => console.log(err))
      let planetEnd = this.helper.cleanPlanets(data[1])
      let vehicleEnd = this.helper.cleanVehicles(data[2])
      this.setState({
        planets: planetEnd,
        vehicles: vehicleEnd
      })
    }).catch((err) => console.log(err))
  }

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
        return promise
      })
    }).catch((err) => console.log(err))
  }

  favoriteCard(criteria){
    console.log(criteria)
  }

  showCards(selection){
      this.setState({
        selection: selection
    })
  }

  render() {
    return (
      <div className="App">
        <Favorites/>
        <StoryScroll scrollData = {this.state.crawl}/>
        <Controls buttonClick ={this.showCards.bind(this)}/>
        <Category selection={this.state.selection}
                  displayData={this.state[this.state.selection]}
                  addFavorite ={this.favoriteCard.bind(this)}/>
      </div>
    );
  }
}

export default App;
