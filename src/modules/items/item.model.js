import { DataTypes } from "sequelize";
import db from "../../configs/sequelize.js";

const Item = db.sequelize.define(
  "Item",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    gameId: {
      type: DataTypes.UUID,
      references: {
        model: "Games",
        key: "id",
      },
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

export default Item;
