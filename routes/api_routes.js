// const Workout = require("../models/workout");
const db = require("../models")

module.exports = function(app) {

    app.get("/api/workouts", function (req, res) {
        console.log("Work damnit");
        db.Workout.find({}, function (err, data) {
            console.log("in the workoutFind", data)
            if(err) return handleError(err);
            return res.json(data);
        }); 

    });
    // for adding exercise
    app.post("/api/workouts", function (req, res) {
        db.Workout.create(req.body, function (err, data) {
            if (err) return handleError(err);
            console.log("adding workout to db?")
            return res.json(data);
        })
    });

    app.put("/api/workouts/:id", function (req, res) {

        // console.log(req)
        const filter = {_id: req.params.id}

        let newExercise = req.body;

        db.Workout.findOneAndUpdate(filter, { $push: { exercises: newExercise }})
        .then(data => {
            console.log(req.body);
            console.log("Data goes here:");
            console.log(data);
            res.json(data);
        });
    });

    app.get("/api/workouts/range", function (req, res) {
       let date = new Date();

       let pastDate = date.getDate() - 7;
        date.setDate(pastDate);
        
        console.log(date);

        db.Workout.find({"day" : {"$gte": date}}, function (err, data) {
            console.log("in the workout range", data)
            if(err) return handleError(err);
            return res.json(data);
        }); 
    });
}