const express = require('express');

const userController = require('./controller/user.controller');
const gamesController = require('./controller/games.controller')

const app = express()

app.use(express.json());

app.put('/users/:id', userController.updateUser);
app.put('/games/:id', gamesController.updateGame);
app.get('/games', gamesController.getAllGames);
app.post('/users', userController.createUser);
app.delete('/users/:id', userController.deleteUser);
app.get('/users/:id', userController.getById);
app.post('/games', gamesController.createGame);
app.delete('/users/:id', gamesController.deleteGame);
app.get('/games/:id', gamesController.getGameById);
app.get('/users', userController.getAll);


module.exports = app;