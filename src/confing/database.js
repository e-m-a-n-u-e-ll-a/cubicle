let mongoose = require("mongoose");
let connectionString = 'mongodb://localhost:27017/cubicle';

exports.initializeDatabase = () => mongoose.connect(connectionString);

