import { DataTypes } from "sequelize";
import db from "../../configs/sequelize.js";

const UserGame = db.sequelize.define(
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
