const express = require('express');
const userController = require('./controller/user.controller');
const gamesController = require('./controller/games.controller')
const questionsController = require('./controller/question.controller');

const app = express();

app.use(express.json());

// Rotas de usuários
app.post('/users', userController.createUser);
app.get('/users/:id', userController.getById);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);
app.get('/users', userController.getAll);

// Rotas de jogos
app.get('/games', gamesController.getAllGames);
app.get('/games/:id', gamesController.getGameById);
app.post('/games', gamesController.createGame);
app.put('/games/:id', gamesController.updateGame);
app.delete('/games/:id', gamesController.deleteGame);

// Rotas de perguntas
app.get('/questions', questionsController.getAllQuestions);
app.get('/questions/:id', questionsController.getQuestionById);
app.post('/questions', questionsController.createQuestion);
app.put('/questions/:id', questionsController.updateQuestion);
app.delete('/questions/:id', questionsController.deleteQuestion);

module.exports = app;
