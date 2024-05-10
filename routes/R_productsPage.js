const express = require('express');
const router = express.Router();
const  fetchProductData = require('../models/M_buyerpage');

router.get('/fetchProducts', (req, res) => {
    fetchProductData((err, products) => {
        if (err) {
            console.error('Error fetching product data:', err);
            res.status(500).json({ error: 'An error occurred while fetching product data' });
        } else {
            res.json(products);
        }
    });
});

module.exports = router;
