                           //    DASHBOARD

const myDB = require ('../config/dbconfig.js');
//Handle seller dashboard details
function manageDashboardData(req, res) {
  console.log(req.body);
  const {username,password} = req.body;
  let {userType} = req.body;
  userType === "seller" ? userType = 1 : userType=0; 
  // Check if username and password are provided
  if (!username || !password || !userType) {
    return res.status(400).send('Email and password are required');
  }


  myDB.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }
});
  const sqlQuery = 'SELECT * FROM login WHERE email = ?  AND isSeller= ?';
  myDB.executeQuery(sqlQuery, [username,userType], (err, result) => {
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
    });
 });
};



function checkSellersID (req,res) {
  const idToCheck = req.query.sellerID;
  myDB.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }
});
  const sqlQuery = 'SELECT * FROM sellers where sellerID = ?';
  myDB.executeQuery(sqlQuery, idToCheck , (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database Server error');
    }
    console.log(result);
    if (result.length !== 0) 
    {
      console.log("sellerID  found");
      return res.status(200).json({
        message: "Valid"   //signal that sent sellerID is valid
      })
    } //found the seller ID in database
    else
    {
      console.log("sellerId NOT found");
      return res.json({
       message: "Invalid"  //signal that sent sellerID is inValid
      });
    }
  })
};







module.exports= {
    manageDashboardData,
    checkSellersID
};




