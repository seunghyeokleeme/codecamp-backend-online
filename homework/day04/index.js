import express from "express";
import db from "./db/Users.js";
import coffees from "./db/Coffees.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import options from "./swagger/config.js";

const app = express();
const PORT = 3000;
const swaggerSpec = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/users", (req, res) => {
  res.send(db);
});
app.get("/starbucks", (req, res) => {
  res.send(coffees);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
