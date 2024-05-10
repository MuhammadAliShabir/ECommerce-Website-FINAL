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
          let productInfo = [];
          allProductsData.forEach(element => {  //intialize the array
           const temp1= element.productName;
           const temp2= element.price;
           const temp3= element.discount;
           const temp4= element.availableQuantity;
           const temp5= element.category;
           let ObjProd= {
            productName: temp1,
            salePrice: temp2,
            discountPrice: temp3,
            availableQuantity: temp4,
            category: temp5
           };
            productInfo.push(ObjProd);
          });
      
        //   //debugging tool
        //   productInfo.forEach(index => {
        //   console.log(index.salePrice);
        //   console.log(index.discountPrice);
        //   });
            onSaleItemsGraph(productInfo);
            salesGraphDisplay(productInfo);
            populateDisplayedItems(productInfo);
            populateOnSaleItems(productInfo);
         } 
         else {
            // Data Fetch failed
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



 
function onSaleItemsGraph(dataArray) {
    // Data for products
    let products= []; 
    let salePrices= [];
    let discountedPrices= [];
    
    dataArray.forEach (index =>{
     products.push(index.productName);
     salePrices.push(index.salePrice);
     discountedPrices.push(index.discountPrice);
    });

    //now the arrays are populated

    // let products = ["Product 1", "Product 2", "Product 3", "Product 4"];
    // let salePrices = [20, 30, 25, 40]; // Sample sale prices
    // let discountedPrices = [15, 25, 20, 35]; // Sample discounted prices

    // Create chart
    let ctx = document.getElementById('priceChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: products,
            datasets: [{
                label: 'Sale Price',
                backgroundColor: 'rgba(113, 89, 193, 0.5)', // Purple
                borderColor: 'rgba(113, 89, 193, 1)',
                borderWidth: 2,
                data: salePrices,
                hoverBackgroundColor: 'rgba(113, 89, 193, 0.7)',
                hoverBorderColor: 'rgba(113, 89, 193, 1)'
            }, {
                label: 'Discounted Price',
                backgroundColor: 'rgba(76, 175, 80, 0.5)', // Green
                borderColor: 'rgba(76, 175, 80, 1)',
                borderWidth: 2,
                data: discountedPrices,
                hoverBackgroundColor: 'rgba(76, 175, 80, 0.7)',
                hoverBorderColor: 'rgba(76, 175, 80, 1)'
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Product Sales',
                fontSize: 24
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {
                        fontSize: 22 // Enlarge the x-axis tick labels
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        fontSize: 22 // Enlarge the y-axis tick labels
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 24 // Enlarge the legend labels
                }
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });
}
function salesGraphDisplay(dataArray){
    let products = [];
    //let unitsSold = [];
    let salePrices = [];
    
    dataArray.forEach (index =>{
        products.push(index.productName);
        salePrices.push(index.salePrice);
       });


    // Sample data for chart
    // const products = ['MyProduct1', 'MyProduct2', 'MyProduct3','MyProduct4','MyProduct5'];
    const unitsSold = [20, 15, 10, 10, 5];
    // const salePrices = [10, 15, 20, 25, 30];
    
    // Create chart
    const ctx = document.getElementById('sales-chart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: products,
            datasets: [{
                label: 'Units Sold',
                data: unitsSold,
                backgroundColor: 'rgba(113, 89, 193, 0.5)', // Purple
                borderColor: 'rgba(113, 89, 193, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(113, 89, 193, 0.7)',
                hoverBorderColor: 'rgba(113, 89, 193, 1)'
            }, {
                label: 'Sale Price',
                data: salePrices,
                backgroundColor: 'rgba(76, 175, 80, 0.5)', // Green
                borderColor: 'rgba(76, 175, 80, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(76, 175, 80, 0.7)',
                hoverBorderColor: 'rgba(76, 175, 80, 1)'
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Product Sales',
                fontSize: 24
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {
                        fontSize: 22 // Enlarge the x-axis tick labels
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        fontSize: 22 // Enlarge the y-axis tick labels
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 24 // Enlarge the legend labels
                }
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });
};


function populateDisplayedItems (dataArray) {
    let products= []; 
    let avbQuan = [];
    let salePrices= [];
    let categories= [];

    dataArray.forEach (index =>{
        products.push(index.productName);
        avbQuan.push(index.availableQuantity);
        salePrices.push(index.salePrice);
        categories.push(index.category);
       });
       const tableBody = document.querySelector('#tbl1');
       let rows = tableBody.querySelectorAll('tr');
       let cells = [];
       rows.forEach (row => {
       cells.push (row.querySelectorAll('td'));
       });
       let j=0;
       cells.forEach( cell => {
       cell[1].textContent = products[j];
       cell[2].textContent = avbQuan[j];
       cell[3].textContent = `$${salePrices[j]}`;
       cell[4].textContent = categories[j];
       ++j;
       });
}
function populateOnSaleItems (dataArray) {
    let products= []; 
    let salePrices= [];
    let discPrices= [];
    let categories= [];

    dataArray.forEach (index =>{
        products.push(index.productName);
        salePrices.push(index.salePrice);
        discPrices.push(index.discountPrice);
        categories.push(index.category);
       });

       const table = document.querySelector('#tbl2');
       let rows = table.querySelectorAll('tr');
       let cells = [];
       rows.forEach (row => {
       cells.push (row.querySelectorAll('td'));
       });
       let j=0;
       cells.forEach( cell => {
       cell[1].textContent = products[j];
       cell[2].textContent = `$${salePrices[j]}`;
       cell[3].textContent = `$${discPrices[j]}`;
       cell[4].textContent = categories[j];
       ++j;
       });
}















document.getElementById("manageItemsBtn").onclick = function () {
    location.href = "/itemsManagePage";
};




   