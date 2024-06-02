import express from "express";
import GameController from "./game.controller.js";

const router = express.Router();

// Define routes for Game
router.get("/:id", GameController.findById);
router.get("/", GameController.findGames);
router.post("/", GameController.createGame);
router.put("/:id", GameController.updateGame);
router.delete("/:id", GameController.deleteGame);

export default router;
