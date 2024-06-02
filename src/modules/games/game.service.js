import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import GameRepository from "./game.repository.js";

class GameService {
  async findById(id) {
    return await GameRepository.findById(id);
  }

  async findGames() {
    return await GameRepository.findGames();
  }

  async createGame(gameData) {
    return await GameRepository.create(gameData);
  }

  async updateGame(id, gameData) {
    const existingGame = await GameRepository.findFirst({
      where: { id, deletedAt: null },
    });
    if (!existingGame) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `Game not found with id: ${id}`
      );
    }

    const updatedGame = await GameRepository.update(id, gameData);

    return updatedGame;
  }

  async deleteGame(id) {
    const result = await GameRepository.delete(id);
    if (!result) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `ErrorGameService: Game not found with id: ${id}`
      );
    }

    return result;
  }
}

export default new GameService();
