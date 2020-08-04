const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

let i = 0;

app.get("/", (req, res) => {
  res.json(i);
});

app.post("/", (req, res) => {
  i = req.body.number;
});

app.listen(3000, () => console.log("The server is working"));
