import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Category = sequelize.define('Category', {
    cat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});