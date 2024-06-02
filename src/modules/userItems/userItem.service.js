import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import UserItemRepository from "./userItem.repository.js";

class UserItemService {
  async findUserItems(userId) {
    return await UserItemRepository.findUserItems(userId);
  }

  async createUserItem(transactionData) {
    return await UserItemRepository.create(transactionData);
  }

  async deleteUserItem(userId, itemId) {
    const result = await UserItemRepository.delete(userId, itemId);
    if (!result) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `ErrorUserItemService: UserItem not found with id: ${id}`
      );
    }

    return result;
  }
}

export default new UserItemService();
