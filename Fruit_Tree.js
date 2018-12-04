
class FruitTree {

  
    constructor () {
      this._age = 0
      this._height = 0
      this._fruitProduce = []
      this._harvested = ''
      this._healthStatus = true
      this._matureAge = 10
      this._maxHeight = 4.8
      this._startProduce = 0
      this._maxAge = 20
    }
   
    get age () {
      return this._age
    }
    
    get maxHeight() {
      return this._maxHeight
    }
  
    get height () {
      return this._height
    }
    get mature() {
      return this._matureAge
    }
    get startProduce() {
      return this._startProduce
    }
    get fruits () {
      return this._fruitProduce
    }
  
    get healthStatus () {
      return this._healthStatus
    }
  
    get harvested () {
      return this._harvested
  
    }
    get maxAge () {
      return this._maxAge
    }
  
    // Get current states here
  
    // Grow the tree
    grow () {
      
    
      let maxHeight =  this.maxHeight
      let randomHeight =  Math.random()*3
  
      this._age++
      
      if(this._age > this.mature){
          randomHeight = 0
      }
      else if(this._age > 1 && this._age <= this.mature) {
      this._height += randomHeight
      }
      else {
        this._height += randomHeight
      }
  
      if(this._age >= this._maxAge){
        this._healthStatus =  false
      }
   
    return this
    }
    
  
    // Produce some mangoes
    produceFruit () {
      let randomProd = Math.ceil(Math.random()*10)
      if(this.age >= this.startProduce){
      for(let i = 0; i < randomProd; i++){
        this._fruitProduce.push(new Fruit())
      }
      return this._fruitProduce
      }
    }
  
    // Get some fruitslet
    harvest () {
      let good = 0
      let bad = 0
      let total = 0
      for(let i = 0; i < this._fruitProduce.length;i++){
        if(this._fruitProduce[i].condition == 'good'){
          good++
          total++
        }else{
          bad++
          total++
        }
      }
      this._harvested = `${total} (${good} good, ${bad} bad)`
     // this._fruitProduce = []
    }
  
  }  //class edge
  
  class Fruit {
    // Produce a mango
    constructor () {
      this.condition = this.randomCondition()
    }
    randomCondition (){
      let con = ['good','bad']
      let random = Math.floor(Math.random()*2)
      let producedFruit =  con[random]
      return producedFruit
    }
  }
  

  module.exports = {FruitTree,Fruit}
  