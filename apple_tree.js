
const FruitTree = require('./Fruit_Tree.js').FruitTree
const Fruit = require('./Fruit_Tree.js').Fruit


class AppleTree extends FruitTree {
    constructor(age,height,mature,healthStatus){
      super()
      this._age = age
      this._height = height
      this._matureAge = mature
      this._healthStatus = healthStatus
      this._maxHeight = 6
      this._startProduce = 1
      this._maxAge = 15
  
    }
}
class Apple extends Fruit {
 
}



let appleTree = new AppleTree()

module.exports = AppleTree