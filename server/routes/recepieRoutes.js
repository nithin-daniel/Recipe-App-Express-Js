const express = require('express')
const router = express.Router();
const recepieController = require('../controllers/recipeController')

/**
 * App Routes
 */
router.get('/',recepieController.homepage);
router.get('/categories',recepieController.exploreCategories);

module.exports = router;