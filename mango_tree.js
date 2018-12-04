"use strict"

const FruitTree = require("./fruit_tree.js")
const Fruit = require("./fruit_tree.js")

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (nama, umur, tinggi, matureAge, healthstatus) {
    super(nama, umur, tinggi, matureAge, healthstatus)
  }

  produceFruits () {
    if(this._age >= this.matureAge && this.age < this.diedAge){
      let randomFruits = Math.floor(Math.random()*10)
      for(let i = 0; i < randomFruits; i++) {
        let fruits = new Mango ()
        this._fruits.push(fruits)
      }
    }
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
}



// console.log(`the tree is alive! : smile:`)
//    //driver code untuk release 0
//    let mangoTree = new MangoTree()
//     do {
//     mangoTree.grow();
//     mangoTree.produceFruits();
//     mangoTree.harvest();
//      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
//     } while (mangoTree.healthStatus != false)
// console.log(appleTree._fruits)
// console.log(`The tree has met its end. :sad:`)
// console.log(new MangoTree())
module.exports = MangoTree

// let tree = new MangoTree ('manggo', 12, 1.3, 1, true)
// console.log(tree);

