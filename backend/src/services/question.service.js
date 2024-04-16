const { QueryInterface } = require('sequelize');
const { Question } = require('../models');

const getAllQuestions = async () => {
    const Questions = await Question.findAll();

    return Questions;
};

const getQuestionById = async (id) => {
    const Questions = await Question.findByPk(id);

    return Questions;
};

const createQuestion = async (title, description, difficulty, userId) => {
const Questions = await Question.create({ title, description, difficulty, userId })
    return Questions
};

const updateQuestion = async (title, description, difficulty, userId) => {
    const [updateQuestion] = await Question.update({
        title, description, difficulty, userId},
        {  where: { id } }
    )
    return updateQuestion;
};

const deleteQuestion = async (id) => {
    const deleteRowsCount = await Question.destroy({
        where: { id }
    });
return deleteRowsCount;
};

module.exports = {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
}