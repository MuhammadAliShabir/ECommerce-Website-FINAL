document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/fetchProducts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        console.log(products); // Log the product data to check if it's correct
        updateProductElements(products);
    } catch (error) {
        console.error('Error fetching product data:', error);
        alert('An error occurred while fetching product data. Please try again later.');
    }
});

function updateProductElements(products) {
    const productList = document.getElementById('productList');
    if (!productList) {
        console.error('Could not find element with id "productList"');
        return;
    }
    productList.innerHTML = '';
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.productName}: ${product.description}, ${product.price}`;
        productList.appendChild(listItem);
    });
}

document.getElementById('tennisBtn').addEventListener('click', () => {
    document.querySelector('#tenRack').scrollIntoView({ behavior: 'smooth' });
});

function updateProductElements(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.productName}: ${product.description}, ${product.price}`;
        productList.appendChild(listItem);
    });
}

document.getElementById('tennisBtn').addEventListener('click', () => {
    document.querySelector('#tenRack').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('footballBtn').addEventListener('click', () => {
    document.querySelector('#futBall').scrollIntoView({ behavior: 'smooth' });
});
