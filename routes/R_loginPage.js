const express = require ('express');
const router = express.Router();
//const loginPageController = require('../controllers/C_loginPage');
const dbModel = require('../models/M_loginPage');

// manage route of POST request for '/userLogin' 
router.post('^/$|userLogin',dbModel.handleUserLogin);


module.exports= router;