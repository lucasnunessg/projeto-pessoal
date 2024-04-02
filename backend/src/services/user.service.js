const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();

    return users;
};

const getById = async (id) => {
    const users = await User.findByPk(id);

    return users;
};

const createUser = async (full_name, email, contact) => {
    const users = await User.create({full_name, email, contact});

    return users;
}

const updateUser = async (id, full_name, email, contact) => {
    const [updateUser] = await User.update(
        {full_name, email, contact},
        { where: { id } },
    );
    
    return updateUser;
};

const deleteUser = async (id) => {
    const user = User.destroy({
        where: { id }
    });
    return user;
};

module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
}
