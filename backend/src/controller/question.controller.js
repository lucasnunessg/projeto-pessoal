const questionService = require('../services/question.service');

const getAllQuestions = async (_req, res) => {
    try {
        const Questions = await questionService.getAllQuestions()
        return res.status(200).json(Questions)
    }catch(e){
        console.log(e.message);
        res.status(500).json({ message: 'Erro ao encontrar questão!' })
    }
};

const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params

        const Questions = await questionService.getQuestionById(id)
        if(!Questions)
        return res.status(500).json({ message: 'Não foi possível encontrar a questão!' })
    return res.status(200).json(Questions);
    }catch(e){
        console.log(e.message)
        res.status(500).json({ message: 'Não foi possível encontrar' });
    }
};

module.exports = {
    getAllQuestions,
    getQuestionById,
}