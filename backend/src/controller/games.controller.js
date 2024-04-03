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

        if (!games) return res.status(500).json({ message: 'Game não encontrado' })

        return res.status(200).json(games);
    } catch(e){
        console.log(e.message)
        res.status(500).json({ message: 'Erro ao encontrar game!' })
    };
};

const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const { score, userId } = req.body;
        const updateGame = await gamesService.updateGame(id, score, userId);
      if (!updateGame) return res.status(404).json({ message: 'Falha ao atualizar game' })
      res.status(200).json({ message: 'Game atualizado!' })
    }catch(e){
        console.log(e.message)
        res.status(500).json({ message: 'Erro, tente novamente!' })
    }
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
            res.status(500).json({ message: 'Erro ao deletar o game' })
        };
        
}

module.exports = {
    createGame,
    deleteGame,
    getAllGames,
    updateGame,
    getGameById,
}