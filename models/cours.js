const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    url: String,
    filename: String
});

const courSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        //required: [true, "description  cannot be empty"]
    },
    images: String,
    nbLevel: {
        type: String,
        //required: [true, "number of levels cannot be empty"]
    },
    categorie: {
        type: String,
        //required: [true, "number of levels cannot be empty"]
    },

})

module.exports = mongoose.model('Cour', courSchema);