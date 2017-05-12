import React from "react";
import ReactDOM from "react-dom";
import Category from './Category.js';
import fetchMock from "fetch-mock";
import { shallow, mount } from "enzyme";
import mockPlanets from "../Stubs/PlanetsData.json";
import mockPeople from "../Stubs/PeopleData.json";
import mockVehicles from "../Stubs/VehicleData.json";

describe("Category", () => {


  it('should render a container to display cards', ()=>{
    const mockFn = jest.fn()
    const wrapper = mount(<Category displayData = {mockPlanets}
                                      addFavorite = {mockFn}
                                      favorites = {[]}
                                      selection = {""}/>)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('.default').text()).toEqual('Select a Category, Yes?')
  })

  const favoriteOne =
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "http://swapi.co/api/planets/1/",
        "films": [
            "http://swapi.co/api/films/2/",
            "http://swapi.co/api/films/6/",
            "http://swapi.co/api/films/3/",
            "http://swapi.co/api/films/1/",
            "http://swapi.co/api/films/7/"
        ],
        "species": [
            "http://swapi.co/api/species/1/"
        ],
        "vehicles": [
            "http://swapi.co/api/vehicles/14/",
            "http://swapi.co/api/vehicles/30/"
        ],
        "starships": [
            "http://swapi.co/api/starships/12/",
            "http://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "type" : "person",
        "url": "http://swapi.co/api/people/1/"
    }
    const favoriteTwo = {
        "name": "Sand Crawler",
        "model": "Digger Crawler",
        "manufacturer": "Corellia Mining Corporation",
        "cost_in_credits": "150000",
        "length": "36.8",
        "max_atmosphering_speed": "30",
        "crew": "46",
        "passengers": "30",
        "cargo_capacity": "50000",
        "consumables": "2 months",
        "vehicle_class": "wheeled",
        "pilots": [],
        "films": [
            "http://swapi.co/api/films/5/",
            "http://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T15:36:25.724000Z",
        "edited": "2014-12-22T18:21:15.523587Z",
        "type" : "vehicle",
        "url": "http://swapi.co/api/vehicles/4/"
    }

});
