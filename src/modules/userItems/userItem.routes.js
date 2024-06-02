import express from "express";
import UserItemController from "./userItem.controller.js";

const router = express.Router();

// Define routes for UserItem
router.get("/user/:userId", UserItemController.findUserItems);
router.post("/", UserItemController.createUserItem);
router.delete("/", UserItemController.deleteUserItem);

export default router;
