const express = require ('express');
const router = express.Router();
const sellerItemsController= require('../controllers/C_sellerItemsManage');
const sellerItemsDbModel= require('../models/M_sellerItemsManage.js');


router.get('^/$|itemsManagePage(.html)?', sellerItemsController.getSellerItemsPage);
router.get('/findProduct', sellerItemsDbModel.findProductFromDb);
router.post('/addProduct', sellerItemsDbModel.addProductToDb);
router.delete('/deleteProduct',sellerItemsDbModel.deleteProductFromDb);
router.put('/updateProduct', sellerItemsDbModel.updateProductInDb);

module.exports = router; 