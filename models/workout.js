const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema =  new Schema({

            type: {
                type: String,
                trim: true
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
});

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        exerciseSchema
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;