class Fruit {
    constructor() {
        this.quality = this.generateQuality()
    }

    generateQuality() {

        let random = Math.round(Math.random())
        let quality = ['good', 'bad']

        return random === 0 ? quality[0] : quality[1]
    }
}

module.exports = Fruit