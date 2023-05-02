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

app.get('/workouts', (req, res) => {
    res.sendFile(__dirname + '/views/secondpage.html');
})

app.post('/new_workout', async (req, res) => {
   console.log(req.body)
   const workout = await Workout.create({muscle_group: req.body.muscle_group,
                        workout_name: req.body.workout_name, sets: req.body.sets, reps: req.body.reps})
                        .then(() => console.log("New Workout Created"))
   res.send(workout)
})

app.get('/all_workouts', async (req, res) => {
    const myWorkouts = await Workout.find();
    res.send(myWorkouts);
})

app.delete('/delete_all_workouts', async(req, res) => {
    await Workout.deleteMany({}).then(() => console.log("Deleted All"))
    .catch((err) => console.log(err))
    res.end()
})

app.use(express.static('views'))
app.listen(port, () => {
    console.log(`Exercise app listening on port ${port}`)
})