let express = require("express");

let homeController = require("./controllers/homeController");
let cubeController = require("./controllers/cubeController");

let router = express.Router();

router.get("/", homeController.index);
router.use("/cube", cubeController);
router.get("/about", homeController.about);
module.exports = router;