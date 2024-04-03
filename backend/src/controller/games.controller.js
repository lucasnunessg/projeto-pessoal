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

const getGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const games = await gamesService.getGamesById(id);

        if (!games) return res.status(500).json({ message: 'Usuário não encontrado' })

        return res.status(200).json(games);
    } catch(e){
        console.log(e.message)
        res.status(500).json({ message: 'Erro ao encontrar usuário!' })
    };
}

const createGame = async (req, res) => {
    try {
    const { score, userId } = req.body
        const newGame = await gamesService.createGame( score, userId );
        return res.status(201).json(newGame);
    }catch(e){
        console.log(e.message)
        res.status(500).json({ message: 'Erro ao criar o game' });
    }
}

    const deleteGame = async (req, res) => {
        try {
            const { id } = req.params
            await gamesService.deleteGame(id);
            return res.status(200).json({ message: 'Game excluído com sucesso!' });        
        }catch(e){
            console.log(e.message)
            res.status(500).json({ message: 'Erro ao deletar' })
        };
        
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    deleteGame,
}