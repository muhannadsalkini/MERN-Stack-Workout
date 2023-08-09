/* 1. create the router */
const express = require("express");

// import the model
const Workout = require("../models/workoutModel");

// use router abj as the app in server.js
const router = express.Router();

/* 2. Set the routes */

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "get a single workout" });
});

// PSOT a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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
