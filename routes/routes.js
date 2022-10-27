const routes = require('express').Router()
const userController = require('../controller/userController');

routes.get('/testing', userController.index)

routes.post('/testing', userController.create)

routes.get('/testing/:id', userController.show)

routes.put('/testing/:id', userController.update)

routes.delete('/testing/:id', userController.delete)

module.exports = routes