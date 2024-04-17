'use strict';

module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
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
        timestamps: false,
    });

    Question.associate = function(models) {
        Question.belongsTo(models.User, { foreignKey: 'userId' });
    }

    return Question;
};
