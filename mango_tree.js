const FruitTree = require('./Fruit_Tree.js').FruitTree
const Fruit = require('./Fruit_Tree.js').Fruit


class MangoTree extends FruitTree {
    constructor(age,height,mature,health){
        super()
        this._age = age
        this._height = height
        this._matureAge = mature
        this._healthStatus = health
        this._treeName = 'ManggoTree'
    }

}  

class Mango extends Fruit {
  constructor () {
    this.condition = this.randomCondition()
  }
  randomCondition (){
    let con = ['good','bad']
    let random = Math.floor(Math.random()*2)
    let producedFruit =  con[random]
    return producedFruit
  }
}

  let mangoTree = new MangoTree()

 module.exports = MangoTree