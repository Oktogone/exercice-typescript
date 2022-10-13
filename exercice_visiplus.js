import fs from 'fs'

class GameSampleMap {
    // Pourrait-on avoir un décorateur @GameMap() au lieu des deux propriétés ?
    id = 'mymap'
    file = './maps/map.tiled'
    // ---

    // mettez les types.
    layers = []
    width = 0
    height = 0
    name = ''

    // onInit serait une méthode connue par notre système, pourrait-on l'indiquer via une interface ?
    // Définissez le type de retour
    async onInit() {
        const mapValue = await this.open()
        this.run(mapValue)
    }

    async open() {
        // Indiquez les types de retour de resolve, reject, err, val. Vous pouvez le déduire selon le reste du code
        // err est de type Error (type natif en javascript)
        return new Promise((resolve, reject) => {
            fs.readFile(this.file, (err, val) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(val)
            }, 'utf8')
        })
    }
    
    // Mettez le type de retour et le type de mapValue
    run(mapValue) {
        this.layers = mapValue.layers
        this.name = mapValue.name
        this.width = mapValue.width
        this.height = mapValue.height
    }
}