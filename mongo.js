const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern_app')

const mongoSchema = mongoose.Schema

let userSchema = {
    "userEmail": String,
    "userPassword": String,
}

module.exports = mongoose.model('users', userSchema)