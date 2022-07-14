const express = require("express")

const {
    getAllAnimals,
    createAnimals,
    findByName,
    deleteAnimal,
    updateAnimal
} = require("../controller/animals");

const {verifyIfAnimalExist} = require("../middlewares/middleware")

const routes = express();

routes.get("/", getAllAnimals)
routes.get("/:nome", findByName)
routes.post("/register", verifyIfAnimalExist, createAnimals )
routes.put("/update/:nome", updateAnimal)
routes.delete("/delete/:nome",  deleteAnimal)

module.exports = routes;