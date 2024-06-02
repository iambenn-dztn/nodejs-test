import express from "express";
import ItemController from "./item.controller.js";

const router = express.Router();

// Define routes for Item
router.get("/:id", ItemController.findById);
router.get("/game/:gameId", ItemController.findItemsByGame);
router.post("/", ItemController.createItem);
router.put("/:id", ItemController.updateItem);
router.delete("/:id", ItemController.deleteItem);

export default router;
