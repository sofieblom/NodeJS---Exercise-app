const express = require('express');
const ExercisesModel = require('../models/ExercisesModel');

const router = express.Router();

router.get('/', async(req,res) => {
    const exercises = await ExercisesModel.find().lean();
    res.render('exercises/exercises-list', {exercises})
})

// router.get('/create', async(req,res)=> {
//     const { title, difficulty, description } = req.body;
// })

router.post('/create', async(req,res) => {
    try {
        const newExercise = new ExercisesModel(req.body);
        await newExercise.save();
       
        res.redirect('/');
    }
    catch{
        console.log('ERROR');
    }
});




module.exports = router;