"use strict"

const FruitTree = require ('./fruit_tree.js').FruitTree
const Fruit = require ('./fruit_tree.js').Fruit
// Release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (age,height,maturedAge,healthStatus) {
    super()   
    this._matureAge = maturedAge   
    this._stopGrowAge = 17
    this._witheredAge = 25
    this._age = age
    this._height = height
    this._healthStatus = healthStatus
  }

  
  // Produce some mangoes
  produceMangoes () {
    if(this.age >= this._matureAge){
      let randomProduce = Math.floor(Math.random()* 5)
      for(let i =0; i < randomProduce; i++){        
        this._fruits.push(new Mango())        
      }
    }
    return this._fruits
  }

 
}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
  
}


  // //  driver code untuk release 0
  // console.log(`The tree is alive! :smile:`)
  //  let mangoTree = new MangoTree()
  //  do {
  //    mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    mangoTree.harvest();
  //    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  //  } while (mangoTree.healthStatus != false)
  //  console.log(`The tree has met its end. :sad:`)
  // //  console.log(mangoTree.fruits)
  // // console.log(mangoTree.produceMangoes())
  
 

module.exports = {MangoTree, Mango}
