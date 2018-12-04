const FruitTree = require('./FruitTree')
const Apple = require('./Apple')
class AppleTree extends FruitTree {
    constructor(age,height,matureAge,healthStatus) {
      super("apple")
      this._age = age
      this._height = height
      this._mature = matureAge
      this._dead = 10
      this._healthStatus = healthStatus
    }
    // produce () { 
    //     if (this.age >= this._mature) {
    //       let random = Math.floor(Math.random()*5)
    //       for (let i = 0 ; i < random ; i++) {
    //        let fruit = new Apple()
    //        this.fruits = fruit
    //       }
    //     }
    //   }
}



module.exports = AppleTree