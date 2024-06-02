import { httpStatusCodes } from "../../constants/httpStatusCodes.js";
import ApiError from "../../exceptions/ApiError.js";
import AuthService from "./auth.services.js";

class AuthController {
  async signUp(req, res, next) {
    try {
      const user = await AuthService.signUp(req.body);
      res.status(httpStatusCodes.CREATED).json(user);
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }

  async login(req, res, next) {
    try {
      const { accessToken, refreshToken } = await AuthService.login(req.body);
      res.json({ accessToken, refreshToken });
    } catch (error) {
      next(new ApiError(httpStatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
  }
}

export default new AuthController();
