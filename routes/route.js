const User = require('../models/User');
const express = require('express');

const router = express.Router();

// GET: Return all users

router.get('/home', (req, res) => {
    res.send('Hello World!')
})

router.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        // res.send("hello world")
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//POST: Add an new user to the database
router.post('/user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//PUT: Edit a user by ID
router.put('/user/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        if (!updatedUser) {
            return res.status(404).json({message: "user not found"});
        }
        res.json(updatedUser);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//DELETE: Remove a User by ID
router.delete('/user/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});

module.exports = router;