// Product Click Tracking
const products = document.querySelectorAll(".box");

products.forEach((product, index) => {
    product.addEventListener("click", function () {
        console.log("Product Clicked: Product " + (index + 1));
    });
});

// Image Hover Tracking
const images = document.querySelectorAll(".box-img");

images.forEach((image, index) => {
    image.addEventListener("mouseover", function () {
        console.log("Hovered on Image: Product " + (index + 1));
    });
});

// Scroll Tracking
let lastScroll = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;
    let speed = Math.abs(currentScroll - lastScroll);

    console.log("Scroll Position:", currentScroll);
    console.log("Scroll Speed:", speed);

    lastScroll = currentScroll;
});

// Mouse Movement Tracking
document.addEventListener("mousemove", function (event) {
    console.log("Mouse X:", event.clientX);
    console.log("Mouse Y:", event.clientY);
});

// Cart Tracking
const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", function () {
    console.log("Cart Modified");
});

// Search Tracking
const search = document.querySelector(".search-input");

search.addEventListener("input", function () {
    console.log("Search:", search.value);
});