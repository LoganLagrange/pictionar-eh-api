const express = require("express");
const router = express.Router();
const { Drawing } = require("../models"); //Imports user model

// GET all drawings
router.get(`/`,(req,res) => {
    Drawing.findAll().then(dbDrawings => {
        res.json(dbDrawings);
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

// GET all drawings for given user
router.get(`/inconvo/:id`, (req,res) => {
    Drawing.findAll({
        where: {
            userId: req.params.userId
        },
        include:[{
            model: User,
            attributes: [`username`],
        }]
    }).then(dbDrawing => {
        res.json({dbDrawing,userId});
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})



module.exports = router;