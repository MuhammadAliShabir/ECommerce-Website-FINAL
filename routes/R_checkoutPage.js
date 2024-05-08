const express = require ('express');
const router = express.Router();
const sportsProductsPageController = require('../controllers/C_checkoutPage');

router.get('^/$|checkout(.html)?',sportsProductsPageController.getCheckoutPage);

module.exports= router;