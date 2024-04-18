
const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: {
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
        timestamps: false,
        underscored: true,
    });

   User.associate = function(models) {
    User.hasOne(models.Question, {foreignKey: 'userId'});
   };

    return User;
};

module.exports = UserModel;
