import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import UserItemService from "./userItem.service.js";

class UserItemController {
  async findUserItems(req, res, next) {
    try {
      const { userId } = req.params;
      const userItems = await UserItemService.findUserItems(userId);
      res.status(httpStatusCodes.OK).json(userItems);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async createUserItem(req, res, next) {
    try {
      const userItem = await UserItemService.createUserItem(req.body);
      res.status(httpStatusCodes.CREATED).json(userItem);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async deleteUserItem(req, res, next) {
    try {
      const result = await UserItemService.deleteUserItem(
        req.body.userId,
        req.body.itemId
      );

      if (result) {
        res.status(httpStatusCodes.NO_CONTENT).end();
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "UserItem not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new UserItemController();
