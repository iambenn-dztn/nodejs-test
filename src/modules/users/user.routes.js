import express from "express";
import UserController from "./user.controller.js";
import { checkRole } from "../../middlewares/index.js";
import { Roles } from "../../constants/roles.js";

const router = express.Router();

// Define routes for User
router.get(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  UserController.findById
);
router.get(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  UserController.findUsers
);
router.post(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  UserController.createUser
);
router.put(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  UserController.updateUser
);
router.delete(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  UserController.deleteUser
);

export default router;
