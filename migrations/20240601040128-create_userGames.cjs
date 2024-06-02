"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserGames", {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      gameId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Games",
          key: "id",
        },
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
    await queryInterface.dropTable("UserGames");
  },
};
