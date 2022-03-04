const express = require('express');
const ExercisesModel = require('../models/ExercisesModel');

const router = express.Router();

router.get('/', async(req,res) => {
    const exercises = await ExercisesModel.find().lean();
    res.render('exercises/exercises-list', {exercises})
})

router.post('/create', async(req,res) => {
    // try {
        const newExercise = new ExercisesModel(req.body);
        await newExercise.save();
       
        res.redirect('/exercises');
    // }
    // catch{
    //     console.log('ERROR');
    // }
});

router.get('/:id/edit', async(req,res) => {
    const exercise = await ExercisesModel.findById(req.params.id);

    res.render('exercises/exercises-edit', exercise)
})


router.post('/:id/select', async(req,res) => {
    const exercise = await ExercisesModel.findById(req.params.id).populate('workout');

    res.redirect('/')
})


router.post('/:id/edit', async(req,res) => {
    const exercise = await ExercisesModel.findById(req.params.id);

    title = req.body.title;
    hardness = req.body.hardness;
    description = req.body.description;
    
    await exercise.save()

    res.redirect('/exercises')
})

router.post('/:id/delete', async(req,res) => {
    const exercise = await ExercisesModel.findByIdAndDelete(req.params.id)

    res.redirect('/exercises')
})




module.exports = router;