const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todo_list')
const connection = mongoose.connection

connection.once('open', () => {
    console.log(`connection established successfully`)
})