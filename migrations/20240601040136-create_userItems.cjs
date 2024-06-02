"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserItems", {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      itemId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Items",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      acquiredAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserItems");
  },
};
