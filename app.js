import express from "express";
import bodyParser from "body-parser";
import db from "./src/configs/sequelize.js";
import router from "./src/routes/index.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

app.use(errorHandler);

// Sync database
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

export default app;
