/* 1. Require mongose */
// Mongo db aloen i schemaless. So we use mongoose for schema.
// Scema define a structure of a document inside a database.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* 2. Set the schema */
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // create - update dates
);

/* 3. Set the module */
module.exports = mongoose.model("Workout", workoutSchema);
