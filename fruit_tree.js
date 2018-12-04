"use strict"

// Release 2

class FruitTree {

  // Initialize a new FruitTree
  constructor () {
    this._age = 1
    this._height = 0.1
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = 1    
    this._stopGrowAge = 11
    this._witheredAge = 19
  }

  get age () {
    return this._age 
  }

  get height () {
    return `${this._height} m`
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1    
    if(this.age <= this._stopGrowAge){
      this._height += Math.floor(Math.random() * 3)
    }
    if(this.age === this._witheredAge){
      this._healthStatus = false
    }
    
  }

  // Produce some fruits
  produceFruits () {
    if(this.age >= this._matureAge){
      let randomProduce = Math.floor(Math.random()* 5)
      for(let i =0; i < randomProduce; i++){        
        this._fruits.push(new Fruit())
        
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest () {
    let counterGood = 0
    let counterBad = 0
    for ( let i = 0; i < this.fruits.length; i++) {
      // console.log(this.fruits[i])
      if (this.fruits[i].quality==='good'){
        counterGood++
      }
      else {
        counterBad++
      }
    }
    // console.log('masuk')
    this._harvested = `${this.fruits.length} (${counterGood} good, ${counterBad} bad)`

    this._fruits = []
    return this
  }

}

class Fruit {
  // Produce a fruit
  constructor () {
    this.quality = this.kualitasBuah();    
  }

  kualitasBuah(){
    let random = ~~(Math.random()*2)
    let kualitas = ''
    if(random == 0){
      kualitas ='bad'
    }
    else {
      kualitas='good'
    }
    return kualitas
    
  }
}


  // //  driver code untuk release 2
//   console.log(`The tree is alive! :smile:`)
//    let fruitTree = new FruitTree()
//    do {
//      fruitTree.grow();
//      fruitTree.produceFruits();
//      fruitTree.harvest();
//      console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
//    } while (fruitTree.healthStatus != false)
//    console.log(`The tree has met its end. :sad:`)
  
  
 
module.exports = {FruitTree , Fruit}


