const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "email cannot be empty"],
        unique: [true, "email already registred"]
    },
    age: {
        type: String,
        required: [true, "age cannot be empty"]
    },
    password: {
        type: String,
        required: [true, "password cannot be empty"]
    },
    cour: {
            nameofcour :  { type : String},
            level : { type : String}
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    level: {
        type: Number
    }
})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);