const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 1234;
const app = express();

// const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});

require("./routes/html_routes.js")(app);