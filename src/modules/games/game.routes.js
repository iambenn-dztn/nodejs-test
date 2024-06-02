import express from "express";
import GameController from "./game.controller.js";
import { checkRole } from "../../middlewares/checkRole.middleware.js";
import { Roles } from "../../constants/roles.js";

const router = express.Router();

// Define routes for Game
router.get(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  GameController.findById
);
router.get(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  GameController.findGames
);
router.post("/", checkRole([Roles.ADMIN]), GameController.createGame);
router.put("/:id", checkRole([Roles.ADMIN]), GameController.updateGame);
router.delete("/:id", checkRole([Roles.ADMIN]), GameController.deleteGame);

export default router;
