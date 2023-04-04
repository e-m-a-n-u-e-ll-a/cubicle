let router = require("express").Router();
let cubeService = require("../services/cubeService");
let accessoryService = require('../services/accessoryService');

router.get("/create", (req, res) => {
    res.render("create")
});

router.post("/create", async (req, res) => {
    let cube = req.body
    //validate
    if (req.body.name <= 0) {
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

// !!!!! \\
router.get("/details/:_id", async (req, res) => {
    let cube = await cubeService.getOneDetailed(req.params._id).lean();
    // console.log(cube);
    res.render("details", { cube });
});


router.get('/:_id/attach', async (req, res) => {
    let cube = await cubeService.getOne(req.params._id).lean();
    let accessories = await accessoryService.getAllWithout(cube.accessories).lean();
    res.render('accessory/attach', { cube, accessories });
});

router.post('/:_id/attach', async (req, res) => {
    let accessoryId = req.body.accessory;
    try {
        await cubeService.attach(req.params._id, accessoryId);
        res.redirect(`/cube/details/${req.params._id}`)

    } catch (err) {
        res.status(404);
        res.render('404');
        console.log(err);
    }

})

module.exports = router;