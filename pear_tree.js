const FruitTree = require("./fruit_tree").FruitTree;
const Fruit = require("./fruit_tree").Fruit;

class PearTree extends FruitTree{
    constructor(treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus) {
      super(10, 20, 1, "Pear");
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
          let fruitQuality = new Pear();
          this._fruitsAvailable.push(fruitQuality);
        }
      }
    }
  }
  class Pear extends Fruit{
    constructor() {
      super();
    }
  }
  let pear = new Pear;
  module.exports = {PearTree, Pear}