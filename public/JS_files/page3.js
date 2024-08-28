document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/cart/fetchSportsProducts'); //send get request
        if (response.ok) {
            // Data fetch successful
           const responseData = await response.json();
           const message= responseData.message;
           alert(message);
           const allProductsData = responseData.productData; //object received 

           // Assuming that the products are at index 0, 1, 2, 3, 4, 5
           const product1 = allProductsData[0];
           const product2 = allProductsData[1];
           const product3 = allProductsData[2];
           const product4 = allProductsData[3];
           const product5 = allProductsData[4];
           const product6 = allProductsData[5];

           // Update product 1
           document.querySelector("#prodA11").textContent = `${product1.productName}`;
           document.querySelector("#prodA12").textContent= `${product1.description}`;
           document.querySelector("#prodA13").textContent= `Normal Price: $${product1.price}`;
           document.querySelector("#prodA14").textContent= `Sale Price: $${product1.discount}`;

           // Update product 2
           document.querySelector("#prodB11").textContent = `${product2.productName}`;
           document.querySelector("#prodB12").textContent= `${product2.description}`;
           document.querySelector("#prodB13").textContent= `Normal Price: $${product2.price}`;
           document.querySelector("#prodB14").textContent= `Sale Price: $${product2.discount}`;

           // Update product 3
           document.querySelector("#prodC11").textContent = `${product3.productName}`;
           document.querySelector("#prodC12").textContent= `${product3.description}`;
           document.querySelector("#prodC13").textContent= `Normal Price: $${product3.price}`;
           document.querySelector("#prodC14").textContent= `Sale Price: $${product3.discount}`;

           // Update product 4
           document.querySelector("#prodD11").textContent = `${product4.productName}`;
           document.querySelector("#prodD12").textContent= `${product4.description}`;
           document.querySelector("#prodD13").textContent= `Normal Price: $${product4.price}`;
           document.querySelector("#prodD14").textContent= `Sale Price: $${product4.discount}`;

           // Update product 5
           document.querySelector("#prodE11").textContent = `${product5.productName}`;
           document.querySelector("#prodE12").textContent= `${product5.description}`;
           document.querySelector("#prodE13").textContent= `Normal Price: $${product5.price}`;
           document.querySelector("#prodE14").textContent= `Sale Price: $${product5.discount}`;

           // Update product 6
           document.querySelector("#prodF11").textContent = `${product6.productName}`;
           document.querySelector("#prodF12").textContent= `${product6.description}`;
           document.querySelector("#prodF13").textContent= `Normal Price: $${product6.price}`;
           document.querySelector("#prodF14").textContent= `Sale Price: $${product6.discount}`;

           alert("Check and SEE If content is different for all products");
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

async function addSelectedProductInCart (pNameVal ,bID) {
    try {
        // Send POST request to server
        const response = await fetch("/cart/addToCart", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            productName: pNameVal,
            buyerID: bID
        })
        });
    
        if (response.ok) {
           //product insertion in cart successful
          const responseData = await response.json();
          const message= responseData.message;
          alert(message);
        } 
        else {
            // //product insertion in cart failed
            const errorMessage = await response.text();
            alert(errorMessage);
        }
    } 
    catch (error)
     {
        console.error("Error:", error);
        alert("An error occurred whilst trying to add selected product to cart. Please try again later.");
    }
}

document.getElementById('addBballBtn').addEventListener('click', async () => {
   const prodName= document.querySelector("#prodA11");
   const pNameVal = prodName.textContent;
   const bID = 1;
   addSelectedProductInCart(pNameVal,bID);
});

document.getElementById('addFootballBtn').addEventListener('click',async () => {
   const prodName= document.querySelector("#prodB11");
   const pNameVal = prodName.textContent;
   const bID = 1;   
   addSelectedProductInCart(pNameVal,bID);
});

// document.getElementById('addTenRackBtn').addEventListener('click',async () => {
//    const prodName= document.querySelector("#prodC11");
//    const pNameVal = prodName.textContent;
// });

// document.getElementById('addCricBatBtn').addEventListener('click',async () => {
//    const prodName= document.querySelector("#prodD11");
//    const pNameVal = prodName.textContent;
// });
// document.getElementById('addBaseBatBtn').addEventListener('click', () => {
//    const prodName= document.querySelector("#prodE11");
//    const pNameVal = prodName.textContent;
// });

// document.getElementById('addTenBallBtn').addEventListener('click', () => {
//    const prodName= document.querySelector("#prodF11");
//    const pNameVal = prodName.textContent;
// });

























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