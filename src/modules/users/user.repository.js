import User from "./user.model.js";

class UserRepository {
  async findById(id) {
    return await User.findByPk(id);
  }

  async findFirst() {
    return await User.findOne({ having: { deletedAt: null }, limit: 1 });
  }

  async create(userData) {
    return await User.create(userData);
  }

  async update(id, userData) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(userData);
    }
    return null;
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.update({ deletedAt: new Date() });

      return true;
    }

    return false;
  }
}

export default new UserRepository();
