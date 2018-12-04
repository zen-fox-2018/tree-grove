class FruitTree {
    constructor (nama, umur, tinggi, matureAge, healthstatus) {
      this.name = nama
      this.diedAge = 20
      this._age = umur
      this.matureAge = matureAge
      this.stopGrow = 20
      this._height = tinggi
      this._fruits = []
      this._harvested = ''
      this._healthStatus = healthstatus
    
    }
    get age () {
      return this._age
    }
  
    get height () {
      return this._height
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
  
    grow () {
     let randomHeight = (Math.random()* 1).toFixed(0)
     this._height += Number(randomHeight)
     this._age+=1
     if (this._age >= this.diedAge) {
       this._healthStatus = false
     }
    }
  
    produceFruits () {
      if(this._age >= this.matureAge && this.age < this.diedAge){
        let randomFruits = Math.floor(Math.random()*10)
        for(let i = 0; i < randomFruits; i++) {
            let fruits = new Fruit ()
            this._fruits.push(fruits)
        }  
      }
    }
  
    harvest () {
      let good = 0
      let bad = 0
      for(let i = 0; i < this._fruits.length; i++) {
        if(this._fruits[i].quality == 'good') {
          good++
        }else{
          bad++
        }
      }
      this._harvested = `${bad + good}) (${good} good, ${bad} bad)`
      this._fruits = []
    }
  
  
  }
  class Fruit {
    constructor () {
      this.quality = this.decideQuality()
    }
  
    decideQuality (){
      let arr = ['good', 'bad']
      let randomFruits = Math.floor(Math.random()*2)
      return arr[randomFruits]
    }
  }


  module.exports = FruitTree