const express = require("express")
const swaggerUI = require("swagger-ui-express");

const {
    getAllAnimals,
    createAnimals,
    // findByName,
    deleteAnimal,
    updateAnimal
} = require("../controller/animals");

const {verifyIfAnimalExist} = require("../middlewares/middleware")

const routes = express();

routes.get("/", getAllAnimals)
// routes.get("/:nome", findByName)
routes.post("/register", verifyIfAnimalExist, createAnimals )
routes.put("/update/:nome", updateAnimal)
routes.delete("/delete/:nome",  deleteAnimal)
routes.use("/doc", swaggerUI.serve, swaggerUI.setup(require("../../swagger.json")));

module.exports = routes;