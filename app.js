const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
const cohortsData = require("./cohorts.js");

app.use(cors());

const findByID = (params, data) => {
    for(let i = 0; i < data.length; i++) {
        let holderString = data[i].id.toString();
        if (params === holderString) {
            return data[i];
        };
    };
    return null;
}

app.get("/",(req, res, next) => {
    res.json(cohortsData);
});

app.get("/:id",(req, res, next) => {
    const cohort = findByID(req.params.id, cohortsData);
    if (cohort){
        res.json(cohort);
    } else {
        res.json({
            error: {
                "message": "No record found, nerd"
            }
        });
    };
});

app.listen(port,() => {
    console.log(`Free beans on port ${port}`);
});