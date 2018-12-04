const FruitTree = require('./parent_tree.js')
const Apple = require('./apple_fruit.js')



class AppleTree extends FruitTree{
    constructor(CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus){
      super()
      this._age = CurrentAge
      this._height = CurrentHeight
      this._matureAge = AgeMature
      this._healthStatus = CurrentHealthStatus
      this._maxAge = 10
      this._maxHeight = 4.8
      this._name = 'AppleTree'
    }
    get name(){
        return this._name
    }
    produceFruits () {
      if(this.age >= this.matureAge){
      let randomFruits = ~~(Math.random() * 9) + 1
      for(let i = 0; i < randomFruits; i++){
        this._fruits.push(new Apple())
      }
    }
      return this._fruits
    }
  }

  module.exports = AppleTree