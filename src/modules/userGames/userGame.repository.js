import UserGame from "./userGame.model.js";
import User from "../users/user.model.js";

class UserRepository {
  async findGameUsers(gameId) {
    return await UserGame.findAll({
      where: { gameId },
      include: {
        model: User,
        attributes: ["id", "name", "email"],
      },
    });
  }

  async create(userGameData) {
    return await UserGame.create(userGameData);
  }

  async delete(userId, gameId) {
    const userGame = await UserGame.findOne({ having: { userId, gameId } });
    if (userGame) {
      await userGame.destroy();

      return true;
    }

    return false;
  }
}

export default new UserRepository();
