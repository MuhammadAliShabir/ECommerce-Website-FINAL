
const path = require('path');


const getSellerItemsPage = (req,res) =>{
    try {     
        // Serve the HTML file
        res.sendFile(path.join(__dirname, '..', 'views', 'page4.html'));
    } catch (error) {
        console.error('Error serving the Seller Items Manage Page HTML file:', error);
        res.status(500).send('Internal Server Error');
    }
}



// Export functions
module.exports = {
    getSellerItemsPage
};


    
    
   
    