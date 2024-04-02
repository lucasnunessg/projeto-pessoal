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
}

module.exports = {
    getAllGames,
    getGamesById,
    createGame,
};