import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import userService from "../users/user.service.js";
import AuthRepository from "./auth.repository.js";
import ApiError from "../../exceptions/ApiError.js";

class AuthService {
  generateAccessToken(user) {
    return jwt.sign(
      { username: user.username, role: user.role },
      process.env.SECRET_KEY
    );
  }

  async signUp(userData) {
    const hashedPassword = await bcrypt.hash("12345", 10);

    return await AuthRepository.signUp({
      ...userData,
      password: hashedPassword,
      role: "user",
    });
  }

  async login(userData) {
    const { username, password } = userData;

    const user = await userService.findFirst({ where: { username } });
    if (!user) {
      throw new ApiError(
        httpStatusCodes.BAD_REQUEST,
        "Invalid username or password"
      );
    }

    const userHashPassword = user.password;
    const isPasswordValid = await bcrypt.compare(password, userHashPassword);
    if (!isPasswordValid) {
      throw new ApiError(
        httpStatusCodes.BAD_REQUEST,
        "Invalid username or password"
      );
    }

    const accessToken = this.generateAccessToken(user);

    return { accessToken };
  }
}

export default new AuthService();
