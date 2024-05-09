  //                             SELLER ITEMS PAGE

const myDB = require ('../config/dbconfig.js');
//Handle seller products page details
function addProductToDb(req, res) {
  console.log(req.body);
  const {para1, para2, para3, para4, para5,para6} = req.body;
 
  // Check if username and password are provided
  if (!para1 || !para3 || !para5 || !para6 ) {
    return res.status(400).send('Things are required');
  }


  myDB.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }
});
  const sqlQuery =
  'INSERT INTO products (column1, column2, column3, column4, column5, column6) VALUES ( ? , ? , ? , ? , ?, ?)';
  myDB.executeQuery(sqlQuery, [para1,para2,para3,para4, para5,para6], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database Server error');
    }
    
    if (result.length === 0) //error handling
    {
      return res.status(401).send('DATA UNAVAILABLE');
    }
    console.log(result);
   
    // If everything is fine, return a success message
    console.log('Product INSERTION Successful');
     res.status(200).json({
      message: 'Product Successfully Added to the database!',
    }
     );
    
 });
};

module.exports= {
    addProductToDb
};




