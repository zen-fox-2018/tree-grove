// const FruitTree = require('./Fruit_Tree.js').FruitTree
const MangoTree = require('./Mango_Tree.js')
const AppleTree = require('./Apple_Tree.js')
const PearTree = require('./Pear_Tree.js')

class TreeGrove {
    constructor() {
        this._tree = []
    }

    get tree() {
        return this._tree
    }

    inputTree(name, age, height, matureAge, healthStatus) {
        if (name == "MangoTree") {
            this.tree.push(new MangoTree(age, height, matureAge, healthStatus))
        } else if (name == "AppleTree") {
            this.tree.push(new AppleTree(age, height, matureAge, healthStatus))
        } else if (name == "PearTree") {
            this.tree.push(new PearTree(age, height, matureAge, healthStatus))
        }
    }

    nextYear() {
        for (let i = 0; i < this.tree.length; i++) {
            this.tree[i].grow()
        }
    }

    showAges() {
        for (let i = 0; i < this.tree.length; i++) {
            console.log(this.tree[i].age);
        }
    }

    showTrees() {
        for (let i = 0; i < this.tree.length; i++) {
            console.log(this.tree[i]);
        }
    }

    showMatureTrees() {
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i].age >= this.tree[i].matureAge) {
                console.log(this.tree[i])
            }
        }
    }

    showDeadTrees() {
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i].age >= this.tree[i].maxAge) {
                console.log(this.tree[i])
            }
        }
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

// console.log(grove.tree);


// next year
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()

