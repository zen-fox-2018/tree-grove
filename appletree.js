
const FruitTree = require("./fruit_tree.js")
const Fruit = require("./fruit_tree.js")

class AppleTree extends FruitTree {

    // Initialize a new MangoTree
    constructor (name, diedAge, matureAge,stopGrow, healthstatus) {
      super(name, diedAge, matureAge,stopGrow, healthstatus)
    
    }
  
    produceFruits () {
      if(this._age >= this.matureAge && this.age < this.diedAge){
        let randomFruits = Math.floor(Math.random()*10)
        for(let i = 0; i < randomFruits; i++) {
          let fruits = new Apple ()
          this._fruits.push(fruits)
        }
      }
    }
  
  }
  
  class Apple extends Fruit {
    // Produce a mango
    constructor () {
      super()
    }
  }



module.exports = AppleTree
