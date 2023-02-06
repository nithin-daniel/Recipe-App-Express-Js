const express = require('express')
const router = express.Router();
const recepieController = require('../controllers/recipeController')

/**
 * App Routes
 */
router.get('/',recepieController.homepage);
router.get('/recipe/:id',recepieController.exploreRecipe);
router.get('/categories',recepieController.exploreCategories);
router.get('/categories/:id',recepieController.exploreCategoriesById);
router.post('/search',recepieController.searchRecipe);
router.get('/explore-latest',recepieController.exploreLatest);
router.get('/explore-random',recepieController.exploreRandom);

module.exports = router;