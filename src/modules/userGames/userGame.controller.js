import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import UserGameService from "./userGame.service.js";

class UserGameController {
  async findGameUsers(req, res, next) {
    try {
      const gameUsers = await UserGameService.findGameUsers(req.params.gameId);
      res.status(httpStatusCodes.OK).json(gameUsers);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async createUserGame(req, res, next) {
    try {
      const userGame = await UserGameService.createUserGame(req.body);
      res.status(httpStatusCodes.CREATED).json(userGame);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async deleteUserGame(req, res, next) {
    try {
      const result = await UserGameService.deleteUserGame(
        req.body.userId,
        req.body.gameId
      );

      if (result) {
        res.status(httpStatusCodes.NO_CONTENT).end();
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "UserGame not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new UserGameController();
