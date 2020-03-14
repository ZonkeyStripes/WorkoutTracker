let mongoose = require("mongoose");
let Schema = mongoose.schema;

let Workout = new Schema ({
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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;