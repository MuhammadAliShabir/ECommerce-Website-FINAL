
async function validateSellerID (sIDValue)
{
 // Send a GET request to server
 const response = await fetch(`/seller/getAllSellers?sellerID= ${sIDValue}`); //paramter passed
 const returned = await response.json();
 const resMsg = returned.message;
 if(resMsg === "Invalid")
  {
     alert("Data Validation: No Such SellerID exists. Try Again with Correct ID");
     return false;
  }
  else{
    return true;
  }
}


//--------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded",  () => {
    const addProductForm = document.querySelector("#addItem-form");
    const productName = document.querySelector("#product-name");
    const salePrice = document.querySelector("#sale-price");
    const productDesc = document.querySelector("#product-desc");
    const discountedPrice = document.querySelector("#discounted-price");
    const availableQuantity = document.querySelector("#avbQuantity");
    const category = document.querySelector("#pCategory");
    const selID= document.querySelector("#sellerID");
    addProductForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission

     const pNameValue = productName.value.trim();
     const spValue = salePrice.value;
     const pdValue = productDesc.value.trim();
     const dpValue = discountedPrice.value;
     const aqValue = availableQuantity.value;
     const cValue = category.value;
     const sIDValue = selID.value; 
    //  console.log(pNameValue);
    //  console.log(spValue);
    //  console.log(pdValue);
    //  console.log(dpValue);
    //  console.log(aqValue);
    //  console.log(cValue);

     //validate inputs
    const isSellerIDValid = await validateSellerID(sIDValue); 
    if (isSellerIDValid === false) //re-entry of sellerID
        {  
            selID.value=''; //reset value to prompt entry again
            selID.focus();
            return;
        }   

     if(!pNameValue){
        alert("Please Enter a Proper Name for Your Product");
        productName.focus(); 
        return; 
    }
    if (spValue === 0 || isNaN(spValue)) {
        alert("Sale Price Cannot be 0");
        salePrice.focus(); 
        return; 
    }
    if (aqValue === 0 || isNaN(aqValue) ) {
        alert("Available Quantity Cannot be 0");
        availableQuantity.focus(); 
        return; 
    }

    addProductData = {
        productName : pNameValue,
        description: pdValue,
        price: spValue,
        discount: dpValue,
        availableQuantity:aqValue,
        category:cValue,
        sID: sIDValue
      };
      try {
        // Send POST request to server
        const response = await fetch("itemsManagePage/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addProductData)
        });
    
        if (response.ok) {
           //data insertion successful
          const responseData = await response.json();
          const message= responseData.message;
          alert(message);
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
})
});

//--------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded",  () => {
    const delProductForm = document.querySelector("#deleteItem-form");
    const productID = document.querySelector("#itemID");
    const productName = document.querySelector("#item-name");
    const selID= document.querySelector("#selID");
   delProductForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission


        const pNameValue = productName.value.trim();
        const pIDValue = productID.value; 
        const sIDValue = selID.value; 
       
        //validate inputs
        const isSellerIDValid = await validateSellerID(sIDValue); 
        if (isSellerIDValid === false) //re-entry of sellerID
        {  
            selID.value=''; //reset value to prompt entry again
            selID.focus();
            return;
        }   
        if(!pNameValue){
            alert("Please Enter a Proper Name for Your Product");
            productName.focus(); 
            return; 
        }
        delProductData = {
            productID: pIDValue,
            productName : pNameValue,
            sID: sIDValue
        };
        try {
            // Send DELETE request to server
            const response = await fetch("itemsManagePage/deleteProduct", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(delProductData)
            });
        
            if (response.ok) {
               // Data deletion successful
              const responseData = await response.json();
              const message= responseData.message;
              alert(message);
            } 
            else {
                // Data deletion failed
                const responseData = await response.json();
                const message1= responseData.message;
                const message2 = "MAKE Sure that You Entered Your Own SelerID and the correct product details";
                alert(message1);
                alert(message2);
            }
        } 
        catch (error)
         {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    })
    });
