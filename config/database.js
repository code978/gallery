const mongoose = require('mongoose')
var url = "mongodb://localhost:27017/mydb";

const ConnectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log(`database connected.`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB;