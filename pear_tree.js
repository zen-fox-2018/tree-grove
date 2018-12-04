const FruitTree = require('./fruit_tree.js')

class PearTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus){
        super(name, age, height, matureAge, healthStatus)
        this._deathAge = 11
    }   

    set age(x) {
        this._age += x
    }

    get age() {
        return this.age
    }

    grow() {
        this.age = 1
    }
}


module.exports = PearTree