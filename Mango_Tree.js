const FruitTree = require('./Fruit_Tree.js').FruitTree
const Fruit = require('./Fruit_Tree.js').Fruit

class MangoTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(matureAge, 20, 4.8, 'Mango Tree')
    this._age = age
    this._height = height
    this._healthStatus = healthStatus
  }


  produceFruits() {
    if (this.age >= this._matureAge) {
      let random = Math.floor(Math.random() * 15 + 1)
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Mango())
      }
      return this._fruits
    }
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

// console.log(`The Mango tree is alive! :smile:`)
// let mangoTree = new MangoTree(1, 20, 4.8)
// do {
//   mangoTree.grow()
//   mangoTree.produceFruits()
//   // console.log(mangoTree.produceFruits())
//   mangoTree.harvest()
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)
// console.log(`The Mango tree has met its end. :sad:`)

module.exports = MangoTree