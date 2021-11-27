const mongoose = require('mongoose')
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