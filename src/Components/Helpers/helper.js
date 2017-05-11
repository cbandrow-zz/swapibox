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
        Object.assign(endData[i], {homeworld: world.name, population: world.population, type: 'person'})
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
    let residentsArray = []

     data.results.forEach((planet, i) =>{
      endData.push(planet)
      residentsArray = planet.residents.map((call) =>{
         return fetch(call).then((resp) => resp.json()).catch((err) => console.log(err))
       })
       Promise.all(residentsArray).then((resident) =>{
         let people = []
         resident.forEach((item) =>{
           if(item.name === "undefined"){
             people.push('none')
           } else {
             people.push(item.name)
           }
           Object.assign(endData[i], {residents: people})
         })
       }).catch((err) => console.log(err))
       return residentsArray
     })
     endData.forEach((data, i) =>{
       Object.assign(endData[i], {type: 'planet'})
     })
     return endData
   }


  cleanVehicles(data) {
    let cleaned = data.results.reduce((acc, vehicle) => {
      if (!acc[vehicle.name]) {
        acc[vehicle.name] = {};
        acc[vehicle.name].name = vehicle.name;
        acc[vehicle.name].model = vehicle.model;
        acc[vehicle.name].passengers = vehicle.passengers;
        acc[vehicle.name].class = vehicle.vehicle_class
        acc[vehicle.name].type = "vehicle";
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
