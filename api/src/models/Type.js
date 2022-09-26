const { DataTypes } = require('sequelize');
const path = require('path')

module.exports = sequelize => {
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
           
        },
        name: {
            type: DataTypes.STRING,
            unique: true

        }
    },
    {
        timestamps: false
    })
}