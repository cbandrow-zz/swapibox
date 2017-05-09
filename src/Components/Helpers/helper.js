export default class Helper{
  constructor(data){
    this.data = data || ''
  }

  randomNumber(){
    let num = Math.floor(Math.random() * (7- 1)) + 1;
    return num
  }
}
