const express = require ('express');
const router = express.Router();
const sellerDashboardController= require('../controllers/C_sellerDashboard');
const sellerDashboardDbModel = require ('../models/M_sellerDashboard');

router.get('^/$|seller(.html)?', sellerDashboardController.getSellerDashboardPage);
router.get('/getAllSellers', sellerDashboardDbModel.getAllSellersID )
module.exports = router; 