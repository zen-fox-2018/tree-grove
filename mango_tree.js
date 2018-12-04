const obj = require("./fruit_tree.js");
const FruitTree = obj.fruitTree;
const Fruit = obj.fruits;

class MangoTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(5, 20, 1, matureAge, 'mango');
    this._age = age;
    this._height = height;
    this._getHealthStatus = healthStatus;
  }

  produceFruits() {
    let fruits = Math.ceil(Math.random() * 10);
    for (let i = 0; i < fruits; i++) {
      let newFruits = new Mango();
      this._fruits.push(newFruits);
    }
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

module.exports = MangoTree;
// let tree = new MangoTree()
// do {
//   tree.grow();
//   tree.produceFruits();
//   // console.log(tree);
//   tree.harvest();
//   console.log(`[Year ${tree.age} ${tree.typeOfFruit}] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
// } while (tree.healthStatus != false)
// console.log('This tree has given its best, may it rest in peace');

