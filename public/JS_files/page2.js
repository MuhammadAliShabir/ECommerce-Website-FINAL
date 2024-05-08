
function salesGraphDisplay(){
    // Sample data for chart
    const products = ['MyProduct1', 'MyProduct2', 'MyProduct3','MyProduct4','MyProduct5'];
    const unitsSold = [20, 15, 10, 10, 5];
    const salePrices = [10, 15, 20, 25, 30];
    
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
salesGraphDisplay();
    
    function onSaleItemsGraph() {
        // Data for products
        var products = ["Product 1", "Product 2", "Product 3", "Product 4"];
        var salePrices = [20, 30, 25, 40]; // Sample sale prices
        var discountedPrices = [15, 25, 20, 35]; // Sample discounted prices
    
        // Create chart
        var ctx = document.getElementById('priceChart').getContext('2d');
        var myChart = new Chart(ctx, {
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
    onSaleItemsGraph();


    document.getElementById("manageItemsBtn").onclick = function () {
        location.href = "/itemsManagePage";
    };