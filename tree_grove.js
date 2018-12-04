const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
// console.log(MangoTree)

class TreeGrove {
    constructor(){
        this._AllTrees = []
        
    }
    get allTrees() {
        return this._AllTrees
    }
   inputTree(name,seedAge,seedHeight,mature,healthStatus){
       if(name === 'MangoTree'){
        this._AllTrees.push(new MangoTree(seedAge,seedHeight,mature,healthStatus))
       }
       if(name === 'AppleTree' ){
           this._AllTrees.push(new AppleTree(seedAge,seedHeight,mature,healthStatus))
       }
       if(name === 'PearTree') {
           this._AllTrees.push(new PearTree(seedAge,seedHeight,mature,healthStatus))
       }
        
    }
    nextYear(num) {
        let result = []
        for(let i = 0; i < this.allTrees.length; i++){
           result.push(this.allTrees[i].constructor.name + ' age next year ; ' + Number(this._AllTrees[i]._age+1))
        }
        return result
    }

    showAges() {
        let result = []
        for(let i = 0; i < this.allTrees.length; i++){
           result.push(this.allTrees[i].constructor.name + ' age ; ' + this._AllTrees[i]._age)
        }
        return result
    }
    show_Trees() {
        let result1 = []
        for(let i = 0; i < this.allTrees.length; i++){
            let cek  = false
            for(let j = 0; j < result1.length; j++){
                if(this._AllTrees[i].constructor.name == result1[j]){
                    cek = true             
                }
            }
            if(!cek){
                result1.push(this._AllTrees[i].constructor.name)
            }
           
        }
        return result1
        
    }
    showMatureTrees () {
        for(let i = 0 ; i < this.allTrees.length; i++){
            if(this.allTrees[i]._age == this.allTrees[i]._matureAge){
                return this.allTrees[i].constructor.name + 'sudah tidak berbuah'
            }
            else {
                return 'semua pohon berbuah'
            }
        }
    }
    showDeadTrees () {
        for(let i = 0 ; i < this.allTrees.length; i++){
            if(this.allTrees[i]._healthStatus !== true){
                return 'pohon ini mati' ,+this._AllTrees[i].constructor.name 
            }
            else {
                return `semua pohon hidup`
            }
        }
    }
}
let manggoTree = new MangoTree()
let appleTree = new AppleTree()
let pearTree = new PearTree()

//console.log(manggoTree)
var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
console.log(grove._AllTrees)

//next year
console.log(grove.nextYear(3))

// show trees ages
console.log(grove.showAges())

// show trees
console.log(grove.show_Trees())

// show trees
console.log(grove.showMatureTrees())

// // show trees
console.log(grove.showDeadTrees())