//--------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded",  () => {
    const searchProductForm = document.querySelector("#search-form");
    const productID = document.querySelector("#prodID");
    const productName = document.querySelector("#prodName");
    const selID= document.querySelector("#sel-ID");
   searchProductForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission

      
        const pNameValue = productName.value.trim();
        const pIDValue = productID.value; 
        const sIDValue = selID.value; 
    
        //validate inputs
        const isSellerIDValid = await validateSellerID(sIDValue); 
        if (isSellerIDValid === false) //re-entry of sellerID
        {  
            selID.value=''; //reset value to prompt entry again
            selID.focus();
            return;
        }
        if(!pNameValue){
            alert("Please Enter a Proper Name for Your Product");
            productName.focus(); 
            return; 
        }
        try {
            // Send get request to server
            const response = await fetch
            (`itemsManagePage/findProduct?productID=${pIDValue}&productName=${pNameValue}&sID=${sIDValue}`);
            if (response.ok) {
               // Data search successful
              const responseData = await response.json();
              const message= responseData.message;
              alert(message);
              const productData = responseData.productData;
              const product_Name = document.querySelector("#nameOfItem");
              const productDesc = document.querySelector("#descOfProduct");
              const salePrice = document.querySelector ("#priceOfSale");
              const discPrice = document.querySelector("#priceofDisc");
               //show current values of required product
              product_Name.value = productData.productName;
              productDesc.value = productData.description;
              salePrice.value = productData.price;
              discPrice.value= productData.discount;
             
             manageProductUpdate(product_Name,productDesc,salePrice,discPrice,productData);
            } 
            else {
                // Data search failed
                const responseData = await response.json();
                const message= responseData.message;
                alert(message);
                const messageA = "UPDATE Not Possible: MAKE Sure that You Entered Your Own SellerID and The Correct Product Details";
                alert(messageA);
            }
        } 
        catch (error)
         {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    })
    });
//--------------------------------------------------------------------------

function manageProductUpdate (product_Name,productDesc,salePrice,discPrice,productData) {
    const updateProductForm = document.querySelector("#updateItem-form");
    updateProductForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission
        
        //get details of input
        const pNameValue = product_Name.value.trim();
        const pdValue = productDesc.value.trim();
        const spValue = salePrice.value;
        const dpValue = discPrice.value;

        if(!pNameValue){
            alert("Please Enter a Proper Name for Your Product");
            product_Name.focus(); 
            return; 
        }
        if (spValue === 0 || isNaN(spValue)) {
            alert("Sale Price Cannot be 0");
            salePrice.focus(); 
            return; 
        }
    updateProductData = {
        productName : pNameValue,
        description: pdValue,
        price: spValue,
        discount: dpValue,
        productID: productData.productID //P.K
    };
    try {
        // Send POST request to server
        const response = await fetch("itemsManagePage/updateProduct", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateProductData)
        });
    
        if (response.ok) {
           //data insertion successful
          const responseData = await response.json();
          const message= responseData.message;
          alert(message);
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
})
};


function toggleDiscountField() {
    var displayDiscountCheckbox = document.getElementById("display-discount");
    var discountedPriceContainer = document.getElementById("discounted-price-container");

    // Show or hide the discounted price input field based on the checkbox state
    if (displayDiscountCheckbox.checked) {
        discountedPriceContainer.style.display = "block";
    } else {
        discountedPriceContainer.style.display = "none";
    }
}

function toggleDisplayOfItem() {
    var displayItemCheckbox = document.getElementById("display-Item");
    var product = document.getElementById("product"); // Assuming you have a product element with id "product"
    if (displayItemCheckbox.checked) {
        // Hide the product when checkbox is set
        product.style.display = "none";
        // Show popup that yes, product hidden
        alert("Product is hidden");
    } else {
        // Show the product when checkbox is not set
        product.style.display = "block";
    }
}

document.getElementById("sellerDashBtn").onclick = function () {
    location.href = "/seller";
};

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById('updateItem-form').style.display = 'block'; // Show the form
});