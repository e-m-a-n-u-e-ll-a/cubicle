let express = require("express");

let homeController = require("./controllers/homeController");
let cubeController = require("./controllers/cubeController");
let accessoryController = require("./controllers/accessoryController");
let authController = require('./controllers/authController');
const { route } = require("./controllers/authController");

let router = express.Router();

router.use("/", homeController);
router.use("/cube", cubeController);
router.use("/accessory", accessoryController);
router.use('/auth', authController);
router.use('*', (req, res) => {
res.render('404');
})
module.exports = router;