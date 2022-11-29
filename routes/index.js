const express = require('express');
const { userController, animesController, chaptersController } = require('../controllers');
const { userValidation, animesValidation, chaptersValidations } = require('../controllers/schemas');
const routes = express.Router();

routes.post('/register', userValidation, userController.register);
routes.post('/login',userValidation, userController.login);

routes.post('/animes', animesValidation, animesController.createAnimes);
routes.get('/animes', animesController.getAnimes);
routes.get('/animes/:id', animesController.getAnimeById);
routes.put('/animes/:id', animesValidation, animesController.updateAnime);
routes.delete('/animes/:id', animesController.deleteAnime);

routes.post('/chapters',chaptersValidations, chaptersController.createChapter);
routes.get('/chapters', chaptersController.getChapters);
routes.put('/chapters/:id',chaptersValidations, chaptersController.updateChapter);
routes.delete('/chapters/:id', chaptersController.deleteChapter);

module.exports = routes;