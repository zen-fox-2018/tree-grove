const FruitTree = require('./main.js').FruitTree
const Fruit = require('./main.js').Fruit

// Release 2

class PearTree extends FruitTree {
    constructor(startingAge, startingHeight, matureAge, healthStatus) {
      super(4, 20, 4, 'PearTree')
      this._age = startingAge
      this._height = startingHeight
      this._healthStatus = healthStatus
    }
  
    producePear () {
      let randomFruits = Math.ceil(Math.random() * 15) + 1
      if (this.age >= this.matureAge) {
        for (let i = 0; i < randomFruits; i++) {
          this._fruits.push(new Pear())
        }
      }
      return this.fruits
    }
  }
  
  class Pear extends Fruit {
    constructor() {
      super()
    }
  }

  module.exports = {PearTree, Pear}