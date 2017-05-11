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


// const helper = new Helper()

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
    expect(wrapper.state('errorStatus')).toEqual('Error fetching Films')
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

  it('should return people', async () =>{

    fetchMock.get("http://swapi.co/api/planets/", { status: 200, body: mockPlanets})

    fetchMock.get("http://swapi.co/api/species/", { status: 200, body: mockSpecies})

    fetchMock.get('*', { status: 200 } )

    const wrapper = mount(<App/>)

    // expectedState

    await resolveAfter2Seconds()
    expect(wrapper.state('planets').length).toEqual(2)
  })

  const filmsResult = {
    "title": "A New Hope",
    "release": "1977-05-25",
      "crawl": `It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....`,
  }


})
