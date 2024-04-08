'use strict';

module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('Question', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        tittle: { 
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
            references: {
                model: 'Users',
                key: 'id',
            },
        }
    }, {
        tableName: 'Questions',
        underscored: true,
        timestamps: true,
    });

    Questions.associate = (models) => {
        Questions.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });

        Questions.hasMany(models.Answer, {
            foreignKey: 'questionId',
            as: 'answers' 
        });
    };

    return Questions;
}
