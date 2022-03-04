const mongoose = require('mongoose');

const exercisesSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    hardness: {type: Number, required: true},
    description: {type: String, required: true},
    workout: { type: mongoose.Schema.Types.ObjectId,  ref: 'Workouts'}
});

const ExercisesModel = mongoose.model('Exercises', exercisesSchema);

module.exports = ExercisesModel;