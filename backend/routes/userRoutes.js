const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { username, address, email, password, image } = req.body;
        const user = new User({ username, address, email, password, image });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
