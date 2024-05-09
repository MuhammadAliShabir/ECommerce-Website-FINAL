const express = require ('express');
const router = express.Router();
const sellerItemsController= require('../controllers/C_sellerItemsManage');
const sellerItemsDbModel= require('../models/M_sellerItemsManage.js');



router.get('^/$|itemsManagePage(.html)?', sellerItemsController.getSellerItemsPage);
router.post('/addProduct', sellerItemsDbModel.addProductToDb);
//router.delete('/products/:id',sellerItemsDbModel.deleteProduct);
//router.put('/products/:id', sellerItemsDbModel.updateProduct);

module.exports = router; 