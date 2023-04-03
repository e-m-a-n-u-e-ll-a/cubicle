let express = require("express");

let homeController = require("./controllers/homeController");
let cubeController = require("./controllers/cubeController");
let accessoryController = require("./controllers/accessoryController");


let router = express.Router();

router.use("/", homeController);
router.use("/cube", cubeController);
router.use("/accessory", accessoryController)

module.exports = router;