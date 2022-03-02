const mongoose = require('mongoose');

const exercisesSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    hardness: {type: Number, required: true},
    description: {type: String, required: true}
});

const ExercisesModel = mongoose.model('Exercises', exercisesSchema);

module.exports = ExercisesModel;