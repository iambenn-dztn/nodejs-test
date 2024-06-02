import express from "express";
import ItemController from "./item.controller.js";
import { checkRole } from "../../middlewares/checkRole.middleware.js";
import { Roles } from "../../constants/roles.js";

const router = express.Router();

// Define routes for Item
router.get(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  ItemController.findById
);
router.get(
  "/game/:gameId",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  ItemController.findItemsByGame
);
router.post(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  ItemController.createItem
);
router.put(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  ItemController.updateItem
);
router.delete(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  ItemController.deleteItem
);

export default router;
