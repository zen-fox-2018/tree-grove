const obj = require("./fruit_tree.js");
const FruitTree = obj.fruitTree;
const Fruit = obj.fruits;

class PearTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(7, 15, 2, matureAge, 'pear'); 
    this._age = age;
    this._height = height;
    this._getHealthStatus = healthStatus;
  }

  produceFruits() {
    let fruits = Math.ceil(Math.random() * 10);
    for (let i = 0; i < fruits; i++) {
      let newFruits = new Apple();
      this._fruits.push(newFruits);
    }
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

module.exports = PearTree;