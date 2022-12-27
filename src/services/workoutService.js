const Workout = require("../database/workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
const getOneworkout = (workoutId) => {
  const workout = Workout.getOneWorkouts(workoutId);
  return workout;
};
const createNewWorkout = (newWorkout)=>{
    const workoutToInsert = {
        id:uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US",{timezone:"UTC"}),
        updateAt: new Date().toLocaleString("en-US",{timezone:"UTC"})
    }
    const createNewWorkout = Workout.createNewWorkout(workoutToInsert);
    return createNewWorkout;
}
const updateOneWorkout = (workoutId, changes)=>{
    const updateWorkout = Workout.updateOneWorkout(workoutId,changes); 
    return updateWorkout;
}
const deleteOneWorkout=(workoutId)=>{
    const workoutRest = Workout.deleteOneWorkout(workoutId);
}
module.exports = {
  getAllWorkouts,
  getOneworkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
