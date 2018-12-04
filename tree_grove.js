const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._trees = [];
    }

    inputTree(name, age, height, matureAge, healthStatus) {
        name === 'MangoTree' ? this._trees.push(new MangoTree(name, age, height, matureAge, healthStatus)) :
            name === 'AppleTree' ? this._trees.push(new AppleTree(name, age, height, matureAge, healthStatus)) :
                name === 'PearTree' ? this._trees.push(new PearTree(name, age, height, matureAge, healthStatus)) : null
    }

    nextYear() {

        for (let i = 0; i < this._trees.length; i++) {
            this._trees[i].grow()
        }

    }

    showAges() {
        for (let i = 0; i < this._trees.length; i++) {
            console.log(`\nUmur pohon ${this._trees[i]._name} ${this._trees[i]._age} saat ditanam`)
        }
    }

    showTrees() {
        for (let i = 0; i < this._trees.length; i++) {
            console.log(`\n${this._trees[i]._name}`)
        }
    }

    showMatureTrees() {
        for (let i = 0; i < this._trees.length; i++) {
            if (age >= matureAge) {
                console.log(`Nama-nama pohon yang sedang berbuah:\n${this._trees[i]._name}`)
            }
        }
    }

    showDeadTrees() {
        for (let i = 0; i < this._trees.length; i++) {
            if (age === this._endofTree) {
                console.log(`Nama-nama pohon yang mati adalah :\n${this._trees[i]._name}`)
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
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
console.log('==========> tahun pertama <==========\n\n', grove._trees)

// show trees ages
grove.showAges()

// next year
grove.nextYear()
console.log('\n==========> tahun berikutnya <==========\n\n', grove._trees)


// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
