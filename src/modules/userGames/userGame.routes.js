import express from "express";
import UserGameController from "./userGame.controller.js";
import { Roles } from "../../constants/roles.js";
import { checkRole } from "../../middlewares/checkRole.middleware.js";

const router = express.Router();

// Define routes for UserGame
router.get(
  "/game/:gameId",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  UserGameController.findGameUsers
);
router.post(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  UserGameController.createUserGame
);
router.delete(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  UserGameController.deleteUserGame
);

export default router;
