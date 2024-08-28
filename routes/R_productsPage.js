const express = require('express');
const router = express.Router();
const sportsProductsPageController = require('../controllers/C_productsPage');
const  fetchProductData = require('../models/M_productsPage');
const cartPageInteract= require('../models/M_cartPage');



router.get('^/$|cart(.html)?',sportsProductsPageController.getCartPage);
router.get('/fetchSportsProducts', fetchProductData.fetchSportsProducts);
router.put('/addToCart',cartPageInteract.addProductToCart )
module.exports = router;
