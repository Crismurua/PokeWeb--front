const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('type', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true

        }
    },
    {
        timestamps: false,
    })
}