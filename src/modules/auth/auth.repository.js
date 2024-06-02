import User from "../users/user.model.js";

class AuthRepository {
  async signUp(userData) {
    return await User.create(userData);
  }
}

export default new AuthRepository();
