
// Product List
let products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "T-Shirt", price: 500, category: "Clothing" },
    { name: "Jeans", price: 1200, category: "Clothing" },
    { name: "Watch", price: 1500, category: "Accessories" },
    { name: "Bag", price: 1000, category: "Accessories" }
];

// Display Products
function displayProducts(list) {

    let output = "";

    list.forEach(function(product) {

        output += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
        `;

    });

    document.getElementById("products").innerHTML = output;
}

// Search and Filter
function filterProducts() {

    let searchValue = document.getElementById("search").value.toLowerCase();

    let categoryValue = document.getElementById("category").value;

    let filtered = products.filter(function(product) {

        let matchName = product.name.toLowerCase().includes(searchValue);

        let matchCategory = categoryValue === "All" || product.category === categoryValue;

        return matchName && matchCategory;

    });

    displayProducts(filtered);
}

// Events
document.getElementById("search").addEventListener("input", filterProducts);

document.getElementById("category").addEventListener("change", filterProducts);

// Display all products initially
displayProducts(products);
