const moongoose = require('moongoose')


const db = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`


const ConnectDB = async ()=>{
    await moongoose.connect(db)
    console.log(`database connected.`);
}

module.exports = ConnectDB;