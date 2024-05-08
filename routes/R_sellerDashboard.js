const express = require ('express');
const router = express.Router();
const sellerDashboardController= require('../controllers/C_sellerDashboard');

router.get('^/$|seller(.html)?', sellerDashboardController.getSellerDashboardPage);

module.exports = router; 