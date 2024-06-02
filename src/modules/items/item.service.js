import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import ItemRepository from "./item.repository.js";

class ItemService {
  async findById(id) {
    return await ItemRepository.findById(id);
  }

  async findItemsByGame(gameId) {
    return await ItemRepository.findItemsByGame(gameId);
  }

  async createItem(itemData) {
    return await ItemRepository.create(itemData);
  }

  async updateItem(id, itemData) {
    const existingItem = await ItemRepository.findFirst({
      where: { id, deletedAt: null },
    });
    if (!existingItem) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `Item not found with id: ${id}`
      );
    }

    const updatedItem = await ItemRepository.update(id, itemData);

    return updatedItem;
  }

  async deleteItem(id) {
    const result = await ItemRepository.delete(id);
    if (!result) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `ErrorItemService: Item not found with id: ${id}`
      );
    }

    return result;
  }
}

export default new ItemService();
