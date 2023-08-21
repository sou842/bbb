const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    title: String,
    body: String,
    device: String,
    no_of_comments: Number,
}, {
    versionKey: false
})

const userModel = mongoose.model('posts', userSchema)


module.exports = { userModel }