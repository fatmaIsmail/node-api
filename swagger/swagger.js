
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ToDo list API",
            version: "1.0.0",
            description: "API Documentation for ToDo list"
        },
        servers: [
            { url: "http://localhost:3000" }
        ],
    },
    apis: ["route.js"] 
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerDocs };



