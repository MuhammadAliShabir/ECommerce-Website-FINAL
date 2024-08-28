const express = require ('express');
const router = express.Router();
const sportsProductsPageController = require('../controllers/C_checkoutPage');
const  fetchdatafromcart = require('../models/M_cartPage');


router.get('^/$|checkout(.html)?',sportsProductsPageController.getCheckoutPage);
router.get('/fetchCartData', fetchdatafromcart.fetchCartData);
module.exports= router;