const express = require('express');
const v1WorkRouter = require("./v1/routers/workoutRoutes")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/v1/workouts",v1WorkRouter);


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})