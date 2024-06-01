import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const UserItem = sequelize.define(
  "UserItem",
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    itemId: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "Items",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
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

export default UserItem;
