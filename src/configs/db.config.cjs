module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "development",
    host: "localhost",
    port: 8888,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
