const FruitTree = require('./main.js').FruitTree
const Fruit = require('./main.js').Fruit

//MangoTree
class MangoTree extends FruitTree {
  constructor(startingAge, startingHeight, matureAge, healthStatus) {
    super(3, 25, 5, 'MangoTree')
    this._age = startingAge
    this._height = startingHeight
    this._healthStatus = healthStatus
  }

  produceMango () {
    let randomFruits = Math.floor(Math.random() * 10)
    if (this.age >= this.matureAge) {
      for (let i = 0; i < randomFruits; i++) {
        let mangga = new Mango()
        this._fruits.push(mangga)
      }
    }
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

module.exports = {MangoTree, Mango}
