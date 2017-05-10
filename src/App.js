import React, { Component } from "react";
import "./App.css";
import StoryScroll from "./Components/StoryScroll/StoryScroll.js";
import Helper from "./Components/Helpers/helper.js";
import Controls from "./Components/Controls/Controls";
import Favorites from "./Components/Favorites/Favorites";
import Card from "./Components/Card/Card";
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
      selection: ""
    };
  }
  componentDidMount() {
    this.allPromise().then(data => {
      let peopleData = this.helper.cleanPeople(data[0]);
      let planetData = this.helper.cleanPlanets(data[1]);
      let vehicleData = this.helper.cleanVehicles(data[2]);
      let crawlData = this.helper.cleanCrawl(data[3]);
      this.setState({
        people: peopleData,
        planets: planetData,
        vehicles: vehicleData,
        crawl: crawlData
      });
    });
  }

  allPromise() {
    let num = this.helper.randomNumber();
    let people = fetch("http://swapi.co/api/people").then(resp => resp.json());
    let place = fetch("http://swapi.co/api/planets").then(resp => resp.json());
    let vehicles = fetch("http://swapi.co/api/vehicles").then(resp =>
      resp.json()
    );
    let crawl = fetch(`http://swapi.co/api/films/${num}/`).then(resp =>
      resp.json()
    );

    return Promise.all([people, place, vehicles, crawl]).then(promiseArray => {
      return promiseArray.map(promise => {
        return promise;
      });
    });
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
          <Favorites />
          <Controls buttonClick={this.showCards.bind(this)} />

          <Category
            selection={this.state.selection}
            displayData={this.state[this.state.selection]}
          />
        </div>
      </div>
    );
  }
}

export default App;
