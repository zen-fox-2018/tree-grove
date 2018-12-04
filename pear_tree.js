
const FruitTree = require("./fruit_tree");
const Fruit = require("./fruit");

class PearTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._name = name;
        this._height = height;
        this._matureAge = matureAge;
        this._endAge = 15;
    }

    produceMango () {
        let randomFruit = Math.floor(Math.random()*5);
        for(let i = 0; i < randomFruit; i++) {
          let pearTree = new Pear();
          this._fruits.push(pearTree)
        }
        return this._fruits
    }
}

class Pear extends Fruit {

}

module.exports = PearTree