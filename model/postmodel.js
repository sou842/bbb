const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String,
    age: Number,
    city: String,
    is_married: Boolean
},{
    versionKey: false
})

const postModel = mongoose.model('user',postSchema)


module.exports = {postModel}