export default class Helper {
  constructor(data) {
    this.data = data || "";
  }

  cleanCrawl(data) {
    let cleanData = {
      crawl: data.opening_crawl,
      release: data.release_date,
      title: data.title
    }
    return cleanData;
  }

  cleanPeople(data) {
    const endData = []
    const homeworldArray = data.results.map((person) =>{
      endData.push(person)
      return fetch(person.homeworld).then((resp) => resp.json())
    })

    const speciesArray = data.results.map((type) =>{
      return fetch(type.species).then((resp) => resp.json())
    })

    const p1 = Promise.all(homeworldArray).then((homeworlds) =>{
      homeworlds.forEach((world, i)=>{
        Object.assign(endData[i], {homeworld: world.name, population: world.population})
      })

    }).catch((err) => console.log(err))
    const p2 = Promise.all(speciesArray).then((eachSpecies) =>{
      eachSpecies.forEach((each, i) =>{
        Object.assign(endData[i], {species: each.name, language: each.language})
      })
    }).catch((err) => console.log(err))

    return Promise.all([p1, p2]).then(() => endData ).catch((err) => console.log(err))
  }

  cleanPlanets(data) {
    const endData = []
    const residentsArray = data.results.map((planet) =>{
      endData.push(planet)

      console.log(planet.residents)
      let promisedPlanets = planet.residents.map((residentURL)=>{
        return fetch(planet.residents).then((resp) => resp.json())
      })
      // return fetch(planet.residents).then((resp) => resp.json())
    })

    return Promise.all(residentsArray).then((resident) =>{
      console.log(resident)
    //   resident.forEach((person, i) =>{
    //     let resiArray = []
    //     for(let j = 0; j <)
    //     resiArray.push(person.name)
    //     Object.assign(endData[i], {residents: resiArray})
    //   })
    // }).then(() => endData)
    })
  }


    // name, terrain, population, climate, residents
    // let cleaned = data.results.reduce((acc, planet) => {
    //   if (!acc[planet.name]) {
    //     acc[planet.name] = {};
    //     acc[planet.name].name = planet.name;
    //     acc[planet.name].terrain = planet.terrain;
    //     acc[planet.name].climate = planet.climate;
    //     acc[planet.name].population = planet.population;
    //     acc[planet.name].residents = [];
    //
    //     planet.residents.forEach(resident => {
    //       fetch(resident).then(response => response.json()).then(resident => {
    //         acc[planet.name].residents.push(resident.name);
    //         return;
    //       });
    //     });
    //   }
    //   return acc;
    // }, {});
    // let planetsArray = Object.keys(cleaned).map(key => {
    //   return cleaned[key];
    // });
    // return planetsArray

  cleanVehicles(data) {
    let cleaned = data.results.reduce((acc, vehicle) => {
      if (!acc[vehicle.name]) {
        acc[vehicle.name] = {};
        acc[vehicle.name].name = vehicle.name;
        acc[vehicle.name].model = vehicle.model;
        acc[vehicle.name].passengers = vehicle.passengers;
        acc[vehicle.name].class = vehicle.vehicle_class;
      }
      return acc;
    }, {});
    let vehiclesArray = Object.keys(cleaned).map(key => {
      return cleaned[key];
    });
    return vehiclesArray;
  }

  randomNumber() {
    let num = Math.floor(Math.random() * (7 - 1)) + 1;
    return num;
  }
}
