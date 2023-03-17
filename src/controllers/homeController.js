let router = require("express").Router();
let cubes = require("../db.json");

router.get("/", (req, res) => {
    res.render("index", { cubes });
});

router.get("/about", (req, res) => {
    res.render("about");
});



module.exports = router;