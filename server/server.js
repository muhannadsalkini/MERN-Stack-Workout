require("dotenv").config(); // env folder to get hidden variables
const express = require("express");

const mogoose = require("mongoose");

// import the routes from routes folder
const workoutRoutes = require("./routes/workouts");

/* Set express app */
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// using the routes at the app. this attach all the routes to the app
app.use("/api/workouts", workoutRoutes);

/* Connect to db */
mogoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    /* Listen for requests once connected to database*/
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
