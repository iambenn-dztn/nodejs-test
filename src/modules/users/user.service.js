import bcrypt from "bcryptjs";
import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import UserRepository from "./user.repository.js";

class UserService {
  async findById(id) {
    return await UserRepository.findById(id);
  }

  async findFirst(params) {
    return await UserRepository.findFirst(params);
  }

  async findUsers() {
    return await UserRepository.findUsers();
  }

  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    return await UserRepository.create({
      ...userData,
      password: hashedPassword,
    });
  }

  async updateUser(id, userData) {
    const existingUser = await UserRepository.findFirst({
      where: { id, deletedAt: null },
    });
    if (!existingUser) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `User not found with id: ${id}`
      );
    }

    const updatedUser = await UserRepository.update(id, userData);

    return updatedUser;
  }

  async deleteUser(id) {
    const result = await UserRepository.delete(id);
    if (!result) {
      throw new ApiError(
        httpStatusCodes.INTERNAL_SERVER_ERROR,
        `ErrorUserService: User not found with id: ${id}`
      );
    }

    return result;
  }
}

export default new UserService();
