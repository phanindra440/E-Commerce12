// Sample Product Data
const products = [
    { id: 1, name: "Laptop", price: 45000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", price: 1500, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Smartphone", price: 25000, image: "https://via.placeholder.com/150" }
];

// Show Products on products.html
if (document.getElementById("product-list")) {
    let html = "";
    products.forEach(p => {
        html += `
            <div class="product-card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <a href="product.html?id=${p.id}"><button>View</button></a>
            </div>
        `;
    });
    document.getElementById("product-list").innerHTML = html;
}

// Product Details
if (document.getElementById("product-details")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = products.find(p => p.id == id);

    document.getElementById("product-details").innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}

// Add to Cart
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// Show Cart
if (document.getElementById("cart-items")) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let html = "";

    cart.forEach(item => {
        html += `
            <div class="product-card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });

    document.getElementById("cart-items").innerHTML = html;
}
