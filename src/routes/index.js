import express from "express";
import userRouter from "../modules/users/user.routes.js";
import gameRouter from "../modules/games/game.routes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/games", gameRouter);

export default router;
