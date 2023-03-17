let cubes = require("../db.json");
let fs = require("fs/promises");
let path = require("path");
exports.save = (cube) => {
    cubes.push(cube);
    let data = JSON.stringify(cubes, '', 4);
    return fs.writeFile(path.resolve('src', "db.json"), data)
}