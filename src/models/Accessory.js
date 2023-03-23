let mongoose = require("mongoose");
let accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 120
    },
    imageUrl: {
        type: String,
        required: true,
    },

});
accessorySchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http')
});
let Accessory = mongoose.model('Accessory', accessorySchema);
module.exports= Accessory;