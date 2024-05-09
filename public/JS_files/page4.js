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