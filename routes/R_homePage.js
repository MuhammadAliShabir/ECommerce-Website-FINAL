const express = require ('express');
const router = express.Router();
const homePageController = require('../controllers/C_homePage.js');

router.get('^/$|homePage(.html)?',homePageController.getHomePage);

router.get('^/$|signin(.html)?',homePageController.getSigninPage);
router.get('^/$|sports-page(.html)?',homePageController.getSportsProductsPage);
// router.get('^/$|getUserType',homePageController.getUserType);


module.exports= router;