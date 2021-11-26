const moongose = require('moongoose')
const Schema = moongose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
    },
    img:{
        data:Buffer,
        type:String
    }
})

module.exports = new moongose.model('user',UserSchema);