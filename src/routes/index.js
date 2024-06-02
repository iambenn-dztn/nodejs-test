import express from "express";
import userRouter from "../modules/users/user.routes.js";
import gameRouter from "../modules/games/game.routes.js";
import itemRouter from "../modules/items/item.routes.js";
import transactionRouter from "../modules/transactions/transaction.routes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/games", gameRouter);
router.use("/items", itemRouter);
router.use("/transactions", transactionRouter);

export default router;
