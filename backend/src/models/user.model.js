const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'Users',
        timestamps: false
    });

    User.hasMany(Game); // Um usuário pode ter muitos jogos
    User.hasMany(Answer); // Um usuário pode ter muitas respostas, qdo tiver

    return User;
};

module.exports = UserModel;
