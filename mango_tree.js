const FruitTree = require('./parent_tree.js')
const Mango = require('./mango_fruit.js')

class MangoTree extends FruitTree {
    constructor(CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus){
      super()
      this._age = CurrentAge
      this._height = CurrentHeight
      this._matureAge = AgeMature
      this._healthStatus = CurrentHealthStatus
      this._maxAge = 20
      this._maxHeight = 7.8
      this._name = 'MangoTree'
      
    }
    get name(){
        return this._name
    }
  
    produceFruits () {
      if(this.age >= this.matureAge){
      let randomFruits = ~~(Math.random() * 9) + 1
      for(let i = 0; i < randomFruits; i++){
        this._fruits.push(new Mango())
      }
    }
      return this._fruits
    }
  
  }
  
  module.exports = MangoTree