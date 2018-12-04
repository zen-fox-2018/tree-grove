const FruitTree = require('./FruitTree')
const Mango = require('./Mango')
class MangoTree extends FruitTree {
    constructor(age,height,matureAge,healthStatus) {
        super("mango")
        this._age = age
        this._height = height
        this._mature = matureAge
        this._dead = 17
        this._healthStatus = healthStatus
      }
      // produce () { 
      //   if (this.age >= this._mature) {
      //     let random = Math.floor(Math.random()*5)
      //     for (let i = 0 ; i < random ; i++) {
      //      let fruit = new Mango()
      //      this.fruits = fruit
      //     }
      //   }
      // }
}

module.exports = MangoTree