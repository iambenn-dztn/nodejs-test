import express from "express";
import UserItemController from "./userItem.controller.js";
import { checkRole } from "../../middlewares/checkRole.middleware.js";
import { Roles } from "../../constants/roles.js";

const router = express.Router();

// Define routes for UserItem
router.get(
  "/user/:userId",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  UserItemController.findUserItems
);
router.post(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  UserItemController.createUserItem
);
router.delete(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  UserItemController.deleteUserItem
);

export default router;
