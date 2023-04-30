const express = require('express')
const mongoose = require('mongoose')
const {User, Workout} = require('./exercise_db')
const app = express();
const port = 3000;

app.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://sur123app:suryadb@cluster0.pbscaew.mongodb.net/test");
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/structure.html');
})

app.post('/new_workout', (req, res) => {
   console.log(req.body)
   const workout = Workout.create({muscle_group: req.body.muscle_group,
                        workout_name: req.body.workout_name, sets: req.body.sets, reps: req.body.reps})
                        .then(() => console.log("New Workout Created"))
   res.send(workout)
})

app.use(express.static('views'))
app.listen(port, () => {
    console.log(`Exercise app listening on port ${port}`)
})