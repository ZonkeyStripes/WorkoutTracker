const mongoose = require("mongoose");
const Schema = mongoose.schema;

const workoutSchema =  mongoose.Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;