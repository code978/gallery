const moongoose = require('moongoose')

const ConnectDB = async () => {
    try {
        await moongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
        console.log(`database connected.`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB;