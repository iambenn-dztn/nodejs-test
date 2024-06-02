import Game from "./game.model.js";

class UserRepository {
  async findById(id) {
    return await Game.findByPk(id);
  }

  async findGames() {
    return await Game.findAll({ having: { deletedAt: null } });
  }

  async findFirst() {
    return await Game.findOne({ having: { deletedAt: null } });
  }

  async create(gameData) {
    return await Game.create(gameData);
  }

  async update(id, gameData) {
    const game = await Game.findByPk(id);
    if (game) {
      return await game.update(gameData);
    }

    return null;
  }

  async delete(id) {
    const game = await Game.findByPk(id);
    if (game) {
      await game.update({ deletedAt: new Date() });

      return true;
    }

    return false;
  }
}

export default new UserRepository();
