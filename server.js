const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("app is listening on" + PORT)
})

require("./routes/htmlRoutes")(app)
require("./routes/apiRoutes")(app)