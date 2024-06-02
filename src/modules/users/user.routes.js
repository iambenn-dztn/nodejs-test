import express from "express";
import UserController from "./user.controller.js";

const router = express.Router();

// Define routes for User
router.get("/:id", UserController.findById);
router.get("/", UserController.findUsers);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
