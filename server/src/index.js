import app from "./app.js";
import * as dotenv from "dotenv";
import { sequelize } from "./database/db.js";
dotenv.config();

import './models/Shop.js';
import './models/Dish.js';

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT);
    console.log(`Now connected to the port ${process.env.PORT}`);
  } catch (error) {
    console.log("an error has occurred", error.message);
  }
};

main();
