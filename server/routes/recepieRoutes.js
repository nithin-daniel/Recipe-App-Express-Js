const express = require('express')
const router = express.Router();
const recepieController = require('../controllers/recipeController')

/**
 * App Routes
 */
router.get('/',recepieController.homepage);
router.get('/categories',recepieController.exploreCategories);
router.get('/recipe/:id',recepieController.exploreRecipe);

module.exports = router;