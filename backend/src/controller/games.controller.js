const gamesService = require('../services/games.service');

const getAllGames = async (_req, res) => {
    try {
        const games = await gamesService.getAllGames()
        return res.status(200).json(games);
    }catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Ocorreu um erro!' })
    }
}

const getGamesById = async (_req, res) => {
    try {
        const { id } = req.params;
        const games = await gamesService.getGamesById(id);

        if (!games) return res.status(500).json({ message: 'Usuário não encontrado' })

        return res.status(200).json(games);
    } catch(e){
        console.log(e.message)
        res.status(500).json({ message: error500Message })
    };
}

const createGame = async (_req, res) => {
    try {
    const { score, userId } = req.body
        const newGame = await gamesService.createGame( score, userId );
        return res.status(201).json(newGame);
    }catch(e){
        console.log(e.message)
        res.status(500).json({ message: error500Message });
    }
}

module.exports = {
    getAllGames,
    getGamesById,
    createGame,
}