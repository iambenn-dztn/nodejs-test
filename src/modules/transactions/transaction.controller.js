import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import TransactionService from "./transaction.service.js";

class TransactionController {
  async findById(req, res, next) {
    try {
      const transaction = await TransactionService.findById(req.params.id);

      if (transaction) {
        res.status(httpStatusCodes.OK).json(transaction);
      } else {
        next(new ApiError(httpStatusCodes.NOT_FOUND, "Transaction not found"));
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async findUserTransactions(req, res, next) {
    try {
      const transactions = await TransactionService.findUserTransactions(
        req.params.userId
      );
      res.status(httpStatusCodes.OK).json(transactions);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async createTransaction(req, res, next) {
    try {
      const transaction = await TransactionService.createTransaction(req.body);
      res.status(httpStatusCodes.CREATED).json(transaction);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async updateTransaction(req, res, next) {
    try {
      const transaction = await TransactionService.updateTransaction(
        req.params.id,
        req.body
      );

      if (transaction) {
        res.status(httpStatusCodes.ACCEPTED).json(transaction);
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "Transaction not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async deleteTransaction(req, res, next) {
    try {
      const result = await TransactionService.deleteTransaction(req.params.id);

      if (result) {
        res.status(httpStatusCodes.NO_CONTENT).end();
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "Transaction not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new TransactionController();
