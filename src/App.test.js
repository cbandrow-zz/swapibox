import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme'
import {mockPeople} from './Components/Stubs/PeopleData.js'
import {mockPlanets} from './Components/Stubs/PlanetsData.js'
import {mockVehicles} from './Components/Stubs/VehicleData.js'
import Helper from './Components/Helpers/helper.js'

const helper = new Helper()

describe('Main Application Tests', () =>{
  // afterEach(() =>{
  //   expect(fetchMock.calls().unmatched).toEqual()
  //   fetchMock.restore()
  // })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

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
      body : mockPeople,
    })
    fetchMock.get(`http://swapi.co/api/films/1/`, {
      status : 500,
    })
    fetchMock.get(`http://swapi.co/api/films/2/`, {
      status : 500,
    })
    fetchMock.get(`http://swapi.co/api/films/3/`, {
      status : 500,
    })
    fetchMock.get(`http://swapi.co/api/films/4/`, {
      status : 500,
    })
    fetchMock.get(`http://swapi.co/api/films/5/`, {
      status : 500,
    })
    fetchMock.get(`http://swapi.co/api/films/6/`, {
      status : 500,
    })
    fetchMock.get(`http://swapi.co/api/films/7/`, {
      status : 500,
    })

    fetchMock.get(`http://swapi.co/api/planets`, {
      status : 500,
      body: mockPlanets
    })

    fetchMock.get('http://swapi.co/api/vehicles', {
      status : 500,
      body : mockVehicles,
    })

    function resolveAfter2Seconds(){
      return new Promise (resolve => {
        setTimeout(() =>{
          resolve();
        }, 2000)
      })
    }

    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()
    expect(wrapper.state('errorStatus')).toEqual('Error fetching Planets or Vehicles')
})

  it('should return people after an API call', async () =>{

    let peopleCall = fetchMock.get('http://swapi.co/api/people', {
      status : 200,
      body : mockPeople,
    })

    let cleanPeopleArray = await helper.cleanPeople(peopleCall)
    expect(cleanPeopleArray.length).toEqual(1)
  })

  it('', () =>{

  })

})
