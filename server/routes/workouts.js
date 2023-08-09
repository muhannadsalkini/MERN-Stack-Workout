/* 1. create the router */
const express = require("express");

// import controlers
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// use router abj as the app in server.js
const router = express.Router();

/* 2. Set the routes */

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// PSOT a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", deleteWorkout);

// Update a new workout
router.patch("/:id", updateWorkout);

/* 3. Export the router */
module.exports = router;
