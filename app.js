const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 9000;
const cors = require("cors");

app.use(cors())

app.get("/",(req, res, next) => {
    res.send(`yo nerd`)
})

app.listen(port,() => {
    console.log(`Free beans on port ${port}`)
})