import Item from "./item.model.js";

class UserRepository {
  async findById(id) {
    return await Item.findByPk(id);
  }

  async findItemsByGame(gameId) {
    return await Item.findAll({ having: { gameId, deletedAt: null } });
  }

  async findFirst() {
    return await Item.findOne({ having: { deletedAt: null } });
  }

  async create(itemData) {
    return await Item.create(itemData);
  }

  async update(id, itemData) {
    const item = await Item.findByPk(id);
    if (item) {
      return await item.update(itemData);
    }

    return null;
  }

  async delete(id) {
    const item = await Item.findByPk(id);
    if (item) {
      await item.update({ deletedAt: new Date() });

      return true;
    }

    return false;
  }
}

export default new UserRepository();
