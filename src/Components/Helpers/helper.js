export default class Helper {
  constructor(data) {
    this.data = data || "";
  }

  cleanCrawl(data) {
    let cleanData = {
      crawl: data.opening_crawl,
      release: data.release_date,
      title: data.title
    };
    return cleanData;
  }

  cleanPeople(data) {
    let cleaned = data.results.reduce((acc, person) => {
      if (!acc[person.name]) {
        acc[person.name] = {};
        acc[person.name].name = person.name;

        fetch(person.homeworld)
          .then(response => response.json())
          .then(planet => {
            acc[person.name].homeworld = planet.name;
            acc[person.name].population = planet.population;
            return;
          });
        fetch(person.species).then(response => response.json()).then(type => {
          acc[person.name].species = type.name;
          acc[person.name].language = type.language;
          return;
        });
      }
      return acc;
    }, {});

    let personArray = Object.keys(cleaned).map(key => {
      return cleaned[key];
    });
    return personArray;
  }

  cleanPlanets(data) {
    // name, terrain, population, climate, residents
    let cleaned = data.results.reduce((acc, planet) => {
      if (!acc[planet.name]) {
        acc[planet.name] = {};
        acc[planet.name].name = planet.name;
        acc[planet.name].terrain = planet.terrain;
        acc[planet.name].climate = planet.climate;
        acc[planet.name].population = planet.population;
        acc[planet.name].residents = [];

        planet.residents.forEach(resident => {
          fetch(resident).then(response => response.json()).then(resident => {
            acc[planet.name].residents.push(resident.name);
            return;
          });
        });
      }
      return acc;
    }, {});
    console.log(cleaned);
  }

  randomNumber() {
    let num = Math.floor(Math.random() * (7 - 1)) + 1;
    return num;
  }
}
