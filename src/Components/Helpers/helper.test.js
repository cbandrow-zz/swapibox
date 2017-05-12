import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme'
import mockPeople from '../Stubs/PeopleData.json'
import mockPlanets from '../Stubs/PlanetsData.json'
import mockVehicles from '../Stubs/VehicleData.json'
import mockedFilms from '../Stubs/FilmData.json'
import mockSpecies from '../Stubs/SpeciesData.json'
import Helper from './helper.js'


describe("Helper function test", () => {

  let helper = new Helper()

  afterEach(() =>{
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  it('should help clean Crawl data with cleanCrawl', async () =>{

    fetchMock.get('http://swapi.co/api/films/1/', { status: 200, body: mockedFilms } )

    await resolveAfter2Seconds()

    let results = helper.cleanCrawl(mockedFilms)

    expect(results).toEqual(filmsResult)
  })

  it('should help clean People data', async () =>{
    let results = []
    fetchMock.get("http://swapi.co/api/people", { status: 200, body: mockPeople})

    fetchMock.get("http://swapi.co/api/planets/", { status: 200, body: mockPlanets})

    fetchMock.get("http://swapi.co/api/species/", { status: 200, body: mockSpecies})

    fetchMock.get('*', { status: 200 })

    helper.cleanPeople(mockPeople).then((endData) =>{
      results = endData
    })
    await resolveAfter2Seconds()
    expect(results.length).toEqual(2);
    expect(results[0].name).toEqual("Luke Skywalker");
    expect(results[1].name).toEqual("C-3PO");
  })

  it('should help clean Planet Data', async () =>{
    fetchMock.get("http://swapi.co/api/planets", { status: 200, body: mockPlanets})

    fetchMock.get("http://swapi.co/api/people/5/", { status: 200, body: mockPeople})

    fetchMock.get('*', { status: 200 })

    await resolveAfter2Seconds()

    let results = helper.cleanPlanets(mockPlanets)

    expect(results.length).toEqual(2);
    expect(results[0].name).toEqual("Alderaan")
    expect(results[0].terrain).toEqual("grasslands, mountains")
    expect(results[1].population).toEqual("1000")
  })

  it('should help clean Planet Vehicles', async () =>{
    fetchMock.get("http://swapi.co/api/vehicles", { status: 200, body: mockVehicles})

    fetchMock.get('*', { status: 200 })

    await resolveAfter2Seconds()

    let results = helper.cleanVehicles(mockVehicles)

    expect(results.length).toEqual(2);
    expect(results[0].name).toEqual("Sand Crawler")
    expect(results[0].model).toEqual("Digger Crawler")
    expect(results[1].class).toEqual("repulsorcraft")
    expect(results[1].passengers).toEqual("1")
  })
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

const filmsResult = {
  "title": "A New Hope",
  "release": "1977-05-25",
    "crawl": `It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....`,
}
