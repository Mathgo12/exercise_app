const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const workoutSchema = new mongoose.Schema({
    muscle_group: String,
    workout_name: String,
    sets: Number,
    reps: Number
})
const User = mongoose.model("User", userSchema)
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = {User, Workout}

