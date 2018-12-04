const FruitTree = require('./FruitTree')
const Pear = require('./Pear')
class PearTree extends FruitTree {
    constructor(age,height,matureAge,healthStatus) {
        super("pear")
        this._age = age
        this._height = height
        this._mature = matureAge
        this._healthStatus = healthStatus
      }
      // produce () { 
      //   if (this.age >= this._mature) {
      //     let random = Math.floor(Math.random()*5)
      //     for (let i = 0 ; i < random ; i++) {
      //      let fruit = new Pear()
      //      this.fruits = fruit
      //     }
      //   }
      // }
}
module.exports = PearTree