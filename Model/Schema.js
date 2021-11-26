const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
    },
    img:{
        type:String
    }
})

module.exports = new mongoose.model('user',UserSchema);