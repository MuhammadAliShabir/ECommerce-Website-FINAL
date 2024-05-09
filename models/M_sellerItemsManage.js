  //                             SELLER ITEMS PAGE

const myDB = require ('../config/dbconfig.js');
//Handle seller products page details
function addProductToDb(req, res) {
  console.log(req.body);
  const {para1, para2, para3, para4, para5} = req.body;
 
  // Check if username and password are provided
  if (!para1 || !para3 || !para5) {
    return res.status(400).send('Things are required');
  }


  myDB.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }
});
  const sqlQuery ='INSERT INTO products (column1, column2, column3, column4, column5) VALUES ( ? , ? , ? , ? , ? )';
  myDB.executeQuery(sqlQuery, [para1,para2,para3, para4, para5], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database Server error');
    }
    
    if (result.length === 0) //error handling
    {
      return res.status(401).send('Invalid Username');
    }
    console.log(result);
    const user = result[0]; //store the first returned row with in a varaiable

    if (password !== user.password) {
      return res.status(401).send('Invalid Password');
    }
    if (userType !== user.isSeller) {
      return res.status(401).send('You are not a Seller!');
    }
    // If everything is fine, return a success message
    console.log('Login Successful');
     res.status(200).json({
      message: 'Login successful!',
      userTypeSignal: user.isSeller
    }
     );
    
    
 });
};

module.exports= {
    manageDashboardData
};




