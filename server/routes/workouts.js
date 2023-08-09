/* 1. create the router */
const express = require("express");

// import controlers
const {
  createWorkout,
  getWorkouts,
  getWorkout,
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
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a new workout" });
});

// Update a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a new workout" });
});

/* 3. Export the router */
module.exports = router;
