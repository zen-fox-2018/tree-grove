
const FruitTree = require('./Fruit_Tree.js').FruitTree
const Fruit = require('./Fruit_Tree.js').Fruit


  class PearTree extends FruitTree {
    constructor(age,height,mature,healthStatus) {
      super () 
      this._age = age
      this._height = height
      this._matureAge = mature
      this._healthStatus = healthStatus
      this._stopGrow = 5
      this._maxHeight = 10
      this._startProduce = 3
    }
    
  } 
  class Pear extends Fruit {
    
  }
  //let pearTree = new PearTree()


  module.exports = PearTree
  