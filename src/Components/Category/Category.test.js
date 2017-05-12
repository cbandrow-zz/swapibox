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
    const wrapper = mount(<Category displayData = {planetData}
                                      addFavorite = {mockFn}
                                      favorites = {[]}
                                      selection = {''}/>)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('.default').length).toEqual(1)
    expect(wrapper.find('.default').text()).toEqual('Select a Category, Yes?')
  })

  it('renders cards in the category class screen and starts without cards', () => {

    const mockClick = jest.fn();

    const wrapper = shallow(<Category selection={""}
                                    displayData={mockPlanets}
                                    addFavorite={mockClick}
                                    favorites = {[]}/>)

    expect(wrapper.find('.category').length).toBe(0)
  })

  it('should render two planet cards based on display data', () =>{
    const mockFn = jest.fn()
    const wrapper = mount(<Category displayData = {planetData}
                                      addFavorite = {mockFn}
                                      favorites = {[]}
                                      selection = {"planets"}/>)
    expect(wrapper.find('PlanetCard').length).toEqual(2)
  })

  it('should render two people cards based on display data', () =>{
    const mockFn = jest.fn()
    const wrapper = mount(<Category displayData = {peopleData}
                                      addFavorite = {mockFn}
                                      favorites = {[]}
                                      selection = {"people"}/>)
    expect(wrapper.find('PeopleCard').length).toEqual(2)
  })

  it('should render two vehicle cards based on display data', () =>{
    const mockFn = jest.fn()
    const wrapper = mount(<Category displayData = {vehicleData}
                                      addFavorite = {mockFn}
                                      favorites = {[]}
                                      selection = {"vehicles"}/>)
    expect(wrapper.find('VehicleCard').length).toEqual(2)
  })

  it('should render two favorite cards based on display data', () =>{
    const mockFn = jest.fn()
    const wrapper = mount(<Category displayData = {favoriteData}
                                      addFavorite = {mockFn}
                                      favorites = {[favoriteOne, favoriteTwo]}
                                      selection = {"favorites"}/>)
    expect(wrapper.find('VehicleCard').length).toEqual(1)
    expect(wrapper.find('PeopleCard').length).toEqual(1)
  })

  const favoriteOne =
    {
        "name": "Luke Skywalker",
        "homeworld": "Tatooine",
        "species": [
            "human"
        ],
        "type" : "person",
        "language": "english"
    }
    const favoriteTwo = {
        "name": "Sand Crawler",
        "model": "Digger Crawler",
        "passengers": "30",
        "class": "wheeled",
        "type" : "vehicle",
    }

    let favoriteData = [favoriteOne, favoriteTwo]

    const vehicleData = [ { 'name': 'Sand Crawler',
         'model': 'Digger Crawler',
         'passengers': '30',
         'class': 'wheeled',
         'type': 'vehicle' },
       { 'name': 'T-16 skyhopper',
         model: 'T-16 skyhopper',
         passengers: '1',
         class: 'repulsorcraft',
         type: 'vehicle' } ]

    const planetData = [ { name: 'Alderaan',
          climate: 'temperate',
          terrain: 'grasslands, mountains',
          population: '2000000000',
          residents:
           [ 'Princess Leia',
             'Papa Leia',
             'Wedge Antilles' ],
          type: 'planet' },
        { name: 'Yavin IV',
          climate: 'temperate, tropical',
          terrain: 'jungle, rainforests',
          population: '1000',
          residents: [],
          type: 'planet' } ]

    const peopleData = [ { name: 'Luke Skywalker',
          homeworld: 'Tatooine',
          species: [ 'Human' ],
          language : 'english',
          type : 'person'},
        { name: 'C-3PO',
          homeworld: 'Tatooine',
          species: [ 'Human' ],
          language : 'english',
          type: 'person'} ]

});
