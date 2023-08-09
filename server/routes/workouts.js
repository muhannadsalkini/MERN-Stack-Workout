/* 1. create the router */
const express = require("express");
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
router.post("/", (req, res) => {
  res.json({ mssg: "post a new workout" });
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
