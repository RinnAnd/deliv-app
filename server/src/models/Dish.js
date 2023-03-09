import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Dish = sequelize.define('Dish', {
    dish_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    image: {
        type: DataTypes.TEXT
    },
}, {
    timestamps: false
})