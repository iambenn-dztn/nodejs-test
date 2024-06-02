import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import UserGameRepository from "./userGame.repository.js";

class UserGameService {
  async findGameUsers(gameId) {
    return await UserGameRepository.findGameUsers(gameId);
  }

  async createUserGame(transactionData) {
    return await UserGameRepository.create(transactionData);
  }

  async deleteUserGame(userId, gameId) {
    const result = await UserGameRepository.delete(userId, gameId);
    if (!result) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `ErrorUserGameService: UserGame not found with id: ${id}`
      );
    }

    return result;
  }
}

export default new UserGameService();
