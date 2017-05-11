import React, { Component } from "react";
import "./App.css";
import StoryScroll from "./Components/StoryScroll/StoryScroll.js";
import Helper from "./Components/Helpers/helper.js";
import Controls from "./Components/Controls/Controls";
import Favorites from "./Components/Favorites/Favorites";
import Category from "./Components/Category/Category.js";

class App extends Component {
  constructor(data) {
    super();
    this.helper = new Helper(data);
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      crawl: [],
      selection: "",
      favorites: [],
      errorStatus: ''
    };
  }

  componentDidMount(){
    let num = this.helper.randomNumber();
    this.allPromise();
    fetch(`http://swapi.co/api/films/${num}/`).then((resp) =>  resp.json()).then((data) =>{
        this.setState({
          crawl : this.helper.cleanCrawl(data)
        })
      }).catch((err) => {
        this.setState({
          errorStatus: 'Error fetching Films'
        })
      })
  }

  allPromise(){
    fetch('http://swapi.co/api/people')
      .then((resp) => resp.json()).then((data) =>{
        this.helper.cleanPeople(data).then((endData) =>{
            this.setState({
              people: endData
            })
          })
        }).catch((err) => {
          this.setState({
            errorStatus: 'Error fetching people'
        })
      })

    fetch('http://swapi.co/api/planets')
      .then((resp) => resp.json()).then((data) =>{
        this.setState({
          planets: this.helper.cleanPlanets(data)
        })
      }).catch((err) => {
        this.setState({
          errorStatus: 'Error fetching planets'
        })
      })

    fetch('http://swapi.co/api/vehicles')
      .then((resp) => resp.json()).then((data) =>{
        this.setState({
          vehicles: this.helper.cleanVehicles(data)
        })
      }).catch((err) => {
        this.setState({
          errorStatus: 'Error fetching vehicles'
      })
    })
  }

  updateFavorites(favObj){
  let favoritesArray = this.state.favorites
  if(favoritesArray.includes(favObj)){
    let newFavoritesArray = favoritesArray.filter((obj)=>{
      return obj !== favObj
    })
    this.setState({
      favorites: newFavoritesArray
    })
    return
  }
    favoritesArray.push(favObj)
    this.setState({
      favorites: favoritesArray
    })
  }

  showCards(selection) {
    this.setState({
      selection: selection
    });
  }

  render() {
    return (
      <div className="App">
        <div className='storyScroll'>
          <StoryScroll scrollData={this.state.crawl} />
        </div>
        <div className='display'>
          <Favorites favorite={this.state.favorites}
                     buttonClick = {this.showCards.bind(this)}/>
          <Controls buttonClick={this.showCards.bind(this)} />
          <Category
            selection={this.state.selection}
            displayData={this.state[this.state.selection]}
            addFavorite={this.updateFavorites.bind(this)}
            favorites = {this.state.favorites}/>

        </div>
      </div>
    );
  }
}

export default App;
