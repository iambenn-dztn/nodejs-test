import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    itemId: {
      type: DataTypes.INTEGER,
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
  },
  {
    timestamps: false,
  }
);

export default Transaction;
