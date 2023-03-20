import app from "./app.js";
import * as dotenv from "dotenv";
import { sequelize } from "./database/db.js";
dotenv.config();
import { Shop } from "./models/Shop.js";
import { Dish } from "./models/Dish.js";

import "./models/Shop.js";
import "./models/Dish.js";
import { Category } from "./models/Category.js";

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

Shop.hasMany(Dish, {
  foreignKey: "shop_id",
});

Dish.belongsTo(Shop, {
  foreignKey: "shop_id",
});

Category.hasMany(Shop, { 
  foreignKey: 'cat_id' 
});

Shop.belongsTo(Category, { 
  foreignKey: 'cat_id' 
});
