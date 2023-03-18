let router = require("express").Router();
let cubeService = require("../services/cubeService");

router.get("/", (req, res) => {
    let { search, from, to } = req.query;
    let cubes = cubeService.getAll(search, from, to);

    res.render("index", { cubes });

});

router.get("/about", (req, res) => {
    res.render("about");
});



module.exports = router;