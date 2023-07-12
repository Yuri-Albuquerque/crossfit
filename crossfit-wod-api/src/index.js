const express = require("express"); 

// // *** COMMENT ***
// const v1Router = require("./v1/routes");

// *** ADD ***
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
// app.get("/", (req, res) => { 
//     res.send("<h2>The WOD register is Working!</h2>"); 
// }); 

// *** COMMENT ***
// app.use("/api/v1", v1Router);
// *** ADD ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});