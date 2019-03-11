const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todos')
const connection = mongoose.connection

connection.once('open', () => {
    console.log(`connection established successfully`)
})