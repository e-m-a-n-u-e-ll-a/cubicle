let router = require("express").Router();
let cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
    res.render("create")
});

router.post("/create", async (req, res) => {
    let cube = req.body
    //validate
    if (req.body.name < 0) {
        return res.status(400).send("Invalid request?")
    }

    //save data
    try {
        await cubeService.save(cube);
        res.redirect("/");
    } catch (error) {
        res.send(error)
    }

});

router.get("/details/:id", (req, res) => {
res.render("details")
});

module.exports = router;