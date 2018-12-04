const FruitTree = require("./fruit_tree").FruitTree;
const Fruit = require("./fruit_tree").Fruit;
class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor (treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus) {
    //Bisa di override langsung ke parent (Fruit_tree)
    //Caranya Tambah parameter ke super && fruit_tree
    super(5, 11, 2);
    //Bisa di override disini jugas
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
        let fruitQuality = new Mango();
        this._fruitsAvailable.push(fruitQuality);
      }
    }
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor () {
    super();
  }
}
let mango = new Mango;

  // driver code untuk release 0
let mangoTree = new MangoTree()

module.exports = {MangoTree, Mango}