
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.trees = [];
    }

    inputTree(name, age, height, matureAge, healthStatus) {
        if(name === "MangoTree") {
            this.trees.push(new MangoTree(name, age, height, matureAge, healthStatus))
        } else if (name === "AppleTree") {
            this.trees.push(new AppleTree(name, age, height, matureAge, healthStatus))
        } else if (name === "PearTree") {
            this.trees.push(new PearTree(name, age, height, matureAge, healthStatus))
        }
        return this.trees
    }

    showAges() {

        for(let i = 0; i < this.trees.length; i++) {
            this.trees[i]._height = this.trees[i].height + Math.floor(Math.random()*2)
            if(this.trees[i]._age < this.trees[i]._matureAge) {
                this.trees[i]._age++
            } else if (this.trees[i]._age === this.trees[i]._endAge) {
                this.trees[i]._healthStatus = false
            }
            console.log(`pohon yang masih hidup adalah ${this.trees[i]._name}, age ${this.trees[i]._age}, height: ${this.trees[i]._height}`)
        }
    }

    showTrees() {
        let treeAlive = [];
        this.trees.forEach(element => {
            treeAlive.push(element._name)
        })
        console.log(`pohon yang masih hidup adalah ${treeAlive.join(",")}`)
    }

    showMatureTrees() {
        let matureTrees = [];
        this.trees.forEach(element => {
            if(element._age === element._matureAge) {
                matureTrees.push(element._name)
            }
        })
        console.log(`pohon yang berbuah adalah ${matureTrees.join(",")}`)
    }

    showDeadTrees() {
        let deadTree = [];
        this.trees.forEach(element =>{
            if(element._age === element._endAge) {
                deadTree.push(element._name)
            }
        })
        console.log(`pohon yang sudah mati adalah: ${deadTree.join(",")}`)
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

// next year
// grove.nextYear()

for(let i = 0; i < 20; i++) {

    console.log(`==========================`)
    // // show trees ages
    grove.showAges()
    
    // // show trees
    grove.showTrees()
    
    // // show trees
    grove.showMatureTrees()
    
    // // show trees
    grove.showDeadTrees()
}
