import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {allPromise} from './App';
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme'
import mockPeople from './Components/Stubs/PeopleData.json'
import mockPlanets from './Components/Stubs/PlanetsData.json'
import mockVehicles from './Components/Stubs/VehicleData.json'
import mockedFilms from './Components/Stubs/FilmData.json'
import mockSpecies from './Components/Stubs/SpeciesData.json'
import Helper from './Components/Helpers/helper.js'

describe('Main Application Tests', () =>{

  afterEach(() =>{
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  const filmsHelper = (obj) => {
    for(let i = 1; i <= 7; i++) {
      fetchMock.get(`http://swapi.co/api/films/${i}/`, obj)
    }
  }

  const resolveAfter2Seconds = () => {
    return new Promise (resolve => {
      setTimeout(() =>{
        resolve();
      }, 2000)
    })
  }


  it('should start with an empty state', () =>{
    const wrapper = shallow(<App/>)
    const expectedState = {
      people: [],
      planets: [],
      vehicles: [],
      crawl: [],
      selection: '',
      favorites: [],
      errorStatus : ''
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should display an error if fetching people data', async () =>{

    fetchMock.get('http://swapi.co/api/people', {
      status : 500,
    })

    filmsHelper({status: 500})
    fetchMock.get(`http://swapi.co/api/planets`, {
      status : 500,
    })

    fetchMock.get('http://swapi.co/api/vehicles', {
      status : 500,
    })

    fetchMock.get('*', {
      status: 500
    })

    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()
    expect(wrapper.state('errorStatus')).toEqual('Error fetching')
})

  it('should return films after an API call', async () =>{
    filmsHelper({status: 200, body: mockedFilms})

    fetchMock.get('*', { status: 200 } )

    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()
    expect(wrapper.state('crawl')).toEqual(filmsResult)
  })

  it('should return people', async () =>{

    fetchMock.get("http://swapi.co/api/people", { status: 200, body: mockPeople})

    fetchMock.get("http://swapi.co/api/planets/", { status: 200, body: mockPlanets})

    fetchMock.get("http://swapi.co/api/species/", { status: 200, body: mockSpecies})

    fetchMock.get('*', { status: 200 } )

    const wrapper = mount(<App/>)

    await resolveAfter2Seconds()
    expect(wrapper.state('people').length).toEqual(2)
  })

  it('should return planets', async () =>{

    fetchMock.get("http://swapi.co/api/planets", { status: 200, body: mockPlanets})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()
    expect(wrapper.state('planets').length).toEqual(2)
  })

  it('should return vehicles', async () =>{

    fetchMock.get("http://swapi.co/api/vehicles", { status: 200, body: mockVehicles})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()
    expect(wrapper.state('vehicles').length).toEqual(2)
  })

  it('should return people and prepend it on the page', async () =>{

    fetchMock.get("http://swapi.co/api/people", { status: 200, body: mockPeople})

    fetchMock.get("http://swapi.co/api/planets/", { status: 200, body: mockPlanets})

    fetchMock.get("http://swapi.co/api/species/", { status: 200, body: mockSpecies})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)

    await resolveAfter2Seconds()

    const peopleButton = wrapper.find('.people')
    peopleButton.simulate('click')
    expect(wrapper.state('people').length).toEqual(2)
    expect(wrapper.find('PeopleCard').length).toEqual(2);
  })

  it('should return plaents and prepend it on the page', async () =>{

    fetchMock.get("http://swapi.co/api/planets", { status: 200, body: mockPlanets})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)

    await resolveAfter2Seconds()

    const planetButton = wrapper.find('.planets')
    planetButton.simulate('click')
    expect(wrapper.state('planets').length).toEqual(2)
    expect(wrapper.find('PlanetCard').length).toEqual(2);
  })

  it('should return vehicles and prepend it on the page', async () =>{

    fetchMock.get("http://swapi.co/api/vehicles", { status: 200, body: mockVehicles})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)

    await resolveAfter2Seconds()

    const vehicleButton = wrapper.find('.vehicles')
    vehicleButton.simulate('click')
    expect(wrapper.state('vehicles').length).toEqual(2)
    expect(wrapper.find('VehicleCard').length).toEqual(2);
  })

  it('should return films after an API call', async () =>{
    filmsHelper({status: 200, body: mockedFilms})

    fetchMock.get('*', { status: 200 } )

    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()
    expect(wrapper.find('.movieCrawl').length).toEqual(1)
    expect(wrapper.find('.movieTitle').length).toEqual(1)
    expect(wrapper.find('.movieRelease').length).toEqual(1)
  })

  it('should return a selected state of vehicles', async () =>{

    fetchMock.get("http://swapi.co/api/vehicles", { status: 200, body: mockVehicles})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)

    await resolveAfter2Seconds()

    const vehicleButton = wrapper.find('.vehicles')
    vehicleButton.simulate('click')
    expect(wrapper.state('selection')).toEqual("vehicles")
  })

  it('should get favorites', async () =>{

    fetchMock.get("http://swapi.co/api/vehicles", { status: 200, body: mockVehicles})

    fetchMock.get("http://swapi.co/api/planets", { status: 200, body: mockPlanets})

    fetchMock.get("http://swapi.co/api/people", { status: 200, body: mockPeople})

    fetchMock.get('*', { status: 200 })

    const wrapper = mount(<App/>)

    await resolveAfter2Seconds()

    const vehicleButton = wrapper.find('.vehicles')
    const peopleButton = wrapper.find('.people')
    const planetButton = wrapper.find('.planets')

    const favoriteButton = wrapper.find('.favorites')
    const favoriteClickTwo = wrapper.find('.favoriteDiv').first()
    const favoriteClickThree = wrapper.find('.favoriteDiv').first()

    wrapper.setState({
      favorites: [favoriteOne, favoriteTwo]
    })

    favoriteButton.simulate('click')
    expect(wrapper.state('favorites').length).toEqual(2)
    expect(wrapper.state('planets').length).toEqual(2)
    expect(wrapper.state('vehicles').length).toEqual(2)
    expect(wrapper.state('people').length).toEqual(2)
    expect(wrapper.find('VehicleCard').length).toEqual(1)
    expect(wrapper.find('PeopleCard').length).toEqual(1)
  })

  const filmsResult = {
    "title": "A New Hope",
    "release": "1977-05-25",
      "crawl": `It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....`,
  }

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


})
