import Sequelize from "sequelize";
import connectionDB from "./config/db.js";
import bcrypt from "bcrypt";

const contact_model = connectionDB.define(
    'contact',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: Sequelize.STRING(150),
            allowNull: false,
        },

        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validator: {
                isEmail: true,
            },
        },

        telephone: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },

        comments: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export default contact_model;