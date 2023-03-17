let express = require("express");

let homeController = require("./controllers/homeController");
let cubeController = require("./controllers/cubeController");

let router = express.Router();

router.use("/", homeController);
router.use("/cube", cubeController);

module.exports = router;