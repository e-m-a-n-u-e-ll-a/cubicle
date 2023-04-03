let fs = require("fs/promises");
let path = require("path");
const Accessory = require("../models/Accessory");
let Cube = require('../models/Cube')

exports.save = (cube) => {
    return Cube.create(cube);
}

exports.getOne = (id) => Cube.findById(id).populate('accessories');


exports.getAll = async (search = '', frominput = 0, toinput = 6) => {
    let cubes = await Cube.find().lean();
    /*  let from = Number(frominput) || 0;
       let to = Number(toinput) || 6;
       let result = cubes
           .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
           .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);
       return result;*/
    return cubes;
}


exports.attach = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
}