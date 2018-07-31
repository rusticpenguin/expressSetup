const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 9000;
const cors = require("cors");
const cohortsData = require("./cohorts.js")

app.use(cors());

app.get("/",(req, res, next) => {
    res.json(cohortsData)
});


app.get("/:id",(req, res, next) => {
    console.log(req.params)
    res.json(cohortsData[req.params.id])
});

app.listen(port,() => {
    console.log(`Free beans on port ${port}`)
});