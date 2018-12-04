"use strict"
const FruitTree = require ('./fruit_tree.js').FruitTree
const Fruit = require ('./fruit_tree.js').Fruit

// Release 1

class AppleTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (age, height, maturedAge, healthStatus) {
    super()
    this._matureAge = maturedAge   
    this._stopGrowAge = 15
    this._witheredAge = 20
    this._age = age
    this._height = height
    this._healthStatus = healthStatus

  }

    // Produce some apples
  produceApples () {
    if(this.age >= this._matureAge){
      let randomProduce = Math.floor(Math.random()* 5)
      for(let i =0; i < randomProduce; i++){        
        this._fruits.push(new Apple())
        
      }
    }
    return this._fruits
  }  
}

class Apple extends Fruit {
  // Produce a mango
  constructor () {
    super()    
  }  
}


  // //  driver code untuk release 1
  // console.log(`The tree is alive! :smile:`)
  //  let appleTree = new AppleTree()
  //  do {
  //    appleTree.grow();
  //    appleTree.produceApples();
  //    appleTree.harvest();
  //    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
  //  } while (appleTree.healthStatus != false)
  //  console.log(`The tree has met its end. :sad:`)
 
  
 module.exports = { AppleTree, Apple }
