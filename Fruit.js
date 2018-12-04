
  class Fruit {
    constructor () {
      this.quality = this.randomQuality()
    }
    randomQuality(){
      let random = ~~(Math.random() * 2) 
      let quality = ['good','bad']
      if(random == 0) {
        return quality[0]
      }else{
        return quality[1]
      }
    }
  }
  
  module.exports = Fruit