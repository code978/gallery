const express = require('express');
const router = express.Router();
const UserSchmea = require('../Model/Schema')
const upload = require('../config/upload')

router.get('/', async (req, res) => {
    const user = await UserSchmea.find();
    res.send(user);
})

router.post('/res', upload.single('image'), async (req, res) => {
    const User = await new UserSchmea({
        name: req.body.name,
        img: req.file.originalname
    })
    await User.save();
    res.send(User);
})

router.put('/res/:id', upload.single('image'), async (req, res) => {

    const { id } = req.params;
    const user = await UserSchmea.findByIdAndUpdate(id, {
        name: req.body.name,
        img: req.file.filename
    });
    res.send(user);

})

router.delete('/res/:id', async (req, res) => {
    const user_id = req.params.id;
    const user = await UserSchmea.findByIdAndDelete(user_id);
    res.send(user);
})

module.exports = router;