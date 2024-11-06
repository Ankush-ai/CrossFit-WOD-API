const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Basic Meta Information about API

const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Crossfit WOD API", version: "1.0.0" },
    },
    apis: ["C:\Users\Hp\Desktop\Node -Express-API\v1\Routes\workoutRoutes.js", "C:\Users\Hp\Desktop\Node -Express-API\Database\workout.js"],

};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
};

module.exports = { swaggerDocs };