'use strict';

module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        score: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        }
    }, {
        tableName: 'Games',
        timestamps: true,
        underscored: true,
    });

    Game.associate = function(models) {
        Game.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    };

    return Game;
};
