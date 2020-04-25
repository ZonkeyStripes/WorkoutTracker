const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 1234;
const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html_routes.js")(app);
require("./routes/api_routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true, useFindAndModify: false  });

app.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});

