import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import TransactionRepository from "./transaction.repository.js";

class TransactionService {
  async findById(id) {
    return await TransactionRepository.findById(id);
  }

  async findUserTransactions(userId) {
    return await TransactionRepository.findUserTransactions(userId);
  }

  async createTransaction(transactionData) {
    return await TransactionRepository.create(transactionData);
  }

  async updateTransaction(id, transactionData) {
    const existingTransaction = await TransactionRepository.findFirst({
      where: { id, deletedAt: null },
    });
    if (!existingTransaction) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `Transaction not found with id: ${id}`
      );
    }

    const updatedTransaction = await TransactionRepository.update(
      id,
      transactionData
    );

    return updatedTransaction;
  }

  async deleteTransaction(id) {
    const result = await TransactionRepository.delete(id);
    if (!result) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `ErrorTransactionService: Transaction not found with id: ${id}`
      );
    }

    return result;
  }
}

export default new TransactionService();
