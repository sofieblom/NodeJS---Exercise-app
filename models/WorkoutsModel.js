const mongoose = require('mongoose');

const workoutsSchema = new mongoose.Schema({
    // exerciseId: {string:String}, 
    date: {type: Number, default: Date.now}
})

const ExercisesModel = mongoose.model('Workouts', workoutsSchema);

module.exports = ExercisesModel;