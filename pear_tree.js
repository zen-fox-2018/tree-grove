const FruitTree = require('./parent_tree.js')
const Pear = require('./apple_fruit.js')



class PearTree extends FruitTree{
    constructor(CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus){
      super()
      this._age = CurrentAge
      this._height = CurrentHeight
      this._matureAge = AgeMature
      this._healthStatus = CurrentHealthStatus
      this._maxAge = 15
      this._maxHeight = 12.3
      this._name = 'PearTree'
    }
    get name(){
        return this._name
    }
    produceFruits () {
      if(this.age >= this.matureAge){
      let randomFruits = ~~(Math.random() * 9) + 1
      for(let i = 0; i < randomFruits; i++){
        this._fruits.push(new Pear())
      }
    }
      return this._fruits
    }
  }

  module.exports = PearTree