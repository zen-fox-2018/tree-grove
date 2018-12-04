"use strict"
const FruitTree = require('./fruit_tree.js').FruitTree
const Fruit = require('./fruit_tree.js').Fruit

class PearTree extends FruitTree {
    constructor(age, height, matureAge, healthStatus) {
        super()
        this._matureAge = matureAge
        this._stopGrowAge = 19
        this._witheredAge = 20
        this._age = age
        this._height =height
        this._healthStatus = healthStatus
    }

    producePear() {
        if(this.age >= this._matureAge){
            let randomProduce = Math.floor(Math.random()* 5)
            for(let i =0; i < randomProduce; i++){        
              this._fruits.push(new Pear())
              
            }
          }
          return this._fruits
    }

}

class Pear extends Fruit {
    constructor(){
        super()
    }
}

// console.log(`The tree is alive! :smile:`)
//    let pearTree = new PearTree()
//    do {
//      pearTree.grow();
//      pearTree.producePear();
//      pearTree.harvest();
//      console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
//    } while (pearTree.healthStatus != false)
//    console.log(`The tree has met its end. :sad:`)
 
  
 module.exports = { PearTree, Pear }