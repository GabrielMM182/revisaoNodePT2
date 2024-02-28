const { writeFileAnimals, searchListAnimals } = require("../controller/data")

const createAnimals = async (req, res) => {

    if(!req.body.nome) {
        res.status(400);
        res.json({erro: "O campo nome e obrigatorio"})
        return;
    }
    if (typeof req.body.nome !== "string") {
        res.status(400);
        res.json({ erro: "O campo nome precisar no formato string" });
        return;
      }

      if (!isNaN(req.body.nome)) {
        res.status(400);
        res.json({erro: "numero não é permitido no campo nome"});
        return  
     }

    const {
        nome, 
        idade, 
        especie,
        curiosidade
    } = req.body;

    try {
        const animals = await searchListAnimals()

        animals.push({nome, idade, especie ,curiosidade})

        await writeFileAnimals(animals)

        return res.status(201).json({message: "Animal cadastrado com sucesso 😎"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getAllAnimals = async (req, res) => {
    const {especie} = req.query

    try {
        let listAnimals = await searchListAnimals()

        if (especie) {
            const everyAnimalType = listAnimals.every(p => {
               return p.especie === especie
            })

            const someAnimalType = listAnimals.some(p => {
                return p.especie === especie
            })

            listAnimals = listAnimals.filter(p => {
                return p.especie === especie
            })

            return res.status(200).json({listAnimals, everyAnimalType, someAnimalType})
        }

        return res.status(200).json(listAnimals)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}
 
const findByName = async (req, res) => {
    const { nome } = req.params

    try {
        const listAnimals = await searchListAnimals()

        const animalFind = listAnimals.find(p => p.nome === nome)

        if(animalFind) {
            return res.status(200).json(animalFind)
        } else {
            return res.status(404).json({message : "nenhum animal com esse nome foi encontrado cadastrado em nossa API 😭"})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteAnimal = async (req, res) => {
    const {nome} = req.params

    try {
        const listAnimals = await searchListAnimals();

        const listDeleteAnimals = listAnimals.filter(p => p.nome !== nome)

        if(listDeleteAnimals.length === listAnimals.length) {
            return res.status(404).json({message: "tamanho das listas estão identicas vc nao modificou ou deu alguma coisa errada 🍰"})
        }

        writeFileAnimals(listDeleteAnimals)
        
        return res.status(200).json({message: "Animal deletado com sucesso"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const updateAnimal = async (req, res) => {
    const {nome} = req.params
    const {idade, especie, curiosidade} = req.body

    try {
        let listAnimals = await searchListAnimals()

        let listToUpdateAnimals = listAnimals.find(p => p.nome === nome)

        if(listToUpdateAnimals) {
            listToUpdateAnimals.idade = idade || listToUpdateAnimals.idade
            listToUpdateAnimals.especie = especie || listToUpdateAnimals.especie
            listToUpdateAnimals.curiosidade = curiosidade || listToUpdateAnimals.curiosidade
            // listToUpdateAnimals.idade = idade ? idade : listToUpdateAnimals.idade // maneira alternativa de refazer ao update 

            const indexToUpdate = listAnimals.indexOf(p => p.nome === nome)
            listAnimals[indexToUpdate] = {
                nome,
                idade: listToUpdateAnimals.idade,
                especie: listToUpdateAnimals.especie,
                curiosidade: listToUpdateAnimals.curiosidade
            };

            await writeFileAnimals(listAnimals)

            return res.status(204).json({message: "seu animal foi atualizado com sucesso 🤠"})
        }

        return res.status(404).json({message: "voce chegou a atualizar algo? porque deu ruim 🤥"})


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createAnimals,
    getAllAnimals,
    findByName,
    deleteAnimal,
    updateAnimal
}
