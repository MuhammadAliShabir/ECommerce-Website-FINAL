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
      message: 'Product Successfully Added to the database!',
    });
 });
};

module.exports= {
    addProductToDb
};




