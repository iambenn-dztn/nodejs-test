import express from "express";
import userRouter from "../modules/users/user.routes.js";
import gameRouter from "../modules/games/game.routes.js";
import itemRouter from "../modules/items/item.routes.js";
import transactionRouter from "../modules/transactions/transaction.routes.js";
import userGameRouter from "../modules/userGames/userGame.routes.js";
import userItemRouter from "../modules/userItems/userItem.routes.js";
import authRouter from "../modules/auth/auth.routes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/games", gameRouter);
router.use("/items", itemRouter);
router.use("/transactions", transactionRouter);
router.use("/user-games", userGameRouter);
router.use("/user-items", userItemRouter);
router.use("/auth", authRouter);

export default router;
