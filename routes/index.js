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
    let MedicalFileUrl;
    
    const { body } = await got.post("https://api.imgur.com/3/image", {
      headers: {
        Authorization: "Client-ID" + " " + process.env.IMGUR_CLIENT_ID,
      },
      json: {
        image: imageAsBase64,
      },
      responseType: "json",
    });
    MedicalFileUrl = body.data.link;


    const user = new UserSchmea({
        name:req.body.name,
        img:MedicalFileUrl
    })
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