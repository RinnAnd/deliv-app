import Sequelize from "sequelize";

export const sequelize = new Sequelize("project21", "postgres", "MARCOREUS11", {
  host: "localhost",
  dialect: "postgres",
});