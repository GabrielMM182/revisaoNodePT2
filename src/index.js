const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(router);

app.listen(3000);
