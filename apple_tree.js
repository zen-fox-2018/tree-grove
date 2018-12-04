const FruitTree = require('./main.js').FruitTree
const Fruit = require('./main.js').Fruit

// Release 1
class AppleTree extends FruitTree {
    constructor (startingAge, startingHeight, matureAge, healthStatus) {
      super(7, 30, 2, 'AppleTree')
      this._age = startingAge
      this._height = startingHeight
      this._healthStatus = healthStatus
    }
    produceApples () {
      let randomFruits = Math.ceil(Math.random() * 15) + 1
      if (this.age >= this.matureAge) {
        for (let i = 0; i < randomFruits; i++) {
          this._fruits.push(new Apple())
        }
      }
      return this.fruits
    }
  }
  
  class Apple extends Fruit {
    constructor() {
      super()
    }
  }

  module.exports = {AppleTree, Apple}
