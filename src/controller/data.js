const fs = require("fs/promises")

const searchListAnimals = async () => {
    return JSON.parse(await fs.readFile('./src/database.json'))
}

const writeFileAnimals = async (animals) => {
    await fs.writeFile('./src/database.json', JSON.stringify(animals))
}

module.exports = {
    writeFileAnimals,
    searchListAnimals
}