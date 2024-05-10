const myDB = require('../config/dbconfig.js');

// Function to fetch product data from the database and populate the page
function fetchSportsProducts (req,res)
 {
    console.log("here in func to fetch products");
    //no parameters were needed else they would be extracted and checked here
    myDB.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection:', err);
            return;
        }
    });
    // Query to fetch product data from the database
    const sqlQuery = 'SELECT * FROM products';
    // Execute the SQL query
    myDB.executeQuery(sqlQuery, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Database Server error');
        }
          
        if (result.length === 0) //error handling
        {
            return res.status(401).send('ERROR: No Products in Database');
        }
        console.log(result); //debugging

    // If everything is fine, return a success message
    console.log('All Products Successfully Fetched From Database for Display');
    res.status(200).json({
     message: 'Products Fetched from DB Successfully',
     productData: result //send product data 
   });     
    });
}

module.exports = {
fetchSportsProducts
};
