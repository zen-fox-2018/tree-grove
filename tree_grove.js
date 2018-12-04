const MangoTree = require('./mango_tree.js').MangoTree;
const AppleTree = require('./apple_tree.js').AppleTree;
const PearTree = require('./pear_tree.js').PearTree;

class TreeGrove {
    constructor() {
        this.dataTree = [];
    }

    nextYear() {
        for (let i = 0; i <= this.dataTree.length-1; i++) {
            this.dataTree[i].grow()
        }
    }

    inputTree(treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus) {
        let pohon = null;
        if (treeName === "MangoTree") {
            pohon = new MangoTree(treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus);
        } else if (treeName === "AppleTree"){
            pohon = new AppleTree(treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus);
        } else if (treeName === "PearTree") {
            pohon = new PearTree(treeName, ageWhenPlanted, heightWhenPlanted, matureAge, healthStatus);
        }
        this.dataTree.push(pohon);
        return this.dataTree;
    }

    showAges() {
        for (let i = 0; i <= this.dataTree.length-1; i++) {
            console.log(this.dataTree[i]._treeName + " Age: " + this.dataTree[i]._age);
        }
    }

    showTrees() {
        for (let i = 0; i <= this.dataTree.length-1; i++) {
            console.log("Names: " + this.dataTree[i]._treeName);
        }
    }

    showMatureTrees() {
        for (let i = 0; i <= this.dataTree.length-1; i++) {
            if (this.dataTree[i]._age >= this.dataTree[i]._matureAge) {
                console.log("Mature Age: " + this.dataTree[i]._treeName);
            }
        }
    }

    showDeadTrees() {
        for (let i = 0; i <= this.dataTree.length-1; i++) {
            if (this.dataTree[i]._healthStatus === false) {
                console.log("Dead Trees: " + this.dataTree[i]._treeName);
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

console.log(grove)