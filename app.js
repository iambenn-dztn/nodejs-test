import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import db from "./src/configs/sequelize.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";
import router from "./src/routes/index.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(limiter);

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
