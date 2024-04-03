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

module.exports = {
    getAllGames,
}