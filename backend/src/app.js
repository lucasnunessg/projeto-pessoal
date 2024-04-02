const express = require('express');

const userController = require('./controller/user.controller');

const app = express()

app.use(express.json());

app.put('/users/:id', userController.updateUser);
app.post('/users', userController.createUser);
app.delete('/users/:id', userController.deleteUser);
app.get('/users/:id', userController.getById);

app.get('/users', userController.getAll);


module.exports = app;