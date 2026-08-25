{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
    // Product Click Tracking
let products = document.querySelectorAll(".box");

products.forEach((product, index) => {
    product.addEventListener("click", function () {
        console.log("Product Clicked: Product " + (index + 1));
    });
});

// Image Hover Tracking
let images = document.querySelectorAll(".box-img");

images.forEach((img, index) => {
    img.addEventListener("mouseover", function () {
        console.log("Hovered on Image " + (index + 1));
    });
});

// Mouse Movement Tracking
document.addEventListener("mousemove", function (e) {
    console.log("Mouse Position:", e.clientX, e.clientY);
});

// Scroll Tracking
window.addEventListener("scroll", function () {
    console.log("Scroll Position:", window.scrollY);
});

// Search Tracking
let search = document.getElementById("search");

search.addEventListener("input", function () {
    console.log("Search:", search.value);
});

// Cart Tracking
let cart = document.getElementById("cart");

cart.addEventListener("click", function () {
    console.log("Cart Clicked");
});
}