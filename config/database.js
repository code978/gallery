const mongoose = require('mongoose')
// var url = "mongodb://localhost:27017/mydb";
const url = `mongodb+srv://test:test@cluster0.snafy.mongodb.net/gallery?retryWrites=true&w=majority`

const ConnectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log(`database connected.`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB;