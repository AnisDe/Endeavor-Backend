const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    ownedGames: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions'
    }],

})


module.exports = mongoose.model('data', dataSchema);