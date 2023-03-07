import Sequelize from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config()

export const sequelize = new Sequelize("project21", "postgres", process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});