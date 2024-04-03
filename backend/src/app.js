const express = require('express');

const userController = require('./controller/user.controller');
const gamesController = require('./controller/games.controller')

const app = express()

app.use(express.json());

app.put('/users/:id', userController.updateUser);
app.get('/games', gamesController.getAllGames);
app.post('/users', userController.createUser);
app.delete('/users/:id', userController.deleteUser);
app.get('/users/:id', userController.getById);

app.get('/games/:id', gamesController.getGamesById);
app.get('/users', userController.getAll);


module.exports = app;