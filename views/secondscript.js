
let apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f"
exerciseUrl = "https://api.api-ninjas.com/v1/exercises?difficulty=beginner&muscle="
pushButton = document.getElementById("pushButton");
pullButton = document.getElementById("pullButton");
legsButton = document.getElementById("legsButton");
workoutButton = document.getElementById("workout-submit");
workoutText = document.getElementById("workoutText");
workoutTable = document.getElementById("workout-table");
workoutButtonDelete = document.getElementById("workout-delete");
//menuMainButton = document.getElementById("menu-main");

workoutButton.addEventListener("click", addWorkout);
workoutButtonDelete.addEventListener("click", deleteWorkout);
//menuMainButton.addEventListener("click", async () => {
//    console.log("called")
//    await getRequest("http://localhost:3000/")
//})

showWorkouts();

async function postRequest(url, jsonData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data
}

async function getRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data
}

async function showWorkouts(){
    const url = "http://localhost:3000/all_workouts";
    const myWorkouts = await getRequest(url);
    myWorkouts.forEach(workout => {
        const row = document.createElement("tr");
        const workoutName = document.createElement("td");
        const workoutSets = document.createElement("td");
        const workoutReps = document.createElement("td");
        const workoutMuscle = document.createElement("td");

        workoutName.textContent = workout.workout_name;
        workoutSets.textContent = workout.sets;
        workoutReps.textContent = workout.reps;
        workoutMuscle.textContent = workout.muscle_group;

        row.appendChild(workoutName)
        row.appendChild(workoutSets)
        row.appendChild(workoutReps)
        row.appendChild(workoutMuscle)

        workoutTable.appendChild(row)
    })
}

async function addWorkout(){
    newWorkoutName = document.getElementById("workout-name");
    newWorkoutSets = document.getElementById("workout-sets");
    newWorkoutReps = document.getElementById("workout-reps");
    newWorkoutMuscle = document.getElementById("workout-muscle");
    const newWorkout = {muscle_group: newWorkoutMuscle.value,
                        workout_name: newWorkoutName.value,
                        sets: newWorkoutSets.value,
                        reps: newWorkoutReps.value};

    const url = "http://localhost:3000/new_workout";
    const createdWorkout = postRequest(url, newWorkout);
    window.location.reload();
};

async function deleteWorkout(){
    if (confirm("Are you sure you want to delete all your workouts?")){
        let options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        }
        const url = "http://localhost:3000/delete_all_workouts";
        await fetch(url, options);
        window.location.reload();
    }
}

let muscle = "";
let options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
    contentType: 'application/json'
}
async function apiCall(url) {
    let response = await fetch(url, options)
    let data = await response.json()
    return data
}

pushButton.addEventListener("click", function () {
    muscle = "chest"
    generateWorkout()
});

pullButton.addEventListener("click", function () {
    muscle = "lower_back"
    generateWorkout()
});

legsButton.addEventListener("click", function () {
    muscle = "glutes"
    generateWorkout()
});



async function generateWorkout() {
    let data = await apiCall(exerciseUrl+muscle);
    let exercises = []
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let i = getRandomInt(0, data.length)
    exercises.push(data[i].name + ": " + data[i].instructions)

    workoutText.innerHTML = "";
    document.getElementById("workout-text").style.backgroundColor = "#1d3557";
    switch(muscle) {
        case "chest":
            workoutText.innerHTML = exercises;
            break;
        case "lower_back":
            workoutText.innerHTML = exercises;
            break;
        case "glutes":
            workoutText.innerHTML = exercises;
      }


}