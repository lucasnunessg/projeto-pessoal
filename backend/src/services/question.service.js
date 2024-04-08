const { Question } = require('../models');

const getAllQuestions = async () => {
    const Questions = await Question.findAll();

    return Questions;
};

module.exports = {
    getAllQuestions,
}