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

   User.associate = function(models) {
    User.hasMany(models.Question, {foreignKey: 'userId'});
   };

    return User;
};

module.exports = UserModel;
