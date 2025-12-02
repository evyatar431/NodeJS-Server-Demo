const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.post("/api/cars", (req, res) => {
    const { brand, model } = req.body;

    res.send(`You chose ${brand} ${model}. `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
