const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.trees = []
        this.resultTrees = []
        this.deadTrees = []
        this.matureTrees = []
    }

    nextYear() {
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].initialAge <= this.trees[i].deadAge) {
                this.trees[i].initialAge += 1
                this.trees[i].height += Math.round(Math.random() * 5)
            }
        }
    }

    inputTree(name, initialAge, height, matureAge, healthStatus) {
        switch (name) {
            case `MangoTree`:
                this.trees.push(new MangoTree(name, initialAge, height, matureAge, healthStatus))
                break;

            case `AppleTree`:
                this.trees.push(new AppleTree(name, initialAge, height, matureAge, healthStatus))
                break;

            case `PearTree`:
                this.trees.push(new PearTree(name, initialAge, height, matureAge, healthStatus))
                break;
        }
    }

    showAges() {
        console.log(`\n============= DAFTAR UMUR POHON DITAHUN BERSANGKUTAN ===============`);
        for (let i = 0; i < this.trees.length; i++) {
            console.log(`Umur Pohon ${this.trees[i].name} adalah ${this.trees[i].initialAge}`);
        }
    }

    showTrees() {
        this.resultTrees = []
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].initialAge <= this.trees[i].deadAge) {
                this.resultTrees.push(this.trees[i].name)
            }
        }
        if (this.resultTrees.length == 0) {
            this.resultTrees.push(`Tidak ada pohon yang hidup ditaman`)
        }
        console.log(`\n============= DAFTAR POHON DITAHUN BERSANGKUTAN ====================`);
        console.log(this.resultTrees);

    }

    showMatureTrees() {
        this.matureTrees = []
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].initialAge >= this.trees[i].matureAge) {
                this.matureTrees.push(this.trees[i].name)
            }
        }
        console.log(`\n============= DAFTAR POHON MATURE DITAHUN BERSANGKUTAN =============`);
        console.log(this.matureTrees);
    }

    showDeadTrees() {
        this.deadTrees = []
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].initialAge >= this.trees[i].deadAge) {
                this.deadTrees.push(this.trees[i].name)
            }
        }
        console.log(`\n============= DAFTAR POHON MATI DITAHUN BERSANGKUTAN ===============`);
        console.log(this.deadTrees);

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

for (let i = 0; i < 20; i++) {
    console.log(`\n                   TAHUN KE ${i}                     `);
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
}
