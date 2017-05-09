export default class Helper{
  constructor(data){
    this.data = data || ''
  }

  cleanCrawl(data){
    let cleanData = {
      crawl: data.opening_crawl,
      release: data.release_date,
      title: data.title
    }
    return cleanData
  }

  cleanPeople(data){
    let cleaned = data.results.reduce((acc, person) =>{
      if(!acc[person.name]){
        acc[person.name] = {}
        acc[person.name].name = person.name

        fetch(person.homeworld)
          .then((response) => response.json())
          .then((planet) =>{
            acc[person.name].homeworld = planet.name
            acc[person.name].population = planet.population
            return
          })
        fetch(person.species)
          .then((response) => response.json())
          .then((type) =>{
            acc[person.name].species = type.name
            acc[person.name].language = type.language
            return
          })
      } return acc
    },{})

    let personArray = Object.keys(cleaned).map((key) =>{
      return cleaned[key]
    })
    return personArray
  }

  planetMatch(){
    //api call
    //concat homeworld into string for api call
    //return homeworldpop
  }

  randomNumber(){
    let num = Math.floor(Math.random() * (7- 1)) + 1;
    return num
  }
}
