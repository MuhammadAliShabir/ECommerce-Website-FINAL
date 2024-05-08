const express = require ('express');
const router = express.Router();
const sellerDashboardController= require('../controllers/C_sellerItemsManage');


router.get('^/$|itemsManagePage(.html)?', sellerDashboardController.getSellerItemsPage);



module.exports = router; 