import express from "express";
import UserGameController from "./userGame.controller.js";

const router = express.Router();

// Define routes for UserGame
router.get("/game/:gameId", UserGameController.findGameUsers);
router.post("/", UserGameController.createUserGame);
router.delete("/", UserGameController.deleteUserGame);

export default router;
