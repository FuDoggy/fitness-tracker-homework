
const path = require("path");
const db = require("../models")

module.exports = function(app) {
app.get("/api/workouts", function(req, res){
    db.find({})
    .then(data => res.json(data))
})

app.post("/api/workouts", function(req, res){
    db.create({})
    .then(data => res.json(data))
})

app.put("/api/workouts/:id", function(req, res){
    console.log(req.body)
    db.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(result => {
        res.json(result)
    })
})
app.get("/api/workouts/range", function(req, res) {
    db.find({})
    .then(data => res.json(data))
})

}