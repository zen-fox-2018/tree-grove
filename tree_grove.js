const MangoTree = require('./MangoTree');
const AppleTree = require('./AppleTree');
const PearTree = require('./PearTree');

class TreeGrove {
    constructor() {
        this.trees = []
    }

    inputTree(name, age, height, matureAge, healthStatus) {
        if(name === 'MangoTree') {
            this.trees.push(new MangoTree(age, height, matureAge, healthStatus))
        } else if(name === 'AppleTree') {
            this.trees.push(new AppleTree(age, height, matureAge, healthStatus))
        } else if(name === 'PearTree') {
            this.trees.push(new PearTree(age, height, matureAge, healthStatus))
        }
    }

    nextYear() {
        this.trees.forEach(tree => {
            tree.grow()
            tree.produceFruits()
            tree.harvest()
        });
    }

    showAges() {
        let result = []
        this.trees.forEach(tree => {
            if (tree.healthStatus) {
                result.push(`${tree.constructor.name} age: ${tree.age}`)
            }
        })
        console.log("ages:")
        console.log(result);
    }

    showTrees() {
        let result = []
        this.trees.forEach(tree => {
            if (tree.healthStatus) {
                result.push(tree.constructor.name)
            }
        });
        console.log("trees:");
        console.log(result);
    }

    showMatureTrees() {
        let result = this.trees.filter(tree => {
            if (tree.healthStatus) {
                return tree.age > tree.matureAge
            }
        })
        console.log(result.map(tree => tree.constructor.name));
    }

    showDeadTrees() {
        let result = []
        this.trees.forEach(tree => {
            if (!tree.healthStatus) {
                result.push(tree.constructor.name)
            }
        });
        console.log("dead trees:")
        console.log(result);
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
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// console.log(grove.trees);


// next year
for (let i = 0; i < 10; i++) {
    grove.nextYear()
}
// console.log(grove.trees);

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
