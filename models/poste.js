const mongoose = require('mongoose');

const posteSchema = new mongoose.Schema({
    name : String, 

    title: {
        type: String
    }

})


module.exports = mongoose.model('Poste', posteSchema);