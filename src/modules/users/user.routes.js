import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", UserController.findOne);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;