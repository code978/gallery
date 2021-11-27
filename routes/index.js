const express = require('express');
const router = express.Router();
const UserSchmea = require('../Model/Schema')
const multer = require('multer')
const upload = multer({dest:'uploads/'});

router.get('/', async (req, res) => {
    const user = await UserSchmea.find();
    res.send(user);
})

router.post('/res',upload.single('image') ,async (req, res) => {
    try {
        const User = new UserSchmea({
            name:req.body.name,
            img:req.file.originalname
        })
        await User.save();
        res.send(User);
    } catch (error) {
        res.send(400);
    }
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