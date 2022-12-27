const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};
const getOneWorkouts = (workoutId) => {
  const workout = DB.workouts.find((workout1) => workout1.id === workoutId);
  if (!workout) {
    return;
  }
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};
const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdated = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdated === -1) {
    return;
  }
  const updateWorkout = {
    ...DB.workouts[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timezone: " UTC" }),
  };
  DB.workouts[indexForUpdated] = updateWorkout;

  saveToDatabase(DB);
  return updateWorkout;
};
const deleteOneWorkout = (workoutId) => {
  const indexForUpdated = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdated === -1) {
    return;
  }
  
  DB.workouts.splice(indexForUpdated,1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  getOneWorkouts,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
