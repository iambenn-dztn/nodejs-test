import UserItem from "./userItem.model.js";

class UserRepository {
  async findUserItems(userId) {
    return await UserItem.findAll({
      where: { userId },
    });
  }

  async create(userItemData) {
    return await UserItem.create(userItemData);
  }

  async delete(userId, itemId) {
    const userItem = await UserItem.findOne({ having: { userId, itemId } });
    if (userItem) {
      await userItem.destroy();

      return true;
    }

    return false;
  }
}

export default new UserRepository();
