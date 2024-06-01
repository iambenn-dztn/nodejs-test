import { Sequelize } from "sequelize";
import dbConfig from "./db.config.cjs";

const env = process.env.NODE_ENV || "development";
const db = dbConfig[env];

const sequelize = new Sequelize(db.development, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  pool: db.pool,
  port: db.port,
});

export default { sequelize };
