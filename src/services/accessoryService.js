let Accessory = require('../models/Accessory');
exports.create = (data) => Accessory.create(data);
exports.getAll = () => Accessory.find();
exports.getAllWithout = (ids) => Accessory.find({_id:{ $nin: ids }})

