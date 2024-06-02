import express from "express";
import TransactionController from "./transaction.controller.js";
import { checkRole } from "../../middlewares/checkRole.middleware.js";
import { Roles } from "../../constants/roles.js";

const router = express.Router();

// Define routes for Transaction
router.get(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  TransactionController.findById
);
router.get(
  "/user/:userId",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  TransactionController.findUserTransactions
);
router.post(
  "/",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  TransactionController.createTransaction
);
router.put(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF, Roles.USER]),
  TransactionController.updateTransaction
);
router.delete(
  "/:id",
  checkRole([Roles.ADMIN, Roles.STAFF]),
  TransactionController.deleteTransaction
);

export default router;
