import Transaction from "./transaction.model.js";

class UserRepository {
  async findById(id) {
    return await Transaction.findByPk(id);
  }

  async findUserTransactions(userId) {
    return await Transaction.findAll({ having: { userId, deletedAt: null } });
  }

  async findFirst() {
    return await Transaction.findOne({ having: { deletedAt: null } });
  }

  async create(transactionData) {
    return await Transaction.create(transactionData);
  }

  async update(id, transactionData) {
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      return await transaction.update(transactionData);
    }

    return null;
  }

  async delete(id) {
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      await transaction.update({ deletedAt: new Date() });

      return true;
    }

    return false;
  }
}

export default new UserRepository();
