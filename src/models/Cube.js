let mongoose = require("mongoose");
let cubeSchema = new mongoose.Schema({
   // _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 120
    },
    imageUrl: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 0,
        max: 6
    }
});
cubeSchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith("http");
}, "ImageUrl should be a link");

let Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
