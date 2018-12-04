"use strict"
const FruitTree = require('./FruitTree')
const Apple = require('./Apple')

class AppleTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(age, height, matureAge, healthStatus)
    this._maxAge = 15
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
      let fruits = Math.floor(Math.random() * (9 - 1 + 1)) + 1
      for (let i = 0; i < fruits; i++) {
        this.fruits = new Apple()
      }
    }
  }
  
}

module.exports = AppleTree