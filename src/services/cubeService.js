let cubes = require("../db.json");
let fs = require("fs/promises");
let path = require("path");

exports.save = (cube) => {
    cubes.push({ id: cubes.length, ...cube });
    let data = JSON.stringify(cubes, '', 4);
    return fs.writeFile(path.resolve('src', "db.json"), data)
}

exports.getOne = (id) => {
    return cubes[id];
}

exports.getAll = (search = '', frominput = 0, toinput = 6) => {
    let from = Number(frominput) || 0;
    let to = Number(toinput) || 6;
    let result = cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);
    return result;
}