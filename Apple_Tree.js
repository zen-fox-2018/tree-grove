const FruitTree = require('./Fruit_Tree.js').FruitTree
const Fruit = require('./Fruit_Tree.js').Fruit

class AppleTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(matureAge, 10, 3, 'Apple Tree')
    this._age = age
    this._height = height
    this._healthStatus = healthStatus
  }


  produceFruits() {
    if (this.age >= this._matureAge) {
      let random = Math.floor(Math.random() * 15 + 1)
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Apple())
      }
      return this._fruits
    }
  }

}

class Apple extends Fruit {
  constructor() {
    super()
  }
}

// console.log(`The Apple tree is alive! :smile:`)
// let appleTree = new AppleTree(1, 5, 3)
// do {
//   appleTree.grow()
//   appleTree.produceFruits()
//   // console.log(appleTree.produceFruits());
//   appleTree.harvest()
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)
// console.log(`The Apple tree has met its end. :sad:`)

module.exports = AppleTree