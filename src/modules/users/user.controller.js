import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import UserService from "./user.service.js";

class UserController {
  async findById(req, res, next) {
    try {
      const user = await UserService.findById(req.params.id);

      if (user) {
        res.status(httpStatusCodes.OK).json(user);
      } else {
        next(new ApiError(httpStatusCodes.NOT_FOUND, "User not found"));
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async createUser(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(httpStatusCodes.CREATED).json(user);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async updateUser(req, res, next) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);

      if (user) {
        res.status(httpStatusCodes.ACCEPTED).json(user);
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "User not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async deleteUser(req, res, next) {
    try {
      const result = await UserService.deleteUser(req.params.id);

      if (result) {
        res.status(httpStatusCodes.NO_CONTENT).end();
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "User not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new UserController();
