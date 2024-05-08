
const path = require('path');


const getSellerDashboardPage = (req,res) =>{
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'page2.html'));
    } catch (error) {
        console.error('Error serving the Seller Dashboard Page HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
}




// Export functions
module.exports = {
    getSellerDashboardPage
};


    
    
   
    