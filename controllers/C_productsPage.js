
const path = require('path');

const getCartPage = (req, res) => {
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'page5.html'));
    } catch (error) {
        console.error('Error serving the products cart HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
};


const getCheckoutPage = (req, res) => {
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'page6.html'));
    } catch (error) {
        console.error('Error serving the Checkout Page HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
};



// Export functions
module.exports = {
  getCartPage,
  getCheckoutPage
};

    
   
    