const Workout = require("../models/workout");

module.exports = function(app) {

    app.get("/api/workouts", function (req, res) {
        console.log("Work damnit");
        Workout.find({}, function (err, data) {
            if(err) return handleError(err);
        });

    });

    app.post("/api/workouts", function (req, res) {

    });

    app.put("/api/workouts", function (req, res) {
        res.json({});
    })
}