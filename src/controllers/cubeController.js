let router = require("express").Router();
let cubes = require("../db.json");
let fs = require("fs/promises");
let path = require("path")

router.get("/create", (req, res) => {
    res.render("create")
});

router.post("/create", (req, res) => {
    let cube = req.body
    //validate
    if (req.body.name < 0) {
        return res.status(400).send("Invalid request?")
    }

    //save data
    cubes.push(req.body);
    fs.writeFile(path.resolve('src', "db.json"), JSON.stringify(cubes,'', 4))
        .then(() => {
            // redirect
            res.redirect("/")
        })
        .catch(err => {
            res.send(err);
        });

});

module.exports = router;