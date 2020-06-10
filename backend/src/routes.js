const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

//Criar Ongs
routes.post('/ongs', OngController.create);

//Listar Ongs
routes.get('/ongs', OngController.index);

//Login de uma Ong
routes.post('/login', LoginController.create);

//Criar Casos
routes.post('/incidents', IncidentController.create);

//Listar Casos
routes.get('/incidents', IncidentController.index);

//Deletar Casos
routes.delete('/incidents/:id', IncidentController.delete);

//Listar Casos de uma Ong
routes.get('/profile', ProfileController.index);

module.exports = routes;