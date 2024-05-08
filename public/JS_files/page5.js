
document.addEventListener("DOMContentLoaded", function() {
    // Array to store cart items
    let cartItems = [];
  
    // Function to update the cart HTML
    function updateCart() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartTotal = document.getElementById("total-price");
      let totalPrice = 0;
  
      // Clear existing cart HTML
      cartItemsContainer.innerHTML = "";
  
      // Loop through cart items and display them
      cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
      });
  
      // Update total price
      cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
  
    // Function to add item to cart
    function addItemToCart(name, price) {
      cartItems.push({ name, price });
      updateCart();
    }
  
    // Add event listener for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const itemName = this.dataset.name;
        const itemPrice = parseFloat(this.dataset.price);
        addItemToCart(itemName, itemPrice);
      });
    });
  
    // Add event listener for clear cart button
const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function() {
    cartItems = [];
    count = 0; // Reset the count
    total = 0; // Reset the total
    updateCart();
    countDisplay.textContent = `Products finalized for purchase: ${count}`; // Update the count display
    totalDisplay.textContent = `Total price: $${total.toFixed(2)}`; // Update the total display
    document.querySelectorAll('.product button.selected').forEach(button => {
        button.classList.remove('selected'); // Deselect all selected products
    });
});
  



    // Add event listener for update cart button
    const updateCartButton = document.getElementById("update-cart-button");
    updateCartButton.addEventListener("click", function() {
      //update cart means more items are to be added hence do so by reloading the products page
      //we have implemented only sports equipment page as products page so that is opened
      location.href='/sports-page';
    });
  
    // Function to apply promo code
    function applyPromoCode(promoCode) {
      // Logic to apply promo code and update cart accordingly
      // For demonstration purposes, let's assume the promo code gives a 10% discount
      const discountPercentage = 0.1;
      const totalPrice = parseFloat(document.getElementById("total-price").textContent.slice(1));
      const discountedPrice = totalPrice * (1 - discountPercentage);
      document.getElementById("total-price").textContent = `$${discountedPrice.toFixed(2)}`;
    }
  
    // Add event listener for apply promo code button
    const applyPromoButton = document.getElementById("apply-promo-button");
    applyPromoButton.addEventListener("click", function() {
      const promoCode = document.getElementById("promo-code").value;
      applyPromoCode(promoCode);
    });
  
    // Add event listener for checkout button
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", function() {
      // Redirect to checkout page or perform further checkout actions
      // For demonstration purposes, let's just log a message
      console.log("Redirecting to checkout page...");
    });
});

let count = 0;
let total = 0;
const countDisplay = document.getElementById('product-count');
const totalDisplay = document.getElementById('total-price');

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.dataset.price);
        if (button.classList.contains('selected')) {
            // If the button has the 'selected' class (product is selected), remove it and decrease the count and total
            button.classList.remove('selected');
            count--;
            total -= price;
        } else {
            // If the button doesn't have the 'selected' class (product is unselected), add it and increase the count and total
            button.classList.add('selected');
            count++;
            total += price;
        }
        countDisplay.textContent = `Products finalized for purchase: ${count}`;
        totalDisplay.textContent = `Total price: $${total.toFixed(2)}`;
    });
});



  // Add event listener for toCheckout button
  const toCheckoutButton = document.getElementById("checkout-button");
  toCheckoutButton.addEventListener("click", function() {
    //update cart means more items are to be added hence do so by reloading the products page
    //we have implemented only sports equipment page as products page so that is opened
    location.href='/checkout'; //get request generate for checkout page
  });
