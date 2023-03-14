import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Shop = sequelize.define('Shop', {
    shop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cuisine: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.TEXT,
    },  
}, {
    timestamps: false
});
