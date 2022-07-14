const express = require("express");
const router = require("./routes/router")

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    return res.send({message: "teste"})
})

app.listen(3000)