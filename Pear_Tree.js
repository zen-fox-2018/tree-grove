const FruitTree = require('./Fruit_Tree.js').FruitTree
const Fruit = require('./Fruit_Tree.js').Fruit

class PearTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(matureAge, 15, 3, 'Pear Tree')
    this._age = age
    this._height = height
    this._healthStatus = healthStatus
  }

  produceFruits() {
    if (this.age >= this._matureAge) {
      let random = Math.floor(Math.random() * 15 + 1)
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Pear())
      }
      return this._fruits
    }
  }
}

class Pear extends Fruit {
  constructor() {
    super()
  }
}

// console.log(`The Apple tree is alive! :smile:`)
// let pearTree = new PearTree(1, 5, 3)
// do {
//   pearTree.grow()
//   pearTree.produceFruits()
//   // console.log(pearTree.produceFruits());
//   pearTree.harvest()
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthStatus != false)

// console.log(`The Apple tree has met its end. :sad:`)

module.exports = PearTree