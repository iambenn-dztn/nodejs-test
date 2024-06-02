"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: "87d72f10-0684-4fea-af86-25df024b3df2",
        username: "admin1",
        email: "admin1@gmail.com",
        role: "admin",
        // 12345
        password:
          "$2a$10$2NMdFjoEEWQoFQk2/haN0uvWQxyDSiVyJ4LDgto6xylJjE5Y1inFu",
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
