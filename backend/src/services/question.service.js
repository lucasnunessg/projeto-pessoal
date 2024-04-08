const { Question } = require('../models');

const getAllQuestions = async () => {
    const Questions = await Question.findAll();

    return Questions;
};

const getQuestionById = async (id) => {
    const Questions = await Question.findByPk(id);

    return Questions;
};

module.exports = {
    getAllQuestions,
    getQuestionById,
}