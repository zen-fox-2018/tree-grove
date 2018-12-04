const FruitTree = require('./FruitTree')
const Fruit = require('./Fruit')

class PearTree extends FruitTree {
  constructor(age , height , mature , health){
    super(age , height , mature , health)
    this.name = 'PearTree'
    this._maxHeightAge = 5
    this._maxHeight = 2
    this._died = 8
  }

  produce () {
    this.harvested = ''
    if (this.age >= this._mature) {
      let num = Math.floor(Math.random() * 8)
      for (let i = 0; i < num; i++) {      
        this._fruits.push(new Pear())  
      }
    } 
  }
}

class Pear extends Fruit {}
//buat factory
module.exports = PearTree