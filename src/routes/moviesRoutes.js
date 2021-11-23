const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/api/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/api/movies/add', moviesController.add);
router.post('/api/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.get('/api/movies/delete/:id', moviesController.delete);
router.delete('/api/movies/delete/:id', moviesController.destroy);

module.exports = router;