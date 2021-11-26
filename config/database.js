const moongoose = require('moongoose')


const db = `mongodb://localhost:27017/gallery?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`


const ConnectDB = async () => {
    await moongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }).
        catch((e)=>{console.log(error)})
    console.log(`database connected.`);
}

module.exports = ConnectDB;