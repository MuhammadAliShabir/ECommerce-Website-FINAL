const express = require ('express');
const router = express.Router();
const sportsProductsPageController = require('../controllers/C_productsPage');

router.get('^/$|cart(.html)?',sportsProductsPageController.getCartPage);
router.get('^/$|checkout(.html)?',sportsProductsPageController.getCheckoutPage);

module.exports= router;