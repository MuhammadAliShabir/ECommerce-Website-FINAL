const myDB = require('../config/dbconfig.js');

// Function to fetch product data from the database and populate the page
function fetchProductData(callback) {
    // Query to fetch product data from the database
    const sqlQuery = 'SELECT productName, description, price FROM products';

    // Execute the SQL query
    myDB.executeQuery(sqlQuery, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            callback(err, null);
        } else {
            callback(null, results);
        }
        
    });
}

module.exports = {
    fetchProductData
};
