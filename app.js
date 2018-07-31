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


app.get("/1",(req, res, next) => {
    console.log(req)
    res.json(cohortsData[0])
});

app.listen(port,() => {
    console.log(`Free beans on port ${port}`)
});