const express = require("express");
const router = express.Router();
const { User } = require("../models"); //Imports user model
const bcrypt = require("bcrypt");

// router.use(bodyParser.json());
let Users = [];

//GET: Get all users 
router.get('/users', (req, res) => {
    res.json(Users);
  });

//GET: Get one user by ID, include drawings
router.get('/users/:id', (req, res) => {
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
router.post('/signup', (req, res) => {
    const newUser = req.body;
    //Required user fields
    if (!newUser.username || !newUser.email || !newUser.password) {
        return res.status(400).json({error:'Username, email, and password are required'});
    } 

    const existingUser = user.find(
        (user) => user.username === newUser.username || user.email === newUser.email
    );

    if (existingUser) {
        return res.status(400).json({error: 'Username or email is already in use.'});
    }
    
});

// POST: Login route
router.post('/login', async(req, res) => {
    const {username, password} = req.body;

    //Validate required fields
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required'});
    }

    //Find user by username
    const user = user.find((user) => user.username == username);

    if(!user) {
        return res.status(401).json({ error: 'Invalid username or password'});
    }

    try {
        // Compare provided password with hashed
        const passwordMatch = user.PasswordAuth(password);

        if (passwordMatch) {
            res.json({ message: 'Login successful' });
        } else {
            // Incorrect password
            res.status(401).json({ error: 'Invalid username or password' });
            }
        } catch (error) {
            // Handle any errors that might occur during password comparison
            console.error('Error comparing passwords:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    });

// DELETE: Logout route
router.delete('/logout', (req, res) => {

});

// DELETE: Delete account route
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

});

// PUT: Adding profile picture
router.put('/users/:id/profile-picture', (req, res) => {
    const userId = req.params.id;
    const profilePictureUrl = req.body.profilePictureUrl;

});

module.exports = router;
