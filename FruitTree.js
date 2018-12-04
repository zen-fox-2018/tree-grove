
const Fruit = require('./Fruit')

class FruitTree {

    constructor () {
      this._age = 0
      this._height = 0
      this._fruits = []
      this._healthStatus = true
      this._harvested = ''
      this._matureAge = 0
      this._maxAge = 0 
      this._maxHeight = 0
    }
  
    get age () {
      return this._age
    }
  
    get height () {
      return this._height.toFixed(1)
    }
  
    get fruits () {
      return this._fruits
    }
  
    get healthStatus () {
      return this._healthStatus
    }
    get matureAge(){
      return this._matureAge
    }
    get harvested () {
      return this._harvested
    }
    get maxHeight(){
      return this._maxHeight
    }
  
    // Get current states here
  
    // Grow the tree
    grow () {
     
      let randomHeight = Math.random() * 1
      
      this._height += randomHeight
      
      this._age += 1
  
      if(this._height >= this.maxHeight){
        this._height = this.maxHeight
      }
  
      if(this._maxAge == this._age){
        this._healthStatus = false
      }
    }
  
    // Produce some mangoes
    produceFruits () {
      if(this.age >= this.matureAge){
      let randomFruits = ~~(Math.random() * 9) + 1
      for(let i = 0; i < randomFruits; i++){
        this._fruits.push(new Fruit())
      }
    }
    }
  
    // Get some fruits
    harvest () {
      let good = 0
      let bad = 0
      let total = 0
      for(let i = 0 ; i < this._fruits.length; i++){
        total += 1
        if(this._fruits[i].quality == 'good'){
          good++
        }else{
          bad++
        }
      }
      this._harvested = `${total} (${good} good, ${bad} bad)`
      this._fruits = []
    }
  }

  let fruittree = new FruitTree
  fruittree.grow()
  fruittree.produceFruits()
  fruittree.harvest()
  console.log(`[Year ${fruittree.age} Report] Height = ${fruittree.height} m | Fruits harvested = ${fruittree.harvested}`)

  
 module.exports = FruitTree

