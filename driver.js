const express = require ('express');
const app= express();
const path= require('path');
const bodyParser = require('body-parser');
const PORT=process.env.PORT || 3500;


//debug purposes
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.path}`);
    next();
});

//middleware configuration
app.use(express.static(path.join(__dirname, '/public')));  //serve css and design correspondent JS files and pics
app.use(bodyParser.json());

//outsource the route handling for serving pages
app.use('/', require('./routes/R_homePage'));
app.use('/userLogin', require ('./routes/R_loginPage')); //for post request
app.use('/seller', require ('./routes/R_sellerDashboard'));
app.use('/itemsManagePage', require ('./routes/R_sellerItemsManage'));
app.use('/cart', require('./routes/R_productsPage')); 
app.use('/checkout', require('./routes/R_checkoutPage')); 
app.use('*', require('./routes/R_404'));


//NOTE: Now, if a request is made to a path that is not explicitly defined in R_homePage.js 
//(e.g: /contact, /products, etc.), it will not match any of the defined route handlers in R_homePage.js, 
//and it will be passed to the 404 route handler in R_404.js for handling






app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT}`));