  //                             SELLER ITEMS PAGE

const myDB = require ('../config/dbconfig.js');
//Handle seller products page details
function addProductToDb(req, res) {
  console.log(req.body);
  const {productName, description, price, discount, availableQuantity, category, sID} = req.body;
 
  // Check if username and password are provided
  if (!productName || !price || !category || !availableQuantity || !sID ) {
    return res.status(400).send('Things are required');
  }


  myDB.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }
});
  const sqlQuery =
  'INSERT INTO products (productName, description, price , discount, category, availableQuantity, sID) VALUES ( ? , ? , ? , ? , ?, ?, ?)';
  myDB.executeQuery(sqlQuery, [productName,description,price,discount, category, availableQuantity, sID], 
    (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database Server error');
    }
    
    if (result.length === 0) //error handling
    {
      return res.status(401).send('UNKNOWN ERROR');
    }
    console.log(result);
   
    // If everything is fine, return a success message
    console.log('Product INSERTION Successful');
     res.status(200).json({
      message: 'Product Successfully Added to the database!'
    });
 });
};



function deleteProductFromDb(req, res) {
  console.log(req.body);

const {productName,productID,sID} = req.body;

if (!productName || !productID || !sID ) 
  {
  return res.status(400).send('Things are required');
 } 


myDB.getConnection((err, connection) => {
  if (err) {
      console.error('Error getting connection:', err);
      return;
  }
});

const sqlQuery =
'DELETE from products where productID= ? AND productName= ? AND sID = ?';
myDB.executeQuery(sqlQuery, [productID, productName, sID], (err, result) => {
  if (err) {
    console.error('Database error:', err);
    return res.status(500).send('Database Server error');
  }
  
  if (result.affectedRows === 0) //error handling
  {
    return res.status(404).json({
      message: `Product with ID: ${productID} and Name: ${productName} NOT Found in the database!`,
    });
  }
  console.log(result);
 
  // If everything is fine, return a success message
  console.log('Product DELETION Successful');
  return res.status(200).json({
    message: `Product: ${productName}  Successfully DELETED from the database!`
  });
  });
};


function findProductFromDb(req, res) {
const productName = req.query.productName;
const productID = req.query.productID;
const sID = req.query.sID;

if (!productName || !productID || !sID ) 
  {
  return res.status(400).send('Things are required');
 } 


myDB.getConnection((err, connection) => {
  if (err) {
      console.error('Error getting connection:', err);
      return;
  }
});

const sqlQuery =
'SELECT * from products where productID= ? AND productName= ? AND sID = ?';
myDB.executeQuery(sqlQuery, [productID, productName, sID], (err, result) => {
  if (err) {
    console.error('Database error:', err);
    return res.status(500).send('Database Server error');
  }
  
  if (result.length === 0) //error handling
  {
    return res.status(404).json({
      message: `Product with ID: ${productID} and Name: ${productName} NOT Found in the database!`
    });
  }
  const productDetails = result[0];
  console.log(productDetails);
  // If everything is fine, return a success message
  console.log('Product SEARCH Successful');
  return res.status(200).json({
    message: `Product: ${productName}  Details Successfully found from the database!`,
    productData: productDetails
  });
  });
};



function updateProductInDb(req, res) {
  console.log(req.body);
  const {productName, description, price, discount, productID} = req.body;
 
  // Check if username and password are provided
  if (!productName ||  !price  || !productID ) {
    return res.status(400).send('Things are required');
  }


  myDB.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }
});
  const sqlQuery =
  'UPDATE products SET productName=?, description=? , price =? , discount=? WHERE productID=?';
  myDB.executeQuery(sqlQuery, [productName,description,price,discount,productID], 
    (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database Server error');
    }
    
    if (result.affectedRows === 0) //error handling
    {
      return res.status(401).send('ERROR: Product UPDATE Request Failed');
    }
    console.log(result);
   
    // If everything is fine, return a success message
    console.log('Product Details Update Successful');
     res.status(200).json({
      message: 'Product Successfully Updated in the database!'
    });
 });
};




module.exports= {
    addProductToDb,
    deleteProductFromDb,
    findProductFromDb,
    updateProductInDb
};




