const express = require('express');

const OngController = require('./controllers/OngController.js');
const IncidentsController = require('./controllers/IncidentsController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
