
const FruitTree = require("./fruit_tree.js")
const Fruit = require("./fruit_tree.js")

class PearTree extends FruitTree {

    // Initialize a new MangoTree
    constructor (nama, umur, tinggi, matureAge, healthstatus) {
      super(nama, umur, tinggi, matureAge, healthstatus)
    }
  
    produceFruits () {
      if(this._age >= this.matureAge && this.age < this.diedAge){
        let randomFruits = Math.floor(Math.random()*10)
        for(let i = 0; i < randomFruits; i++) {
          let fruits = new Pear ()
          this._fruits.push(fruits)
        }
      }
    }
  
  }
  
  class Pear extends Fruit {
    // Produce a mango
    constructor () {
      super()
    }
  }


module.exports = PearTree
