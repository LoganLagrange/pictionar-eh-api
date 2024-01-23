const express = require("express");
const router = express.Router();
const { User } = require("../models"); //Imports user model
const bcrypt = require("bcrypt");

// GET all users
router.get("/", (req, res) => {
    User.findAll().then(dbUsers => {
        res.json(dbUsers);
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

// GET one user
router.get('/:id', (req, res) => {
    User.findByPk(req.params.id, {
    }).then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

// CREATE new user
router.post('/', (req, res) => {
    console.log(req.body);
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(newUser => {
        req.session.user = {
            id: dbUser.id,
            username: dbUser.id
        }
        res.json(newUser);
    }).catch(err => {
        console.log("error creating user:", err)
        res.status(500).json({msg:`Server error!`,err});
    })
})

// LOGOUT route
router.delete('/logout', (req, res) => {
    if(req.session) {
        req.session.destroy(err => {
            if(!err) {
                res.status(200).json({msg: "Logged out!"})
            } else {
                res.status(500).json({msg: "Server error!", err})
            }
        })
    }
})

// DELETE user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id:req.params.id
        }
    }).then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        res.status(500).json({msg:`Server error!`,err});
    })
})

// UPDATE user route
router.put('/:id', (req, res) => {
    User.findByPk(req.params.id)
    .then(dbUser => {
        if(!dbUser) {
            return res.status(404).json({msg: "User not found"})
        }

        if (req.body.username) {
            dbUser.username = req.body.username;
        }
        if (req.body.email) {
            dbUser.email = req.body.email;
        }
        if (req.body.password) {
            dbUser.password = req.body.password;
        }
        
        return dbUser.save();
    }).then(updatedUser => {
        res.json(updatedUser);
    }).catch(err => {
        res.status(500).json({msg:`Server error!`,err});
    })
})

// Add profile pic route
router.put('/pfp/:id', (req, res) => {
    const pfpUrl = {profile_picture: req.body.profilePicture}
    User.update(pfpUrl, {
        where: {
            id: req.params.id
        }
    }).then(updatedUser => {
        if(!updatedUser) {
            res.json({msg:"No such user to update."})
        } else {
            res.json({msg:"User succesfully updated!"})
        }
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

// login route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUser => {
        if(!dbUser) {
            res.status(401).json({msg: "Incorrect user credentials"});
        } else if (!dbUser.PasswordAuth(req.body.password)) {
            res.status(401).json({msg: "Incorrect user credentials"});
        } else {
            req.session.user = {
                id: dbUser.id,
                username: dbUser.id
            }
            res.json({userId: req.session.user.id, username: req.session.user.username})
        }
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})



module.exports = router;
