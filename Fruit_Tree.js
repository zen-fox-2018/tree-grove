"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(matureAge, maxAge, maxHeight, name) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthStatus = true
    this._matureAge = matureAge
    this._maxAge = maxAge
    this._maxHeight = maxHeight
    this._name = name
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healthStatus() {
    return this._healthStatus
  }

  get harvested() {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow() {
    let random = Math.random() * 1

    this._age += 1
    this._height += random

    if (this._height >= this._maxHeight) {
      this._height = this._maxHeight
    }

    if (this._age >= this._maxAge) {
      this._healthStatus = false
    }

    return this
  }

  // Produce some fruits
  produceFruits() {
    if (this.age >= this._matureAge) {
      let random = Math.floor(Math.random() * 15 + 1)
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Fruit())
      }
      return this._fruits
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].status == 'good') {
        good++
      } else {
        bad++
      }
    }
    this._harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }

}

class Fruit {
  // Produce a fruit
  constructor() {
    this.status = this.randomQuality()
  }

  randomQuality() {
    let result = '';
    let random = Math.round(Math.random());
    if (random == 0) {
      result = 'good'
    } else {
      result = 'bad'
    }
    return result;
  }
}


//MANGO000000000000000000000000000000000000000000000000
// class MangoTree extends FruitTree {
//   constructor(matureAge, maxAge, maxHeight) {
//     super(matureAge, maxAge, maxHeight)
//   }

//   produceFruits() {
//     if (this.age >= this._matureAge) {
//       let random = Math.floor(Math.random() * 15 + 1)
//       for (let i = 0; i < random; i++) {
//         this._fruits.push(new Mango())
//       }
//       return this._fruits
//     }
//   }
// }

// class Mango extends Fruit {
//   constructor() {
//     super()
//   }
// }

//APPLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
// class AppleTree extends FruitTree {
//   constructor(matureAge, maxAge, maxHeight) {
//     super(matureAge, maxAge, maxHeight)
//   } 

//   produceFruits() {
//     if (this.age >= this._matureAge) {
//       let random = Math.floor(Math.random() * 15 + 1)
//       for (let i = 0; i < random; i++) {
//         this._fruits.push(new Apple())
//       }
//       return this._fruits
//     }
//   }

// }

// class Apple extends Fruit {
//   constructor() {
//     super()
//   }
// }

//PEARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
// class PearTree extends FruitTree {
//   constructor(matureAge, maxAge, maxHeight) {
//     super(matureAge, maxAge, maxHeight)
//   } 

//   produceFruits() {
//     if (this.age >= this._matureAge) {
//       let random = Math.floor(Math.random() * 15 + 1)
//       for (let i = 0; i < random; i++) {
//         this._fruits.push(new Pear())
//       }
//       return this._fruits
//     }
//   }
// }

// class Pear extends Fruit {
//   constructor() {
//     super()
//   }
// }


module.exports = { FruitTree, Fruit }