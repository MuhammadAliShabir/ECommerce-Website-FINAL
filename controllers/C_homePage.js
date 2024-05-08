
const path = require('path');

const getHomePage = (req, res) => {
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'homePage.html'));
    } catch (error) {
        console.error('Error serving homepage HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getSigninPage = (req,res) =>{
    try {     
       let userType = req.query.userType;
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'signin.html'));
    } catch (error) {
        console.error('Error serving the signin HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
}

const getSellerPage = (req,res) =>{
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'page2.html'));
    } catch (error) {
        console.error('Error serving the seller dashboard HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
}

const getSportsProductsPage = (req,res) =>{
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'page3.html'));
    } catch (error) {
        console.error('Error serving the Sports Products Page HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
}



const getUserType= (req, res) => {
    try {
        console.log("sup");
        let userType = req.query.userType;
        console.log(userType);
        // Send the userType value as the response
        res.send(userType);
    } catch (error) {
        console.error('Error fetching userType:', error);
        res.status(500).send('Internal Server Error');
    }
}


// Export functions
module.exports = {
    getHomePage,
    getSigninPage,
    getSellerPage,
    getSportsProductsPage,
    getUserType
};


    
    
   
    