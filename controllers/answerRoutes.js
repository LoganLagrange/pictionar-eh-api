const express = require("express");
const router = express.Router();
const { Answer } = require("../models"); //Imports answer model

// GET all answers
router.get(`/`,(req,res) => {
    Answer.findAll().then(dbAnswers => {
        res.json(dbAnswers);
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

// GET one answer by id
router.get(`/:id`,(req,res) => {
    Answer.findByPk(req.params.id,{
        // include:[User]
    }).then(dbAnswer => {
       if(!dbAnswer) {
        return res.status(404).json(`No answer exists!`)
       }
       res.json(dbAnswer)
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
        console.log(err);
    })
})

// CREATE new answer
router.post(`/`,(req,res) => {
    console.log(req.body)
    Answer.create({
        filename:req.body.filename,
        userId: req.body.userId,
        answerId: req.body.answerId
    }).then(dbAnswer => {
        res.json(dbAnswer)
    }).catch(err => {
        res.status(500).json({msg:`Server error!`,err});
    })
});

// DELETE answer
router.delete(`/:id`, (req,res) => {
    Answer.destroy({
        where: {
            id:req.params.id
        }
    }).then(dbAnswer => {
        res.json(dbAnswer)
    }).catch(err => {
        res.status(500).json({msg:`Server error!`,err})
    })
});

// GET random answer
router.get('/random', (req, res) => {
    Answer.findAll().then(dbAnswers => {
        res.json(dbAnswers[Math.floor(Math.random() * dbAnswers.length)])
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

// UPDATE answer
router.put('/:id', (req, res)  => {
    updatedData = {
        word: req.body.word
    }
    Answer.update(updatedData, {
        where: {id: req.params.id}
    }).then(updatedAnswer => {
        if(!updatedAnswer) {
            res.json({msg:"No such answer to update."})
        } else {
            res.json({msg:"Answer succesfully updated!"})
        }
    }).catch(err => {
        res.status(500).json({msg:`Server Error!`, err});
    })
})

module.exports = router;