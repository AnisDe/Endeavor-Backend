const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    
    correct_answer :  {
        type: String
    },
    option_1: {
        type: String
    },
    option_2: {
        type: String
    },
    option_3: {
        type: String
    },
    option_4: {
        type: String
    },
    question: {
        type: String
    },
    nameofcour :  {
        type: String
    },
    level :  {
        type: String
    }

})


module.exports = mongoose.model('Questions', questionsSchema);