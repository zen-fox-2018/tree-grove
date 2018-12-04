const MangoTree = require('./MangoTree');
const AppleTree = require('./AppleTree');
const PearTree = require('./PearTree');

class TreeGrove {
    constructor() {
        this._Trees = []
    }
    get Trees() {
        return this._Trees
    }
    inputTree (name,age,height,matureAge,healthStatus) {
        let tree = null
        if (name === "MangoTree") {
            tree = new MangoTree(age,height,matureAge,healthStatus)
        }
        if (name === "AppleTree") {
            tree = new AppleTree(age,height,matureAge,healthStatus)
        }
        if (name === "PearTree") {
            tree = new PearTree(age,height,matureAge,healthStatus)
        }
        this._Trees.push(tree)
    }

    nextYear() {
        for (let i = 0 ; i < this._Trees.length ; i++) {
            this._Trees[i].grow()
        }
        
    }

    showAges() {
        for (let i = 0 ; i < this._Trees.length ; i++) {
            console.log(`${this._Trees[i].constructor.name} | Age : ${this._Trees[i].age}`)
        }
    }
    showTrees() {
        this._Trees.forEach( tree => {
            console.log(`${tree.constructor.name} || Age : ${tree.age} | Height : ${tree.height} m | health : ${tree.healthStatus}`)
        })
    }
    showMatureTrees() {
        let mature = []
        this._Trees.forEach(tree => {
            if(tree.age >= tree._mature) {
                mature.push(tree.constructor.name)
            }
        })
        console.log( "Mature Tree :", mature.join(" | "))
    }
    showDeadTrees() {
        let dead = []
        this._Trees.forEach( tree => {
            if(tree.age === tree._dead) {
                dead.push(tree.constructor.name)
            }
        })
        console.log(`Dead Trees : ${dead.join(" | ")}`)
    }

}

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
console.log(grove._Trees)
// next year
grove.nextYear()

// show trees ages
console.log("Tree Age")
console.log("=========================")
grove.showAges()
console.log("==========================")
// show trees
console.log("All Tree")
console.log("===========")
grove.showTrees()
console.log("==========================")
// show trees
grove.showMatureTrees()
console.log("===========================")
// show trees
grove.showDeadTrees()
