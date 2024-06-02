import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "Users",
        key: "id",
      },
    },
    itemId: {
      type: DataTypes.UUID,
      references: {
        model: "Items",
        key: "id",
      },
    },
    transactionType: {
      type: DataTypes.ENUM("purchase", "sale", "gift"),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default Transaction;
