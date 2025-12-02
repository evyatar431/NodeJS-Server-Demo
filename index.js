const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/cars", (req, res) => {
    const { brand, model } = req.body;
    res.send(`You chose ${brand} ${model}.`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
