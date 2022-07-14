const fs = require("fs/promises")

const verifyIfAnimalExist = async (req, res, next) => {
    const {nome} = req.params
    const {nome: nomeBody} = req.body // para funcionar no post 

    try {
        const listAnimals = JSON.parse(await fs.readFile("./src/database.json"))

        const animalExist = listAnimals.find(p => p.nome === (nome || nomeBody))

        if(animalExist) {
            return res.status(409).json({message: "o nome do animal já foi cadastrado 🤨"})
        } 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    next()
}

module.exports = {
    verifyIfAnimalExist
}