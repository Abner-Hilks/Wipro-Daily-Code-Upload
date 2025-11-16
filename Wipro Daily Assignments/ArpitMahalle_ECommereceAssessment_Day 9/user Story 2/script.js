const apiURL = "products.json"; // change to https://fakestoreapi.com/products if needed

let products = [];
let filteredProducts = [];

// Fetch product data
async function fetchProducts() {
    try {
        const response = await fetch(apiURL);
        
        // Loading placeholder visible until this point
        document.getElementById("loading").innerText = "Loading products...";

        if (!response.ok) throw new Error("Network response failed");

        products = await response.json();
        filteredProducts = [...products];

        document.getElementById("loading").style.display = "none";
        displayProducts(products);
    } 
    catch (error) {
        console.error(error);
        document.getElementById("loading").innerText = "Failed to load products. Try again later.";
    }
}

// Render products to page
function displayProducts(list) {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <div class="col-md-3 mb-3">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}">
                    <h6>${product.title}</h6>
                    <p class="fw-bold">₹${product.price}</p>
                    <small>${product.category}</small>
                </div>
            </div>
        `;
    });
}


// Filter logic
document.getElementById("categoryFilter").addEventListener("change", () => {
    applyFilters();
});

document.getElementById("priceFilter").addEventListener("change", () => {
    applyFilters();
});

function applyFilters() {
    const category = document.getElementById("categoryFilter").value;
    const priceSort = document.getElementById("priceFilter").value;

    filteredProducts = products.filter(p => 
        category === "all" ? true : p.category === category
    );

    if (priceSort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } 
    else if (priceSort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

// Load data on start
fetchProducts();
