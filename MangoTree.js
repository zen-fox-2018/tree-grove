const FruitTree = require('./FruitTree')
const Fruit = require('./Fruit')

class MangoTree extends FruitTree {
  constructor(age , height , mature , health){
    super(age , height , mature , health)
    this.name = 'MangoTree'
    this._maxHeightAge = 6
    this._maxHeight = 5
    this._died = 10
  }

  produce () {
    this.harvested = ''
    if (this.age >= this._mature) {
      let num = Math.floor(Math.random() * 8)
      for (let i = 0; i < num; i++) {      
        this._fruits.push(new Mango())  
      }
    } 
  } 
}

class Mango extends Fruit {}

module.exports = MangoTree