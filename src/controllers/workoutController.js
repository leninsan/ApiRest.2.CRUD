const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "ok", data: allWorkouts });
};
const getOneworkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  const workout = workoutService.getOneworkout(workoutId);
  res.send({ status: "OK", data: workout });
};
const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equiment: body.equiment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};
const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }
  const updateOneWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({ status: "OK", data: updateOneWorkout });
};
const deleteOneWorkout = (req, res) => {
  
  const {
    params: { workoutId },
  } = req;
  const deletedWorkout = workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({status: "OK"});
};
module.exports = {
  getAllWorkouts,
  getOneworkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
