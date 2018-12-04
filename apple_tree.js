const FruitTree = require("./fruit_tree").FruitTree;
const Fruit = require("./fruit_tree").Fruit;
class AppleTree extends FruitTree {
    constructor (treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus) {
      super(20, 25, 2);
      this._treeName = treeName;
      this._age = ageWhenPlanted;
      this._height = heightWhenPlanted;
      this._matureAge = matureAge;
      this._healthStatus = healthStatus;
    }
    produceFruits () {
      if (this._age >= this._matureAge) {
        let addFruits = Math.round(Math.random() * 10);
        for (let i = 1; i <= addFruits; i++) {
          let fruitQuality = new Apple();
          this._fruitsAvailable.push(fruitQuality);
        }
      }
    }
  }
  class Apple extends Fruit{
    constructor () {
      super();
    }
  }
  
  let apple = new Apple;
  let appleTree = new AppleTree();
  module.exports = {AppleTree, Apple}