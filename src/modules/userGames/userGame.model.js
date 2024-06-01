import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const UserGame = sequelize.define(
  "UserGame",
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    gameId: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "Games",
        key: "id",
      },
    },
    acquiredAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

export default UserGame;
