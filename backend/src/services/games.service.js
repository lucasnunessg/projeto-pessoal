const { Game } = require('../models')

const getAllGames = async () => {
    const games = await Game.findAll();

    return games;
};

const getGamesById = async (id) => {
    const games = await Game.findByPk(id);

    return games;
};

const createGame = async (id, score, userId) => {
    const games = await Game.create ({id, score, userId});

    return games;
};

const updateGame = async (id, score, userId) => {
    const [updateGame] = await Game.update({ score, userId }, {
        where: { id }
    });

    return updateGame;

}

const deleteGame = async (id) => {
    const games = await Game.destroy({ where: { id } });

    return games;
};



module.exports = {
    getAllGames,
    getGamesById,
    createGame,
    deleteGame,
    updateGame,
};