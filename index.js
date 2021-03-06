const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
// const fileUpload = require('express-fileupload')
const path = require('path')
const bodyparser = require('body-parser');
const ConnectDB = require('./config/database')
app.use(express.json());
app.use(express.static('public'))
app.use(cors);
ConnectDB();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use('/', require('./routes/index'))


app.listen(port, () => {
    console.log(`you app is listen .`)
})