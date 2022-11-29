const express = require('express');
const { userController, animesController, chaptersController } = require('../controllers');
const { userValidation } = require('../controllers/schemas');
const routes = express.Router();

routes.post('/register', userValidation, userController.register);
routes.post('/login',userValidation, userController.login);

// TODO VALIDATIONS
routes.post('/animes', animesController.createAnimes);
routes.get('/animes', animesController.getAnimes);
routes.get('/animes/:id', animesController.getAnimeById);
routes.put('/animes/:id', animesController.updateAnime);
routes.delete('/animes/:id', animesController.deleteAnime);

// TODO VALIDATIONS
routes.post('/chapters', chaptersController.createChapter);
routes.get('/chapters', chaptersController.getChapters);
routes.put('/chapters/:id', chaptersController.updateChapter);
routes.delete('/chapters/:id', chaptersController.deleteChapter);

module.exports = routes;