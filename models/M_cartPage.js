const myDB = require('../config/dbconfig.js');

// Function to fetch product data from the database and populate the page
function addProductToCart (req,res)
 {
    console.log("here in func to add product to cart");
    let temp=[];
    const {productName, buyerID} = req.body;
    myDB.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection:', err);
            return;
        }
    });
    // Query to fetch product data from the database
    const sqlQuery = 'SELECT productID,discount FROM products where productName= ?';
    // Execute the SQL query
    myDB.executeQuery(sqlQuery,productName, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Database Server error');
        }
          
        if (result.length === 0) //error handling
        {
            return res.status(401).send('ERROR: Selected Product Not Found in Products Table in Database');
        }
        console.log(result); //debugging
    
        productDeets= result[0];
       if(!productDeets)
        {
           console.log("Error var not intialized");
           return res.status(401).send('ERROR: Background Error');
        }
        else{
            console.log(productDeets);
        }
    const sqlQueer = 
    'INSERT INTO carts( bID,cartProductID,quantity,subTotal) VALUES (? , ? , ? , ?)';
    // Execute the SQL query
    myDB.executeQuery(sqlQueer,[buyerID,productDeets.productID,1,productDeets.discount], (err, result2) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Database Server error');
        }
        if (result2.affectedRows === 0) //error handling
        {
            return res.status(401).send('ERROR: Cannot Enter Selected Product into Cart');
        }
        console.log(result2); //debugging
        console.log("Porduct Added to Cart");
    res.status(200).json({
     message: 'Product Inserted into Cart Table in DB Successfully',
   });     
    });
});
}


// Function to fetch cart data from the database and populate the page
function fetchCartData (req,res)
{
    console.log("here in func to fetch cart data");
    //no parameters were needed else they would be extracted and checked here
    myDB.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection:', err);
            return;
        }

        // Query to fetch cart data from the database
        const sqlQuery = 'SELECT p.productName, p.description, p.price, p.discount, p.category, c.subTotal from carts as c inner join products as p on c.cartProductID = p.productID';
        // Execute the SQL query
        connection.query(sqlQuery, (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send('Database Server error');
            }
              
            if (result.length === 0) //error handling
            {
                return res.status(401).send('ERROR: No Such Products in DB for Cart');
            }
            let myArr = [];
            console.log(result); //debugging
            for(const i = 0; i< result.length; i++)
                {
                    myArr.push(result[i]);
                }
            // If everything is fine, return a success message
            console.log('All Cart Items Details Successfully Fetched From Database for Display');
            res.status(200).json({
                message: 'Product Details for Cart Data Fetched from DB Successfully',
                cartData: myArr //send cart data 
            });     
        });
    });
}






module.exports = {
addProductToCart,
fetchCartData
};
