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

const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, difficulty, userId } = req.body;
        const updateQuestion = await questionService.updateQuestion(id, title, description, difficulty, userId);
        if (!updateQuestion) return res.status(404).json({ message: 'Não foi possível atualizar' });
        res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Erro ao atualizar' });
    }
};

const createQuestion = async(req, res) => {
    try{
        const {  title, description, difficulty, userId } = req.body
        const newQuestion = await questionService.createQuestion
        (id, title, description, difficulty, userId)
        return res.status(201).json(newQuestion);
    }catch(e){
        console.log(e.message)
        res.status(500).json({ message: 'Erro ao criar question' })
    }
}

const deleteQuestion = async (_req, res) => {
   try {
    const { id } = req.params;
    await questionService.deleteQuestion(id);
    return res.status(200).json({ message: 'Question deletada!' })
   }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro ao deletar!' })
   }
}

module.exports = {
    getAllQuestions,
    getQuestionById,
    updateQuestion,
    createQuestion,
    deleteQuestion,
}