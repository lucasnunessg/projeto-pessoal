const express = require('express');

const userController = require('./controller/user.controller');
const gamesController = require('./controller/games.controller')
const questionsController = require('./controller/question.controller');

const app = express()

app.use(express.json());

app.put('/users/:id', userController.updateUser);
app.put('/games/:id', gamesController.updateGame);
app.put('/questions/:id', questionsController.updateQuestion);
app.get('/games', gamesController.getAllGames);
app.get('/users', userController.getAll);
app.get('/questions', questionsController.getAllQuestions);
  app.post('/users', userController.createUser);
app.delete('/users/:id', userController.deleteUser);
app.delete('/questions/:id', questionsController.deleteQuestion);
app.delete('/users/:id', gamesController.deleteGame);
app.get('/users/:id', userController.getById);
app.get('/questions/:id', questionsController.getQuestionById)
app.get('/games/:id', gamesController.getGameById);
app.post('/games', gamesController.createGame);
app.post('/questions',questionsController.createQuestion);


module.exports = app;