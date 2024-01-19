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



module.exports = router;