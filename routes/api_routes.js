const Workout = require("../models/workout");

module.exports = function(app) {

    app.get("/api/workouts", function (req, res) {
        console.log("Work damnit");
    });
}