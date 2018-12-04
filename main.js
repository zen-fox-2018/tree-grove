"use strict"

// Release 0
class FruitTree {

  // Initialize a new MangoTree
  constructor (heightAddedEachYear, stopGrowing, startHarvesting, name) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = startHarvesting
    this._name = name
    this._maxAge = stopGrowing
    this._heightAdded = heightAddedEachYear
    this._maxHeight = 25
  }

  get maxHeight() {
    return this._maxHeight
  }

  get maxAge() {
    return this._maxAge
  }

  get name() {
    return this._name
  }

  get heightAdded() {
    return this._heightAdded
  }

  get matureAge() {
    return this._matureAge
  }
  
  get age() {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  set fruits(status) {
    this._fruits.push(status)
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  set harvested(input) {
    this._harvested = input
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++  
    if (this.age === this.maxAge) {
      console.log(this.healthStatus);
      
      this._healthStatus = false
    }
    if (this.height <= this.maxHeight) {
      this._height += this.heightAdded
    }
  }

  // Produce some fruits
  produceFruits () {
    let randomFruits = Math.floor(Math.random() * 10)
    if (this.age >= this.matureAge) {
      for (let i = 0; i < randomFruits; i++) {
        this._fruits.push(new Fruit())
      }
    }
  }

  // Get some fruits
  harvest () {
    let countGood = 0
    let countBad = 0
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === 'good') {
        countGood++
      } else {
        countBad++
      }
    }
    this.harvested = `${this.fruits.length} (${countGood} good, ${countBad} bad)`
    this._fruits = []
  }
}

class Fruit {
  // Produce a fruit
  constructor () {
    this.quality = this.fruitsQuality()
  }

  fruitsQuality () {
    let q = ['good', 'bad']
    this.quality = q[Math.floor(Math.random() * q.length)]
    return this.quality
  }
}

module.exports = {FruitTree, Fruit}