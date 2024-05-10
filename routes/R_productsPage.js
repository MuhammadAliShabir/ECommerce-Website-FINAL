const express = require('express');
const router = express.Router();
const sportsProductsPageController = require('../controllers/C_productsPage');
const  fetchProductData = require('../models/M_productsPage');




router.get('^/$|cart(.html)?',sportsProductsPageController.getCartPage);
router.get('/fetchSportsProducts', fetchProductData.fetchSportsProducts);

module.exports = router;
