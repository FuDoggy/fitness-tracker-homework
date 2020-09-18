
const path = require("path");
const db = require("../models")

module.exports = function(app) {
app.get("/api/workouts", function(req, res){
    db.find({})
    .then(data => res.json(data))
})

app.post("api/workouts", function(req, res){
    db.create({})
    .then(data => res.json(data))
})


}