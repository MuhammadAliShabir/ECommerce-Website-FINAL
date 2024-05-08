function addItem() {
    var productName = document.getElementById("product-name").value;
    var salePrice = document.getElementById("sale-price").value;
    // Process the input data as needed
}

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
    if (displayDiscountCheckbox.checked) 
    {
       //implement functionality to hide the product when checkbox is set i.e set that product style to "block"
       //also show popup that yes, product hidden
    } 
}

document.getElementById("sellerDashBtn").onclick = function () {
    location.href = "/seller";
};