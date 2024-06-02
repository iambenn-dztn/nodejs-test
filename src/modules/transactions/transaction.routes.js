import express from "express";
import TransactionController from "./transaction.controller.js";

const router = express.Router();

// Define routes for Transaction
router.get("/:id", TransactionController.findById);
router.get("/user/:userId", TransactionController.findUserTransactions);
router.post("/", TransactionController.createTransaction);
router.put("/:id", TransactionController.updateTransaction);
router.delete("/:id", TransactionController.deleteTransaction);

export default router;
