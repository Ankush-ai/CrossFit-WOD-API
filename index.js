const express = require("express");
const bodyParser = require("body-parser");
const v1Router = require("./v1/Routes");
const v1workoutRouter = require("./v1/Routes/workoutRoutes");
const apicache = require("apicache");
const app = express();
const cache = apicache.middleware;
const { swaggerDocs: v1SwaggerDocs } = require("./v1/Routes/Swagger");


const PORT = process.env.PORT || 3000;

//for testing purpose 
app.get("/", (req, res) => {
    res.send("<h2>API is working </h2>");
});

app.use(cache("2 minutes"));
// Corrected middleware routes
app.use(bodyParser.json()); // to recieve json data in controllers under req.body
app.use("/api/v1", v1Router);
app.use("/api/v1/workouts", v1workoutRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    v1SwaggerDocs(app, PORT);
});
