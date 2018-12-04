
const FruitTree = require("./fruit_tree");
const Fruit = require("./fruit")

class MangoTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._name = name;
        this._height = height
        this._matureAge = matureAge;
        this._endAge = 10
    }

    produceFruits () {
        let randomFruit = Math.floor(Math.random()*5);
        for(let i = 0; i < randomFruit; i++) {
            let appleTree = new Mango();
            this._fruits.push(appleTree)
        }
        return this._fruits
    }
}

class Mango extends Fruit {

}

module.exports = MangoTree

