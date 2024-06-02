import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import db from "./src/configs/sequelize.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";
import protectedRouter from "./src/routes/protected-routes.js";
import unprotectedRouter from "./src/routes/unprotected-routes.js";
import dotenv from "dotenv";
import { checkJwt } from "./src/middlewares/checkJwt.middleware.js";

dotenv.config();

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

// Unprotected routes
app.use("/api", unprotectedRouter);

// Protected routes
app.use(checkJwt);
app.use("/api", protectedRouter);

app.use(errorHandler);

// Sync database
db.sequelize
  .sync()
  .then(() => {
    console.log("Connect db successfully.");
  })
  .catch((err) => {
    console.log("Failed to connect db: " + err.message);
  });

export default app;
