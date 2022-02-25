const mongoose = require('mongoose');

const exercisesSchema = new mongoose.Schema({
    title: {string: String}, 
    hardness: {number: Number},
    description: {string:String}
});

const ExercisesModel = mongoose.model('Exercises', exercisesSchema);

module.exports = ExercisesModel;