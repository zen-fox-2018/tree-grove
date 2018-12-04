const FruitTree = require('./FruitTree')
const Fruit = require('./Fruit')

class AppleTree extends FruitTree {
  constructor(age , height , mature , health){
    super(age , height , mature , health)
    this.name = 'AppleTree'
    this._maxHeightAge = 8
    this._maxHeight = 3
    this._died = 15
  }

  produce () {
    this.harvested = ''
    if (this.age >= this._mature) {
      let num = Math.floor(Math.random() * 8)
      for (let i = 0; i < num; i++) {      
        this._fruits.push(new Apple())  
      }
    } 
  }
}

class Apple extends Fruit {}

module.exports = AppleTree