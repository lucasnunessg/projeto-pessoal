'use strict';

module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('Question', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: { 
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        difficulty: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
            references: {
                model: 'User',
                key: 'id',
            },
        }
    }, {
        tableName: 'Questions',
        underscored: true,
        timestamps: false   ,
    });

      
    };

    return Questions;

