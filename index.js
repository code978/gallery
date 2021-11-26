const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const fileUpload = require('express-fileupload')
const bodyparser = require('body-parser');
const ConnectDB = require('./config/database')
app.use(express.json());

ConnectDB();

app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use('/', require('./routes/index'))


app.listen(port, () => {
    console.log(`you app is listen .`)
})