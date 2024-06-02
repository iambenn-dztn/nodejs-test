import express from "express";
import userRouter from "../modules/users/user.routes.js";

const router = express.Router();

router.use("/users", userRouter);

export default router;
