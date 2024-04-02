const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        full_name: DataTypes.STRING,
        email: DataTypes.STRING,
        contact: DataTypes.STRING
    }, {
        tableName: 'Users',
        timestamps: false
    });

    return User;
};

module.exports = UserModel;