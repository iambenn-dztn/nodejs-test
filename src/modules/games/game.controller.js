import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import GameService from "./game.service.js";

class GameController {
  async findById(req, res, next) {
    try {
      const game = await GameService.findById(req.params.id);

      if (game) {
        res.status(httpStatusCodes.OK).json(game);
      } else {
        next(new ApiError(httpStatusCodes.NOT_FOUND, "Game not found"));
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async findGames(_req, res, next) {
    try {
      const games = await GameService.findGames();
      res.status(httpStatusCodes.OK).json(games);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async createGame(req, res, next) {
    try {
      const game = await GameService.createGame(req.body);
      res.status(httpStatusCodes.CREATED).json(game);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async updateGame(req, res, next) {
    try {
      const game = await GameService.updateGame(req.params.id, req.body);

      if (game) {
        res.status(httpStatusCodes.ACCEPTED).json(game);
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "Game not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async deleteGame(req, res, next) {
    try {
      const result = await GameService.deleteGame(req.params.id);

      if (result) {
        res.status(httpStatusCodes.NO_CONTENT).end();
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "Game not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new GameController();
