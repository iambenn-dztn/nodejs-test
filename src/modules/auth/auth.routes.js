import express from "express";
import AuthController from "./auth.controller.js";

const router = express.Router();

// Define routes for Auth
router.post("/signup", AuthController.signUp);
router.post("/login", AuthController.login);

export default router;
