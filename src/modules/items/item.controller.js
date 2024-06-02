import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import ItemService from "./item.service.js";

class ItemController {
  async findById(req, res, next) {
    try {
      const item = await ItemService.findById(req.params.id);

      if (item) {
        res.status(httpStatusCodes.OK).json(item);
      } else {
        next(new ApiError(httpStatusCodes.NOT_FOUND, "Item not found"));
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async findItemsByGame(req, res, next) {
    try {
      const items = await ItemService.findItemsByGame(req.params.gameId);
      res.status(httpStatusCodes.OK).json(items);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async createItem(req, res, next) {
    try {
      const item = await ItemService.createItem(req.body);
      res.status(httpStatusCodes.CREATED).json(item);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async updateItem(req, res, next) {
    try {
      const item = await ItemService.updateItem(req.params.id, req.body);

      if (item) {
        res.status(httpStatusCodes.ACCEPTED).json(item);
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "Item not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async deleteItem(req, res, next) {
    try {
      const result = await ItemService.deleteItem(req.params.id);

      if (result) {
        res.status(httpStatusCodes.NO_CONTENT).end();
      } else {
        res
          .status(httpStatusCodes.NOT_FOUND)
          .json({ message: "Item not found" });
      }
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new ItemController();
