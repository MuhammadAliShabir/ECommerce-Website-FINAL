document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/cart/fetchSportsProducts'); //send get request
        if (response.ok) {
            // Data fetch successful
           const responseData = await response.json();
           const message= responseData.message;
           alert(message);
           const allProductsData = responseData.productData; //object received 
           //if more than one product, then it is an array with each index holding an object which has all data of product
          //SO REMEMBER BOY , simply have all product data in your db and when this query will run
          //IT WILL HAVE difffernt row at each index
          //YOU can check length by using allProductData.length to check how many rows it holds
          
           const product1 = allProductsData[0];
           const pName= document.querySelector("#prodA11");
           const pDescrip= document.querySelector("#prodA12");
           const salePrice= document.querySelector("#prodA13");
           const discPrice= document.querySelector("#prodA14");
          // for( let i=0; i < 4; i++)
            //{
                pName.textContent = `${product1.productName}`;
                pDescrip.textContent= `${product1.description}`;
                salePrice.textContent= `Normal Price: $${product1.price}`;
                discPrice.textContent= `Sale Price: $${product1.discount}`;
                alert("Check and SEE If content is different");
            //}
         } 
         else {
            // Data Insertion failed
            const errorMessage = await response.text();
            alert(errorMessage);
         }
     } 
     catch (error)
      {
         console.error("Error:", error);
         alert("An error occurred. Please try again later.");
     }
});




document.getElementById('tennisBtn').addEventListener('click', () => {
    document.querySelector('#tenRack').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', () => {
    const tennisBtn = document.getElementById('tennisBtn');

    tennisBtn.addEventListener('click', () => {
        // Scroll to the first section
        document.querySelector('#tenRack').scrollIntoView({ behavior: 'smooth' });

        // Add a delay between scrolling to the sections (optional)
        setTimeout(() => {
            // Scroll to the second section
            document.querySelector('#tenBall').scrollIntoView({ behavior: 'smooth' });
        }, 2000); // Adjust the delay time as needed
    });
});


document.getElementById('footballBtn').addEventListener('click', () => {
    document.querySelector('#futBall').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const footBallBtn = document.getElementById('footballBtn');

    footBallBtn.addEventListener('click', () => {
        // Scroll to the first section
        document.querySelector('#futBall').scrollIntoView({ behavior: 'smooth' });

        // Add a delay between scrolling to the sections (optional)
        setTimeout(() => {
            // Scroll to the second section
            document.querySelector('#golGloves').scrollIntoView({ behavior: 'smooth' });
        }, 2000); // Adjust the delay time as needed
    });
});

