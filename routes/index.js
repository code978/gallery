const express = require('express');
const router = express.Router();
const UserSchmea = require('../Model/Schema')

router.get('/', async (req, res) => {
    const user = await UserSchmea.find();
    res.send(user);
})

router.post('/res', async (req, res) => {

    const image = req.files.img;
    const encode_img = image.toString('base64');
    // const final_img = {
    //     contentType: req.file.mimetype,
    //     image: new Buffer(encode_img, 'base64')
    // };

    let user = new UserSchmea({
        name: req.body.name,
        img: encode_img
    });

    await user.save();
    res.send(user);
})

router.put('/res/:id', async (req, res) => {
    const { id } = req.params;
    const user = await UserSchmea.findByIdAndUpdate(id, req.body);
    res.send(req.body);
})

router.delete('/res/:id', async (req, res) => {
    const user_id = req.params.id;
    const user = await UserSchmea.findByIdAndDelete(user_id);
    res.send(user);
})

module.exports = router;