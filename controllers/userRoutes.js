const express = require("express");
const router = express.Router();
const { User } = require("../models"); //Imports user model
const bcrypt = require("bcrypt");

router.use(bodyParser.json());
let Users = [];

//GET: Get all users 
app.get('/users', (req, res) => {
    res.json(Users);
  });

//GET: Get one user by ID, include drawings
app.get('/users/:id', (req, res) => {
    const user_id = req.params.id;
    //logic to retreive user and drawings by ID
    const user = user.find((user) => user.id === user_id);
    if(!user) {
        return res.status(404).json({ error: 'User not found'});
    }
    const drawings = user.drawings || [];
    res.json({user, drawings});
});

// POST: Signup route, creates a new user
app.post('/signup', (req, res) => {
    const newUser = req.body;
    //Required user fields
    if (!newUser.user_name || !newUser.user_email || !newUser.user_password) {
        return res.status(400).json({error:'Username, email, and password are required'});
    } 

    const existingUser = user.find(
        (user) => user.user_name === newUser.user_name || user.user_email === newUser.user_email
    );

    if (existingUser) {
        return res.status(400).json({error: 'Username or email is already in use.'});
    }
    
});

// POST: Login route
app.post('/login', (req, res) => {

});

// DELETE: Logout route
app.delete('/logout', (req, res) => {

});

// DELETE: Delete account route
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

});

// PUT: Adding profile picture
app.put('/users/:id/profile-picture', (req, res) => {
    const userId = req.params.id;
    const profilePictureUrl = req.body.profilePictureUrl;

});

module.exports = router;
