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
     //obtain all sellerIDs

        // Send a GET request to server
        const response = await fetch(`/seller/getAllSellers?sellerID= ${sIDValue}`); //paramter passed
        const returned = await response.json();
        const resMsg = returned.message;
        if(resMsg === "Invalid")
         {
            alert("Data Validation: No Such SellerID exists. Try Again with Correct ID");
            selID.value=''; //reset value to prompt entry again
            selID.focus();
            return;
         }

     if(!pNameValue){
        alert("Please Enter a Proper Name for Your Product");
        productName.focus(); 
        return; 
    }
    if (spValue === 0 || isNaN(aqValue)) {
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
           // Login successful
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