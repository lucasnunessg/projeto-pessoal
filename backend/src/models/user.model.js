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

   

    return User;
};

module.exports = UserModel;
